export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non';
const loremLong = `${lorem}, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,`;
const loremShort = `${lorem}.`;

export const ui = {
	es: {
		meta: {
			title: 'David Aviani · Desarrollador Full Stack y Analista de Sistemas',
			description:
				'Portfolio de David Aviani, Desarrollador Full Stack y Analista de Sistemas (UTN Rosario).',
		},
		nav: {
			links: [
				{ label: 'Inicio', href: '/#home' },
				{ label: 'Sobre mí', href: '/#about' },
				{ label: 'Proceso', href: '/#process' },
				{ label: 'IA', href: '/#ai' },
				{ label: 'Portfolio', href: '/#portfolio' },
				{ label: 'Servicios', href: '/#services' },
				{ label: 'Ideas', href: '/#ideas' },
				{ label: 'Tecnología', href: '/tecnologia' },
			],
			contact: 'Contacto',
			main: 'Principal',
			mobile: 'Principal móvil',
			openMenu: 'Abrir menú',
			language: 'Idioma',
		},
		hero: {
			greeting: 'Hola, soy',
			intro: '',
			role1: 'Desarrollador Full Stack',
			and: 'y',
			role2: 'Analista de Sistemas',
			outro: {
				before: '(UTN Rosario). Trabajo en ',
				company: 'Tecso',
				after: ' desde hace más de 21 años. Convierto necesidades de negocio en aplicaciones web a medida, mantenibles y listas para producción.',
			},
			tagline: 'Pasión por la tecnología',
			cta: '¡Hablemos!',
			stats: [
				{ value: '+40', label: 'Proyectos en producción' },
				{ value: '+27', label: 'Clientes' },
			],
			photoAlt: 'Retrato de David Aviani',
		},
		about: {
			photoAlt: 'Retrato profesional',
			title: 'Más de 20 años en Tecso construyendo software que funciona en producción',
			p1: 'Soy Desarrollador Full Stack Senior y Analista de Sistemas por la UTN Rosario. Trabajo en Tecso desde 2005 y participé en sistemas para clientes como Farmacity, OCA Blue, La Segunda, Citibank, OSDE, Volkswagen, Litoral Gas, Yacyretá, Mega Bahía Blanca, Municipalidad de Rosario y Municipalidad de Paraná, desde el análisis, construcción y pase a producción.',
			p2: 'Desarrollo con .NET y Java en el back-end, y con React y Angular en el front-end. Aplico arquitectura limpia y hexagonal, pruebas automatizadas y CI/CD, y trabajo con IA (Claude y Gemini) y desarrollo guiado por especificaciones con OpenSpec para acelerar el trabajo sin resignar calidad.',
			projects: 'Mis proyectos',
			cv: 'Descargar CV',
			cvHref: '/cv/DavidAviani_es_cv.pdf',
		},
		process: {
			title: 'Cómo trabajo',
			p1: 'Un proyecto de software sale bien cuando se entiende el problema antes de escribir código. Mi proceso va del relevamiento al pase a producción, con entregas frecuentes y pruebas automatizadas en cada etapa.',
			p2: 'Trabajo con metodologías ágiles y desarrollo guiado por especificaciones, lo que permite acordar el alcance al inicio y avanzar sin sorpresas.',
			steps: [
				{
					title: '1. Relevamiento',
					description: 'Entiendo tu negocio, a los usuarios y qué problema hay que resolver. Defino el alcance y las prioridades.',
				},
				{
					title: '2. Análisis y diseño',
					description: 'Modelo los datos y los procesos, y defino la arquitectura (limpia o hexagonal) y las especificaciones antes de programar.',
				},
				{
					title: '3. Desarrollo',
					description: 'Construyo en ciclos cortos, con revisión de código, pruebas automatizadas y análisis de calidad (SonarQube) en cada entrega.',
				},
				{
					title: '4. Entrega y mejora',
					description: 'Despliego con integración y entrega continuas (CI/CD), doy soporte y evoluciono el sistema con vos.',
				},
			],
			ai: {
				title: 'Mi compañera: La IA',
				intro:
					'Uso la inteligencia artificial (Claude y Gemini) como un asistente que acelera el trabajo, no como reemplazo del criterio profesional. La responsabilidad por el resultado sigue siendo mía.',
				items: [
					{
						title: 'Primero la especificación',
						description:
							'Con OpenSpec escribo qué se va a construir y por qué antes de generar código. La IA trabaja sobre un acuerdo claro, no sobre suposiciones.',
					},
					{
						title: 'Yo reviso cada cambio',
						description:
							'Todo código sugerido por la IA pasa por mi revisión, igual que el de cualquier colega. Entiendo lo que entra al proyecto.',
					},
					{
						title: 'Pruebas y calidad',
						description:
							'Los cambios se validan con pruebas automatizadas y análisis estático antes de integrarse. La IA no se saltea ningún control.',
					},
					{
						title: 'Resultado: más velocidad',
						description:
							'Menos tiempo en tareas repetitivas y documentación, más tiempo para diseño, decisiones de arquitectura y para escucharte.',
					},
				],
				note: 'Con datos sensibles de clientes tomo recaudos: no comparto información confidencial con herramientas que no estén autorizadas.',
			},
		},
		portfolio: {
			title: 'Portfolio',
			subtitle: 'Selección de clientes y proyectos en producción, de distintos sectores.',
			projects: [
				{
					client: 'Farmacity',
					category: 'Retail · Full Stack',
					title: 'Transferencia',
					description:
						'Sistema de transferencia de la cadena de suministros de la cadena de farmacias.',
					tags: ['Angular 19', '.NET', 'RabbitMQ', 'Arq. hexagonal'],
				},
				{
					client: 'Farmacity',
					category: 'Retail · Back-end',
					title: 'Digitalización',
					description:
						'Procesamiento de imágenes de remitos y órdenes de compra recibidas por webhook de WhatsApp.',
					tags: ['.NET 10', 'Clean Architecture', 'WhatsApp', 'Azure DevOps'],
				},
				{
					client: 'OCA Blue',
					category: 'Fintech · Back-end',
					title: 'Nómina',
					description:
						'Gestión de operaciones sobre cuentas sueldo de empresas clientes.',
					tags: ['Java 21', 'Micronaut 4', 'PostgreSQL', 'GitLab CI/CD'],
				},
				{
					client: 'Tecso',
					category: 'Producto interno · Full Stack',
					title: 'Staffing',
					description:
						'Sistema de colaboradores construido desde cero para la cooperativa.',
					tags: ['React', '.NET 10', 'Clean Architecture', 'Docker'],
				},
				{
					client: 'La Segunda',
					category: 'Seguros · Full Stack',
					title: 'Portal de asegurados',
					description:
						'Portal de asegurados en Angular y migración de Venta online y Recompensas de Camel a Quarkus.',
					tags: ['Angular', 'Quarkus', 'Camel', 'Java'],
				},
				{
					client: 'Citibank',
					category: 'Banca · Full Stack',
					title: 'Notificaciones a clientes',
					description:
						'Construcción y mantenimiento del sistema de notificaciones y de un nuevo sistema de gestión, durante más de 5 años.',
					tags: ['Java', 'Spring', 'Scala', 'MongoDB'],
				},
				{
					client: 'Banco Corporativo CMF',
					category: 'Banca · Full Stack',
					title: 'Cartera de clientes',
					description:
						'Sistema de gestión y evaluación de la cartera de clientes del banco.',
					tags: ['Java', 'Spring', 'Hibernate', 'SQL Server'],
				},
				{
					client: 'IBM Maximo',
					category: 'Gestión de activos · Full Stack',
					title: 'Implementación y soporte',
					description:
						'Implementación, migración y soporte de Maximo para Litoral Gas, Mega, Yacyretá, Volkswagen y Telefe.',
					tags: ['IBM Maximo', 'Java', 'WebSphere', 'BIRT'],
				},
				{
					client: 'SIAT Paraná',
					category: 'Sector público · Full Stack',
					title: 'Administración tributaria',
					description:
						'Evolución del Sistema Integrado de Administración Tributaria durante 3 años.',
					tags: ['Java', 'Struts', 'Hibernate', 'DB2'],
				},
				{
					client: 'SIAT Rosario',
					category: 'Sector público · Full Stack',
					title: 'Sistema tributario',
					description:
						'Desarrollo del framework base del sistema tributario de la ciudad.',
					tags: ['Java', 'Struts', 'Hibernate', 'Informix'],
				},
				{
					client: 'APS',
					category: 'Salud · Full Stack',
					title: 'Atención primaria de la Salud',
					description:
						'Sistema de gestión de atención primaria de la salud, desarrollado durante 17 meses.',
					tags: ['Java', 'Struts', 'Hibernate', 'Informix'],
				},
				{
					client: 'Seminium',
					category: 'Agroindustria · Full Stack',
					title: 'Sistema comercial',
					description:
						'Sistema comercial de una empresa mayorista cerealera.',
					tags: ['Java', 'MySQL'],
				},
			],
		},
		cta: {
			title: ['¿Tenés una idea de proyecto?', '¡Hablemos!'],
			button: 'Trabajemos juntos',
		},
		ideas: {
			title: 'Lo que quiero construir',
			subtitle:
				'Estas son las ideas en las que quiero trabajar.',
			items: [
				{
					title: 'Plataforma profesional y personal',
					description:
						'Construcción de una plataforma para gestionar la carrera profesional y personal (a partir de esta misma aplicación).',
					tags: [],
				},
				{
					title: 'Gestión de activos para la industria con inteligencia artificial',
					description:
						'Un sistema de gestión de activos y mantenimiento preventivo para la industria con IA.',
					tags: [],
				},
				{
					title: 'CRM conversacional con inteligencia artificial',
					description:
						'Enfocado en la atención al cliente por mensajería. Centraliza los chats en una sola plataforma para convertir conversaciones en ventas ordenadas.',
					tags: ['WhatsApp', 'Instagram', 'Facebook', 'TikTok', 'Telegram'],
				},
				{
					title: 'Software social',
					description:
						'Construcción de software para organizaciones sin fines de lucro, que trabajan por causas sociales, humanitarias, culturales o ambientales.',
					tags: [],
				},
			],
			cta: 'Hablemos',
			ctaText: '¿Te interesa alguna de estas ideas, o querés sumarte? Escribime.',
		},
		services: {
			title: 'Qué puedo hacer por vos: pensar y trabajar',
			p1:
				'Más de 20 años de experiencia me permiten acompañarte desde la idea hasta que el sistema está funcionando en producción.',
			p2: 'Estos son los trabajos en los que más puedo ayudarte.',
			cta: '¡Hablemos!',
			items: [
				{
					title: 'Desarrollo de aplicaciones web a medida',
					description:
						'Sistemas de punta a punta, con .NET o Java en el back-end y React o Angular en el front-end, con arquitectura limpia y pruebas automatizadas.',
				},
				{
					title: 'Integraciones y APIs',
					description:
						'Servicios REST, mensajería (RabbitMQ), integración con sistemas existentes y conexión con herramientas como WhatsApp.',
				},
				{
					title: 'Modernización y mantenimiento',
					description:
						'Evolución de sistemas existentes, migraciones de tecnología (por ejemplo, de Camel a Quarkus) y soporte con CI/CD.',
				},
				{
					title: 'IBM Maximo',
					description:
						'Implementación, migración de versiones, integraciones, desarrollo de aplicaciones y soporte de la plataforma de gestión de activos.',
				},
			],
		},
		quote: {
			text: 'Que el espíritu del desarrollo guíe a la empresa de sistemas',
			author: 'David Aviani',
		},
		contact: {
			title: 'Hablemos de tu proyecto',
			intro: 'Contá conmigo. Decime qué necesitás.',
			addressLabel: 'Ubicación:',
			emailLabel: 'Mi email:',
			fields: {
				name: 'Nombre*',
				email: 'Email*',
				subject: 'Asunto*',
				message: 'Mensaje*',
			},
			submit: 'Enviar',
			sending: 'Enviando...',
			success: '¡Gracias! Tu mensaje fue enviado.',
			error: 'Algo salió mal. Probá de nuevo.',
			network: 'Error de red. Revisá tu conexión e intentá de nuevo.',
		},
		whatsapp: {
			label: 'Escribime por WhatsApp',
			message: '¡Hola! Quiero que me contacten y recibir más información sobre…',
		},
		tech: {
			metaTitle: 'Tecnología · David Aviani',
			metaDescription: 'Cómo está construido aviani.com.ar: stack, arquitectura, servidor en Cloudflare Workers y proceso de publicación.',
			eyebrow: 'Detrás de escena',
			title: 'Cómo está construido este sitio',
			intro: 'Un sitio liviano, renderizado en el servidor y desplegado en el borde de la red de Cloudflare. Acá está el detalle técnico completo.',
			groups: [
				{
					title: 'Servidor y hosting',
					items: [
						{ label: 'Plataforma', value: 'Cloudflare Workers (runtime V8 en el edge), no hay un servidor tradicional ni una máquina virtual que mantener.' },
						{ label: 'Dónde corre', value: 'En la red global de Cloudflare: cada visita se atiende desde el centro de datos más cercano a quien la hace.' },
						{ label: 'Archivos estáticos', value: 'Workers Static Assets: CSS, JS, imágenes, favicon y CV se sirven desde la CDN de Cloudflare.' },
						{ label: 'Dominio y DNS', value: 'aviani.com.ar y www.aviani.com.ar son custom domains del Worker; el DNS está delegado en Cloudflare y el HTTPS es automático.' },
						{ label: 'Bindings', value: 'ASSETS (archivos estáticos), IMAGES (Cloudflare Images) y SESSION (KV Namespace).' },
						{ label: 'Observabilidad', value: 'Logs y métricas del Worker activados en Cloudflare (observability).' },
						{ label: 'Configuración', value: 'wrangler.jsonc, con compatibility_date 2026-11-17 y el flag global_fetch_strictly_public.' },
					],
				},
				{
					title: 'Aplicación',
					items: [
						{ label: 'Framework', value: 'Astro 7 con renderizado en servidor (SSR) mediante el adaptador @astrojs/cloudflare 14.' },
						{ label: 'Lenguaje', value: 'TypeScript. Runtime de desarrollo: Node.js 22 o superior.' },
						{ label: 'Estilos', value: 'Tailwind CSS 4, integrado como plugin de Vite; la paleta y las fuentes están definidas como tokens en @theme.' },
						{ label: 'Tipografías', value: 'Montserrat (texto) y Poppins (logo), desde Google Fonts.' },
						{ label: 'React', value: 'La integración @astrojs/react 7 con React 19 está instalada para componentes interactivos; hoy la página funciona sin JavaScript de framework.' },
						{ label: 'SEO y redes', value: 'Metadatos Open Graph y Twitter Card, imagen de vista previa de 1200×630 y etiqueta lang según el idioma.' },
					],
				},
				{
					title: 'Idiomas',
					items: [
						{ label: 'Diccionario', value: 'Todos los textos viven en un diccionario tipado (src/i18n/ui.ts) para español e inglés.' },
						{ label: 'Elección', value: 'Un middleware de Astro lee la cookie lang; por defecto el sitio sale en español.' },
						{ label: 'Cambio de idioma', value: 'El selector funciona también sin JavaScript: /?lang=en guarda la cookie y redirige con un 303.' },
						{ label: 'Caché', value: 'Como la respuesta depende de la cookie, se envía Vary: Cookie para que ninguna caché mezcle idiomas.' },
					],
				},
				{
					title: 'Formulario de contacto',
					items: [
						{ label: 'Endpoint', value: 'POST /api/contact, una ruta de servidor que corre en el mismo Worker.' },
						{ label: 'Validación', value: 'Campos obligatorios, formato de email, límites de largo por campo y mensajes de error en el idioma de la persona.' },
						{ label: 'Anti-spam', value: 'Campo oculto (honeypot) y verificación de que el Origin sea el mismo sitio.' },
						{ label: 'Seguridad', value: 'Se eliminan saltos de línea del asunto para evitar inyección de cabeceras de correo.' },
						{ label: 'Envío', value: 'API de Resend. La clave y las casillas se guardan como secretos del Worker (wrangler secret), nunca en el código.' },
					],
				},
				{
					title: 'Publicación',
					items: [
						{ label: 'Código', value: 'Repositorio en GitHub, rama main.' },
						{ label: 'Deploy', value: 'npm run deploy: astro build y wrangler deploy. Sube los assets nuevos y publica una versión nueva del Worker en pocos segundos.' },
						{ label: 'Entorno local', value: 'npm run dev levanta el sitio en localhost:4321 con el mismo runtime de Workers.' },
					],
				},
			],
			flowTitle: 'Qué pasa cuando alguien abre el sitio',
			steps: [
				'El navegador resuelve aviani.com.ar en el DNS de Cloudflare y se conecta por HTTPS al centro de datos más cercano.',
				'Cloudflare entrega directamente los archivos estáticos (CSS, imágenes, íconos) desde su CDN.',
				'Para las páginas, se ejecuta el Worker: el middleware lee la cookie de idioma y Astro renderiza el HTML en ese idioma.',
				'La respuesta vuelve con Vary: Cookie y el navegador pide el resto de los recursos.',
				'Si la persona envía el formulario, el Worker valida los datos y le pide a Resend que envíe el correo.',
			],
			back: 'Volver al inicio',
		},
		footer: {
			nav: 'Pie de página',
			links: [
				{ label: 'Inicio', href: '/#home' },
				{ label: 'Sobre mí', href: '/#about' },
				{ label: 'Proceso', href: '/#process' },
				{ label: 'IA', href: '/#ai' },
				{ label: 'Portfolio', href: '/#portfolio' },
				{ label: 'Servicios', href: '/#services' },
				{ label: 'Ideas', href: '/#ideas' },
				{ label: 'Tecnología', href: '/tecnologia' },
				{ label: 'Contacto', href: '/#contact' },
			],
			copyright: 'Copyright © 2026 David Aviani.',
		},
	},
	en: {
		meta: {
			title: 'David Aviani · Full Stack Developer & Systems Analyst',
			description:
				'Portfolio of David Aviani, Full Stack Developer and Systems Analyst (UTN Rosario).',
		},
		nav: {
			links: [
				{ label: 'Home', href: '/#home' },
				{ label: 'About', href: '/#about' },
				{ label: 'Process', href: '/#process' },
				{ label: 'AI', href: '/#ai' },
				{ label: 'Portfolio', href: '/#portfolio' },
				{ label: 'Services', href: '/#services' },
				{ label: 'Ideas', href: '/#ideas' },
				{ label: 'Technology', href: '/tecnologia' },
			],
			contact: 'Contact',
			main: 'Main',
			mobile: 'Mobile main',
			openMenu: 'Open menu',
			language: 'Language',
		},
		hero: {
			greeting: 'Hello, I’m',
			intro: '',
			role1: 'Full Stack Developer',
			and: 'and',
			role2: 'Systems Analyst',
			outro: {
				before: '(UTN Rosario). I’ve worked at ',
				company: 'Tecso',
				after: ' for over 21 years. I turn business needs into custom, maintainable, production-ready web applications.',
			},
			tagline: 'Passion for technology',
			cta: 'Say Hello!',
			stats: [
				{ value: '+40', label: 'Projects in Production' },
				{ value: '+27', label: 'Clients' },
			],
			photoAlt: 'Portrait of David Aviani',
		},
		about: {
			photoAlt: 'Professional portrait',
			title: 'Over 20 years building software that runs in production',
			p1: 'I’m a Senior Full Stack Developer and Systems Analyst (UTN Rosario). I’ve worked at Tecso since 2005 and taken part in systems for clients such as Farmacity, OCA Blue, La Segunda, Citibank, OSDE, Volkswagen, Litoral Gas, Yacyretá, Mega Bahía Blanca and the Municipality of Paraná, from analysis through to production release.',
			p2: 'I work with .NET and Java on the back end, and React and Angular on the front end. I apply clean and hexagonal architecture, automated testing and CI/CD, and work with AI (Claude and Gemini) and spec-driven development with OpenSpec to speed up the work without giving up quality.',
			projects: 'My Projects',
			cv: 'Download CV',
			// Todavía no hay CV en inglés: se usa el de español.
			cvHref: '/cv/DavidAviani_es_cv.pdf',
		},
		process: {
			title: 'How I work',
			p1: 'A software project goes well when the problem is understood before any code is written. My process runs from discovery to production release, with frequent deliveries and automated tests at every stage.',
			p2: 'I work with agile methods and spec-driven development, so scope is agreed up front and the project moves forward without surprises.',
			steps: [
				{
					title: '1. Discovery',
					description: 'I learn your business, your users and the problem to solve. I define the scope and the priorities.',
				},
				{
					title: '2. Analysis & design',
					description: 'I model the data and the processes, and define the architecture (clean or hexagonal) and the specifications before coding.',
				},
				{
					title: '3. Development',
					description: 'I build in short cycles, with code review, automated tests and quality analysis (SonarQube) on every delivery.',
				},
				{
					title: '4. Delivery & improvement',
					description: 'I deploy with continuous integration and delivery (CI/CD), provide support and evolve the system with you.',
				},
			],
			ai: {
				title: 'My companion: AI',
				intro:
					'I use artificial intelligence (Claude and Gemini) as an assistant that speeds up the work, not as a replacement for professional judgment. I remain accountable for the result.',
				items: [
					{
						title: 'Specification first',
						description:
							'With OpenSpec I write down what will be built and why before any code is generated. The AI works from a clear agreement, not from assumptions.',
					},
					{
						title: 'I review every change',
						description:
							'All AI-suggested code goes through my review, just like a colleague’s. I understand everything that enters the project.',
					},
					{
						title: 'Tests and quality',
						description:
							'Changes are validated with automated tests and static analysis before they are merged. The AI skips no checks.',
					},
					{
						title: 'The result: more speed',
						description:
							'Less time on repetitive tasks and documentation, more time for design, architecture decisions and listening to you.',
					},
				],
				note: 'With sensitive client data I take precautions: I do not share confidential information with tools that are not authorized.',
			},
		},
		portfolio: {
			title: 'Portfolio',
			subtitle: 'A selection of real projects in production, across different industries.',
			projects: [
				{
					client: 'Farmacity',
					category: 'Retail · Full Stack',
					title: 'Transfer',
					description:
						'Supply chain transfer system for the pharmacy chain.',
					tags: ['Angular 19', '.NET', 'RabbitMQ', 'Hexagonal arch.'],
				},
				{
					client: 'Farmacity',
					category: 'Retail · Back-end',
					title: 'Digitization',
					description:
						'Processing of delivery note and purchase order images received through a WhatsApp webhook.',
					tags: ['.NET 10', 'Clean Architecture', 'WhatsApp', 'Azure DevOps'],
				},
				{
					client: 'OCA Blue',
					category: 'Fintech · Back-end',
					title: 'Payroll',
					description:
						'Management of operations on payroll accounts for corporate clients.',
					tags: ['Java 21', 'Micronaut 4', 'PostgreSQL', 'GitLab CI/CD'],
				},
				{
					client: 'Tecso',
					category: 'Internal product · Full Stack',
					title: 'Staffing',
					description:
						'Staff management system built from scratch for the cooperative.',
					tags: ['React', '.NET 10', 'Clean Architecture', 'Docker'],
				},
				{
					client: 'La Segunda',
					category: 'Insurance · Full Stack',
					title: 'Policyholder portal',
					description:
						'Policyholder portal in Angular, and migration of Online Sales and Rewards from Camel to Quarkus.',
					tags: ['Angular', 'Quarkus', 'Camel', 'Java'],
				},
				{
					client: 'Citibank',
					category: 'Banking · Full Stack',
					title: 'Customer notifications',
					description:
						'Construction and maintenance of the notification system and of a new management system, over more than 5 years.',
					tags: ['Java', 'Spring', 'Scala', 'MongoDB'],
				},
				{
					client: 'Banco Corporativo CMF',
					category: 'Banking · Full Stack',
					title: 'Client portfolio',
					description:
						'Management and evaluation system for the bank’s client portfolio.',
					tags: ['Java', 'Spring', 'Hibernate', 'SQL Server'],
				},
				{
					client: 'IBM Maximo',
					category: 'Asset management · Full Stack',
					title: 'Implementation & support',
					description:
						'Implementation, migration and support of Maximo for Litoral Gas, Mega, Yacyretá, Volkswagen and Telefe.',
					tags: ['IBM Maximo', 'Java', 'WebSphere', 'BIRT'],
				},
				{
					client: 'SIAT Paraná',
					category: 'Public sector · Full Stack',
					title: 'Tax administration',
					description:
						'Evolution of the Integrated Tax Administration System over 3 years.',
					tags: ['Java', 'Struts', 'Hibernate', 'DB2'],
				},
				{
					client: 'SIAT Rosario',
					category: 'Public sector · Full Stack',
					title: 'Tax system',
					description:
						'Development of the base framework of the city’s tax system.',
					tags: ['Java', 'Struts', 'Hibernate', 'Informix'],
				},
				{
					client: 'APS',
					category: 'Health · Full Stack',
					title: 'Primary care',
					description:
						'Primary care management system, developed over 17 months.',
					tags: ['Java', 'Struts', 'Hibernate', 'Informix'],
				},
				{
					client: 'Seminium',
					category: 'Agribusiness · Full Stack',
					title: 'Commercial system',
					description:
						'Commercial system for a wholesale grain company.',
					tags: ['Java', 'MySQL'],
				},
			],
		},
		cta: {
			title: ['Do you have a project idea?', 'Let’s discuss it!'],
			button: 'Let’s work Together',
		},
		ideas: {
			title: 'What I want to build',
			subtitle:
				'Besides client projects, these are my own ideas that I want to work on.',
			items: [
				{
					title: 'Professional and personal platform',
					description:
						'Building a platform to manage professional and personal career (starting from this very application).',
					tags: [],
				},
				{
					title: 'Asset management for the industrial sector',
					description:
						'An asset and maintenance management system for industry, along the lines of IBM Maximo.',
					tags: [],
				},
				{
					title: 'Conversational CRM with artificial intelligence',
					description:
						'Focused on customer service over messaging. It brings all chats into a single platform to turn conversations into organized sales.',
					tags: ['WhatsApp', 'Instagram', 'Facebook', 'TikTok', 'Telegram'],
				},
				{
					title: 'Social software',
					description:
						'Building software for non-profit organizations working on social, humanitarian, cultural or environmental causes.',
					tags: [],
				},
			],
			cta: 'Let’s talk',
			ctaText: 'Interested in any of these ideas, or want to join in? Write to me.',
		},
		services: {
			title: 'What I can do for you: think and work',
			p1:
				'Over 20 years of experience let me support you from the idea until the system is running in production.',
			p2: 'These are the kinds of work where I can help you the most.',
			cta: 'Say Hello!',
			items: [
				{
					title: 'Custom web application development',
					description:
						'End-to-end systems, with .NET or Java on the back end and React or Angular on the front end, with clean architecture and automated tests.',
				},
				{
					title: 'Integrations & APIs',
					description:
						'REST services, messaging (RabbitMQ), integration with existing systems and connections with tools such as WhatsApp.',
				},
				{
					title: 'Modernization & maintenance',
					description:
						'Evolution of existing systems, technology migrations (for example, from Camel to Quarkus) and support with CI/CD.',
				},
				{
					title: 'IBM Maximo',
					description:
						'Implementation, version migration, integrations, application development and support of the asset management platform.',
				},
			],
		},
		quote: {
			text: 'May the spirit of development guide the systems company',
			author: 'David Aviani',
		},
		contact: {
			title: 'Let’s discuss your Project',
			intro: 'Count on me. Tell me what you need.',
			addressLabel: 'Location:',
			emailLabel: 'My Email:',
			fields: {
				name: 'Name*',
				email: 'Email*',
				subject: 'Subject*',
				message: 'Message*',
			},
			submit: 'Submit',
			sending: 'Sending...',
			success: 'Thanks! Your message has been sent.',
			error: 'Something went wrong. Please try again.',
			network: 'Network error. Please check your connection and try again.',
		},
		whatsapp: {
			label: 'Message me on WhatsApp',
			message: 'Hi! I’d like to be contacted and get more information about…',
		},
		tech: {
			metaTitle: 'Technology · David Aviani',
			metaDescription: 'How aviani.com.ar is built: stack, architecture, Cloudflare Workers hosting and publishing process.',
			eyebrow: 'Behind the scenes',
			title: 'How this site is built',
			intro: 'A lightweight, server-rendered site deployed on the edge of the Cloudflare network. Here are the full technical details.',
			groups: [
				{
					title: 'Server and hosting',
					items: [
						{ label: 'Platform', value: 'Cloudflare Workers (V8 runtime at the edge); there is no traditional server or virtual machine to maintain.' },
						{ label: 'Where it runs', value: "On Cloudflare's global network: every visit is served from the data center closest to the visitor." },
						{ label: 'Static files', value: "Workers Static Assets: CSS, JS, images, favicon and CV are served from Cloudflare's CDN." },
						{ label: 'Domain and DNS', value: 'aviani.com.ar and www.aviani.com.ar are custom domains of the Worker; DNS is delegated to Cloudflare and HTTPS is automatic.' },
						{ label: 'Bindings', value: 'ASSETS (static files), IMAGES (Cloudflare Images) and SESSION (KV Namespace).' },
						{ label: 'Observability', value: 'Worker logs and metrics enabled in Cloudflare (observability).' },
						{ label: 'Configuration', value: 'wrangler.jsonc, with compatibility_date 2026-11-17 and the global_fetch_strictly_public flag.' },
					],
				},
				{
					title: 'Application',
					items: [
						{ label: 'Framework', value: 'Astro 7 with server-side rendering (SSR) through the @astrojs/cloudflare 14 adapter.' },
						{ label: 'Language', value: 'TypeScript. Development runtime: Node.js 22 or later.' },
						{ label: 'Styles', value: 'Tailwind CSS 4, integrated as a Vite plugin; palette and fonts are defined as tokens in @theme.' },
						{ label: 'Typefaces', value: 'Montserrat (text) and Poppins (logo), from Google Fonts.' },
						{ label: 'React', value: 'The @astrojs/react 7 integration with React 19 is installed for interactive components; today the page works without framework JavaScript.' },
						{ label: 'SEO and sharing', value: 'Open Graph and Twitter Card metadata, a 1200×630 preview image and a lang attribute that follows the language.' },
					],
				},
				{
					title: 'Languages',
					items: [
						{ label: 'Dictionary', value: 'All copy lives in a typed dictionary (src/i18n/ui.ts) for Spanish and English.' },
						{ label: 'Selection', value: 'An Astro middleware reads the lang cookie; the site defaults to Spanish.' },
						{ label: 'Switching', value: 'The selector also works without JavaScript: /?lang=en stores the cookie and redirects with a 303.' },
						{ label: 'Caching', value: 'Because the response depends on the cookie, Vary: Cookie is sent so no cache mixes languages.' },
					],
				},
				{
					title: 'Contact form',
					items: [
						{ label: 'Endpoint', value: 'POST /api/contact, a server route running in the same Worker.' },
						{ label: 'Validation', value: "Required fields, email format, per-field length limits and error messages in the visitor's language." },
						{ label: 'Anti-spam', value: 'A hidden honeypot field and a check that the Origin is the same site.' },
						{ label: 'Security', value: 'Line breaks are stripped from the subject to prevent mail header injection.' },
						{ label: 'Delivery', value: 'Resend API. The key and mailboxes are stored as Worker secrets (wrangler secret), never in the code.' },
					],
				},
				{
					title: 'Publishing',
					items: [
						{ label: 'Code', value: 'GitHub repository, main branch.' },
						{ label: 'Deploy', value: 'npm run deploy: astro build and wrangler deploy. It uploads new assets and publishes a new Worker version within seconds.' },
						{ label: 'Local environment', value: 'npm run dev serves the site at localhost:4321 with the same Workers runtime.' },
					],
				},
			],
			flowTitle: 'What happens when someone opens the site',
			steps: [
				'The browser resolves aviani.com.ar on Cloudflare DNS and connects over HTTPS to the nearest data center.',
				'Cloudflare serves static files (CSS, images, icons) straight from its CDN.',
				'For pages, the Worker runs: the middleware reads the language cookie and Astro renders the HTML in that language.',
				'The response returns with Vary: Cookie and the browser requests the remaining resources.',
				'If the visitor submits the form, the Worker validates the data and asks Resend to send the email.',
			],
			back: 'Back to home',
		},
		footer: {
			nav: 'Footer',
			links: [
				{ label: 'Home', href: '/#home' },
				{ label: 'About', href: '/#about' },
				{ label: 'Process', href: '/#process' },
				{ label: 'AI', href: '/#ai' },
				{ label: 'Portfolio', href: '/#portfolio' },
				{ label: 'Services', href: '/#services' },
				{ label: 'Ideas', href: '/#ideas' },
				{ label: 'Technology', href: '/tecnologia' },
				{ label: 'Contact', href: '/#contact' },
			],
			copyright: 'Copyright © 2026 David Aviani.',
		},
	},
} as const;

export function getLang(locale: string | undefined): Lang {
	return locale === 'en' ? 'en' : 'es';
}

/** Cookie donde se guarda el idioma elegido. */
export const LANG_COOKIE = 'lang';
