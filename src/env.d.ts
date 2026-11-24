type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {
		lang: import('./i18n/ui').Lang;
	}
}
