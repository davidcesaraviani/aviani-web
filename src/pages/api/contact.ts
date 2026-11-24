import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

// Este endpoint corre en el servidor (Cloudflare Workers), no se prerenderiza.
export const prerender = false;

type ContactEnv = {
	/** Secreto: API key de Resend. */
	RESEND_API_KEY?: string;
	/** Casilla que recibe los mensajes. */
	CONTACT_TO_EMAIL?: string;
	/** Remitente verificado en Resend, p. ej. "Aviani Web <contacto@aviani.com.ar>". */
	CONTACT_FROM_EMAIL?: string;
};

const LIMITS = { name: 100, email: 200, subject: 150, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MESSAGES = {
	es: {
		forbidden: 'Acceso denegado.',
		invalid: 'Solicitud inválida.',
		name: 'El nombre es obligatorio.',
		email: 'Ingresá un email válido.',
		subject: 'El asunto es obligatorio.',
		message: 'El mensaje es obligatorio.',
		max: (n: number) => `Máximo ${n} caracteres.`,
		check: 'Revisá el formulario e intentá de nuevo.',
		unavailable: 'El formulario de contacto no está disponible en este momento.',
		failed: 'No pudimos enviar tu mensaje. Intentá de nuevo más tarde.',
		method: 'Método no permitido.',
	},
	en: {
		forbidden: 'Forbidden',
		invalid: 'Invalid request.',
		name: 'Name is required.',
		email: 'A valid email is required.',
		subject: 'Subject is required.',
		message: 'Message is required.',
		max: (n: number) => `Must be ${n} characters or fewer.`,
		check: 'Please check the form and try again.',
		unavailable: 'The contact form is not available right now.',
		failed: 'We could not send your message. Please try again later.',
		method: 'Method not allowed.',
	},
} as const;

const json = (body: Record<string, unknown>, status = 200) =>
	new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
	});

const field = (data: FormData, key: string) => {
	const value = data.get(key);
	return typeof value === 'string' ? value.trim() : '';
};

export const POST: APIRoute = async ({ request }) => {
	// Solo aceptamos envíos desde el mismo sitio.
	const origin = request.headers.get('Origin');
	if (origin && new URL(origin).host !== new URL(request.url).host) {
		return json({ ok: false, error: MESSAGES.es.forbidden }, 403);
	}

	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return json({ ok: false, error: MESSAGES.es.invalid }, 400);
	}

	// Honeypot: un campo oculto que las personas no completan. Si viene con datos, es un bot;
	// respondemos "ok" para no darle pistas y no enviamos nada.
	if (field(data, 'website')) return json({ ok: true });

	const m = MESSAGES[field(data, 'lang') === 'en' ? 'en' : 'es'];

	const name = field(data, 'name');
	const email = field(data, 'email');
	const subject = field(data, 'subject');
	const message = field(data, 'message');

	const errors: Record<string, string> = {};
	if (!name) errors.name = m.name;
	if (!email || !EMAIL_RE.test(email)) errors.email = m.email;
	if (!subject) errors.subject = m.subject;
	if (!message) errors.message = m.message;
	for (const [key, max] of Object.entries(LIMITS)) {
		if (field(data, key).length > max) errors[key] = m.max(max);
	}
	if (Object.keys(errors).length > 0) {
		return json({ ok: false, error: m.check, fields: errors }, 422);
	}

	const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = env as unknown as ContactEnv;
	if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
		console.error('[contact] Faltan RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.');
		return json({ ok: false, error: m.unavailable }, 500);
	}

	// Sin saltos de línea en el asunto para evitar inyección de cabeceras.
	const cleanSubject = subject.replace(/[\r\n]+/g, ' ');

	const text = [
		`Nombre: ${name}`,
		`Email: ${email}`,
		`Asunto: ${cleanSubject}`,
		'',
		message,
	].join('\n');

	let response: Response;
	try {
		response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				from: CONTACT_FROM_EMAIL,
				to: [CONTACT_TO_EMAIL],
				reply_to: email,
				subject: `[Web] ${cleanSubject}`,
				text,
			}),
		});
	} catch (error) {
		console.error('[contact] No se pudo contactar a Resend:', error);
		return json({ ok: false, error: m.failed }, 502);
	}

	if (!response.ok) {
		console.error('[contact] Resend respondió', response.status, await response.text());
		return json({ ok: false, error: m.failed }, 502);
	}

	return json({ ok: true });
};

// Cualquier otro método no está permitido.
export const ALL: APIRoute = () => json({ ok: false, error: MESSAGES.es.method }, 405);
