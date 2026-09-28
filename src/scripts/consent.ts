/**
 * Cookie consent (LGPD). Preferences live in localStorage; nothing optional
 * loads until the visitor opts in. Listen for `rc:consent` to react to changes.
 */
export type Category = 'funcionais' | 'analiticos' | 'publicidade';
export type Consent = Record<Category, boolean> & { necessarios: true; date: string; v: 1 };

const KEY = 'rc-consent';

export function getConsent(): Consent | null {
	try {
		const raw = localStorage.getItem(KEY);
		const c = raw ? (JSON.parse(raw) as Consent) : null;
		return c?.v === 1 ? c : null;
	} catch {
		return null;
	}
}

export function saveConsent(choice: Record<Category, boolean>) {
	const consent: Consent = { v: 1, necessarios: true, date: new Date().toISOString(), ...choice };
	try {
		localStorage.setItem(KEY, JSON.stringify(consent));
	} catch {
		/* storage blocked: consent applies to this page view only */
	}
	window.dispatchEvent(new CustomEvent<Consent>('rc:consent', { detail: consent }));
	return consent;
}

export const allows = (cat: Category) => getConsent()?.[cat] === true;

/** Run `fn` now if the category is allowed, or as soon as the visitor allows it. */
export function whenAllowed(cat: Category, fn: () => void) {
	if (allows(cat)) return fn();
	const on = (e: Event) => {
		if ((e as CustomEvent<Consent>).detail[cat]) {
			window.removeEventListener('rc:consent', on);
			fn();
		}
	};
	window.addEventListener('rc:consent', on);
}
