import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
	Array.from(root.querySelectorAll<T>(sel));
const $ = <T extends HTMLElement = HTMLElement>(sel: string) => document.querySelector<T>(sel);

/* ---------- Smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduced) {
	lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((t) => lenis!.raf(t * 1000));
	gsap.ticker.lagSmoothing(0);
}

const scrollToEl = (el: HTMLElement) =>
	lenis ? lenis.scrollTo(el, { offset: -100, duration: 1.6 }) : el.scrollIntoView({ block: 'start' });

let refreshTimer = 0;
const refreshSoon = () => {
	clearTimeout(refreshTimer);
	refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 650);
};

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('[data-menu-toggle]');
const menuPanel = $('#mobile-menu');
const setMenu = (open: boolean) => {
	document.documentElement.classList.toggle('menu-open', open);
	menuBtn?.setAttribute('aria-expanded', String(open));
	menuBtn?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
	menuPanel?.setAttribute('aria-hidden', String(!open));
	open ? lenis?.stop() : lenis?.start();
};
menuBtn?.addEventListener('click', () => setMenu(!document.documentElement.classList.contains('menu-open')));
$$('#mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

/* ---------- Accordions ---------- */
const setItem = (item: HTMLElement, open: boolean) => {
	item.classList.toggle('is-open', open);
	item.querySelector('button')?.setAttribute('aria-expanded', String(open));
};
$$('[data-accordion]').forEach((acc) => {
	$$('.acc-item', acc).forEach((item) => {
		item.querySelector('button')?.addEventListener('click', () => {
			const open = !item.classList.contains('is-open');
			$$('.acc-item', acc).forEach((other) => other !== item && setItem(other, false));
			setItem(item, open);
			refreshSoon();
		});
	});
});

/* ---------- In-page anchors (incl. opening an accordion item by hash) ---------- */
const openHash = (hash: string) => {
	const target = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
	if (!target) return false;
	if (target.classList.contains('acc-item')) {
		const acc = target.closest('[data-accordion]');
		if (acc) $$('.acc-item', acc).forEach((o) => o !== target && setItem(o, false));
		setItem(target, true);
		refreshSoon();
	}
	scrollToEl(target);
	return true;
};
$$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
	a.addEventListener('click', (e) => {
		const hash = a.getAttribute('href')!;
		if (openHash(hash)) {
			e.preventDefault();
			history.replaceState(null, '', hash);
		}
	});
});
if (location.hash) addEventListener('load', () => setTimeout(() => openHash(location.hash), 300));

/* ---------- Nav: blur on scroll, hide on scroll down ---------- */
const navEl = $('#nav');
let lastY = 0;
ScrollTrigger.create({
	start: 0,
	end: 'max',
	onUpdate: (self) => {
		const y = self.scroll();
		navEl?.classList.toggle('is-scrolled', y > 40);
		navEl?.classList.toggle('is-hidden', y > 400 && y > lastY);
		lastY = y;
	},
});

