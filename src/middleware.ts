import { defineMiddleware } from 'astro:middleware';
import { defaultLang, getLang, LANG_COOKIE } from './i18n/ui';

export const onRequest = defineMiddleware(async (context, next) => {
	// Enlace sin JavaScript: /?lang=en guarda la preferencia y vuelve a la página.
	const requested = context.url.searchParams.get('lang');
	if (requested === 'es' || requested === 'en') {
		context.cookies.set(LANG_COOKIE, requested, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });
		return context.redirect(context.url.pathname, 303);
	}

	// Español por defecto; solo cambia si la persona eligió inglés.
	context.locals.lang = getLang(context.cookies.get(LANG_COOKIE)?.value ?? defaultLang);

	const response = await next();
	// La respuesta depende de la cookie: que ninguna caché la comparta entre personas.
	// Se copia la respuesta porque sus headers pueden ser inmutables.
	const headers = new Headers(response.headers);
	headers.append('Vary', 'Cookie');
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
});