/* ---------- Blog category filter ---------- */
const filterGrid = $('[data-filter-grid]');
if (filterGrid) {
	const buttons = $$<HTMLButtonElement>('[data-filter]');
	const empty = $('[data-filter-empty]');
	buttons.forEach((btn) =>
		btn.addEventListener('click', () => {
			const cat = btn.dataset.filter!;
			buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
			const cards = $$('[data-cat]', filterGrid);
			const show = cards.filter((c) => cat === 'all' || c.dataset.cat === cat);
			cards.forEach((c) => (c.hidden = !show.includes(c)));
			if (empty) empty.hidden = show.length > 0;
			if (!reduced) gsap.fromTo(show, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', stagger: 0.06 });
			ScrollTrigger.refresh();
		}),
	);
}

if (reduced) {
	$$('[data-counter]').forEach((el) => (el.textContent = el.dataset.counter!));
	$$('[data-progress]').forEach((el) => (el.style.width = '72%'));
} else {
	/* ---------- Hero intro (home + inner pages) ---------- */
	const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
	const at = (sel: string, vars: gsap.TweenVars, pos: number) => {
		if (document.querySelector(sel)) intro.from(sel, vars, pos);
	};
	at('[data-hero-line]', { yPercent: 115, rotate: 3, duration: 1.4, stagger: 0.1 }, 0.1);
	at('[data-hero-fade]', { y: 30, opacity: 0, duration: 1.2, stagger: 0.08 }, 0.4);
	at('[data-hero-visual]', { clipPath: 'inset(12% 12% 12% 12% round 2rem)', opacity: 0, duration: 1.6 }, 0.3);
	at('[data-hero-img]', { scale: 1.5, duration: 2.2 }, 0.3);
	at('[data-float]', { y: 40, opacity: 0, scale: 0.9, duration: 1.2, stagger: 0.12 }, 0.9);
	if ($('[data-progress]')) intro.to('[data-progress]', { width: '72%', duration: 2, ease: 'power3.inOut' }, 1.3);

	const heroImg = $('[data-hero-img]');
	if (heroImg)
		gsap.to(heroImg, {
			yPercent: 10,
			ease: 'none',
			scrollTrigger: { trigger: heroImg.closest('section') ?? heroImg, start: 'top top', end: 'bottom top', scrub: true },
		});

	/* ---------- Mouse depth parallax ---------- */
	if (finePointer) {
		const layers = $$('[data-depth]').map((el) => ({
			x: gsap.quickTo(el, 'x', { duration: 1, ease: 'power3' }),
			y: gsap.quickTo(el, 'y', { duration: 1, ease: 'power3' }),
			d: parseFloat(el.dataset.depth!),
		}));
		if (layers.length)
			addEventListener('mousemove', (e) => {
				const nx = e.clientX / innerWidth - 0.5;
				const ny = e.clientY / innerHeight - 0.5;
				layers.forEach((l) => {
					l.x(nx * 40 * l.d);
					l.y(ny * 40 * l.d);
				});
			});
	}

	/* ---------- Split line headings ---------- */
	$$('h2').forEach((h) => {
		const lines = $$('[data-split-line]', h);
		if (!lines.length) return;
		gsap.from(lines, {
			yPercent: 115,
			rotate: 2,
			duration: 1.3,
			ease: 'expo.out',
			stagger: 0.1,
			scrollTrigger: { trigger: h, start: 'top 85%' },
		});
	});

	/* ---------- Generic reveal ---------- */
	ScrollTrigger.batch('[data-reveal]', {
		start: 'top 90%',
		once: true,
		onEnter: (els) =>
			gsap.fromTo(els, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.08 }),
	});

	/* ---------- Scrubbed word reveal ---------- */
	$$('[data-scrub-words]').forEach((el) => {
		const words = el.textContent!.trim().split(/\s+/);
		el.innerHTML = words.map((w) => `<span class="inline-block">${w}&nbsp;</span>`).join('');
		gsap.fromTo(
			el.children,
			{ opacity: 0.12 },
			{
				opacity: 1,
				stagger: 0.05,
				ease: 'none',
				scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
			},
		);
	});

	/* ---------- Counters ---------- */
	$$('[data-counter]').forEach((el) => {
		const obj = { v: 0 };
		gsap.to(obj, {
			v: +el.dataset.counter!,
			duration: 2,
			ease: 'power3.out',
			onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
			scrollTrigger: { trigger: el, start: 'top 92%', once: true },
		});
	});

	/* ---------- Clip reveal ---------- */
	$$('[data-clip]').forEach((el) => {
		gsap.from(el, {
			clipPath: 'inset(30% 30% 30% 30% round 2rem)',
			duration: 1.6,
			ease: 'expo.inOut',
			scrollTrigger: { trigger: el, start: 'top 80%' },
		});
	});

	/* ---------- Scroll parallax ---------- */
	$$('[data-parallax]').forEach((el) => {
		const amt = +el.dataset.parallax!;
		gsap.fromTo(
			el,
			{ yPercent: -amt },
			{
				yPercent: amt,
				ease: 'none',
				scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
			},
		);
	});

	/* ---------- Stacked sticky cards ---------- */
	$$('[data-stack]').forEach((stack) => {
		const cards = $$('[data-stack-card]', stack);
		cards.slice(0, -1).forEach((card, i) => {
			gsap.to(card, {
				scale: 0.92,
				opacity: 0.35,
				ease: 'none',
				scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: true },
			});
		});
	});

	/* ---------- Steps progress line ---------- */
	const stepsLine = $('[data-steps-line]');
	if (stepsLine)
		gsap.to(stepsLine, {
			scaleY: 1,
			ease: 'none',
			scrollTrigger: { trigger: '[data-steps]', start: 'top 70%', end: 'bottom 60%', scrub: true },
		});

	/* ---------- Reading progress ---------- */
	const readBar = $('[data-read-progress]');
	if (readBar)
		gsap.to(readBar, {
			scaleX: 1,
			ease: 'none',
			scrollTrigger: { trigger: '.prose-rc', start: 'top 30%', end: 'bottom 70%', scrub: true },
		});

	/* ---------- Horizontal pinned scroll (desktop) ---------- */
	const section = $('[data-hscroll]');
	const track = $('[data-hscroll-track]');
	if (section && track) {
		gsap.matchMedia().add('(min-width: 1024px)', () => {
			const distance = () => track.scrollWidth - innerWidth;
			gsap.to(track, {
				x: () => -distance(),
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: () => `+=${distance()}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});
			gsap.to('[data-hscroll-progress]', {
				scaleX: 1,
				ease: 'none',
				scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, scrub: true },
			});
		});
	}

	/* ---------- Footer giant word ---------- */
	if ($('[data-footer-word]'))
		gsap.from('[data-footer-word]', {
			yPercent: 40,
			opacity: 0,
			ease: 'none',
			scrollTrigger: { trigger: '[data-footer-word]', start: 'top bottom', end: 'bottom bottom', scrub: true },
		});

	if (finePointer) {
		/* ---------- Magnetic buttons ---------- */
		$$('[data-magnetic]').forEach((el) => {
			const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
			const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
			el.addEventListener('mousemove', (e) => {
				const r = el.getBoundingClientRect();
				x((e.clientX - r.left - r.width / 2) * 0.35);
				y((e.clientY - r.top - r.height / 2) * 0.35);
			});
			el.addEventListener('mouseleave', () => {
				x(0);
				y(0);
			});
		});

		/* ---------- Cursor-follow preview on lists ---------- */
		const preview = $('.hover-preview');
		const list = $('[data-hover-list]');
		if (preview && list) {
			const px = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3' });
			const py = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3' });
			const rot = gsap.quickTo(preview, 'rotate', { duration: 0.8, ease: 'power3' });
			let lastX = 0;
			const imgs = $$<HTMLImageElement>('[data-preview]', preview);
			addEventListener('mousemove', (e) => {
				px(e.clientX + 60);
				py(e.clientY);
				rot(gsap.utils.clamp(-12, 12, (e.clientX - lastX) * 0.6));
				lastX = e.clientX;
			});
			$$('[data-preview-key]', list).forEach((row) => {
				const head = row.querySelector('button')!;
				head.addEventListener('mouseenter', () => {
					if (row.classList.contains('is-open')) return;
					preview.classList.add('is-visible');
					imgs.forEach((img) => img.classList.toggle('is-active', img.dataset.preview === row.dataset.previewKey));
				});
				head.addEventListener('mouseleave', () => preview.classList.remove('is-visible'));
				head.addEventListener('click', () => preview.classList.remove('is-visible'));
			});
		}
	}
}

/* ---------- Spotlight cards ---------- */
$$('.spotlight').forEach((el) => {
	el.addEventListener('mousemove', (e) => {
		const r = el.getBoundingClientRect();
		el.style.setProperty('--mx', `${e.clientX - r.left}px`);
		el.style.setProperty('--my', `${e.clientY - r.top}px`);
	});
});

addEventListener('load', () => ScrollTrigger.refresh());
