import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
	Array.from(root.querySelectorAll<T & HTMLElement>(sel));

/* ---------- Smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduced) {
	lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((t) => lenis!.raf(t * 1000));
	gsap.ticker.lagSmoothing(0);
}

$$<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
	a.addEventListener('click', (e) => {
		const id = a.getAttribute('href')!;
		if (id.length < 2) return;
		const target = document.querySelector(id);
		if (!target) return;
		e.preventDefault();
		lenis ? lenis.scrollTo(target as HTMLElement, { offset: -20, duration: 1.6 }) : target.scrollIntoView();
	});
});

/* ---------- Nav: blur on scroll, hide on scroll down ---------- */
const navEl = document.getElementById('nav');
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

if (reduced) {
	$$('[data-counter]').forEach((el) => (el.textContent = el.dataset.counter!));
	$$('[data-progress]').forEach((el) => (el.style.width = '72%'));
} else {
	/* ---------- Hero intro ---------- */
	const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
	intro
		.from('[data-hero-line]', { yPercent: 115, rotate: 3, duration: 1.4, stagger: 0.1 }, 0.1)
		.from('[data-hero-fade]', { y: 30, opacity: 0, duration: 1.2, stagger: 0.08 }, 0.4)
		.from('[data-hero-visual]', { clipPath: 'inset(12% 12% 12% 12% round 2rem)', opacity: 0, duration: 1.6 }, 0.3)
		.from('[data-hero-img]', { scale: 1.5, duration: 2.2 }, 0.3)
		.from('[data-float]', { y: 40, opacity: 0, scale: 0.9, duration: 1.2, stagger: 0.12 }, 0.9)
		.to('[data-progress]', { width: '72%', duration: 2, ease: 'power3.inOut' }, 1.3);

	gsap.to('[data-orb]', {
		x: 'random(-120, 120)',
		y: 'random(-80, 80)',
		duration: 8,
		ease: 'sine.inOut',
		repeat: -1,
		yoyo: true,
		repeatRefresh: true,
	});

	gsap.to('[data-hero-img]', {
		yPercent: 12,
		ease: 'none',
		scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
	});

	/* ---------- Mouse depth parallax in hero ---------- */
	if (finePointer) {
		const layers = $$('[data-depth]').map((el) => ({
			x: gsap.quickTo(el, 'x', { duration: 1, ease: 'power3' }),
			y: gsap.quickTo(el, 'y', { duration: 1, ease: 'power3' }),
			d: parseFloat(el.dataset.depth!),
		}));
		document.getElementById('top')?.addEventListener('mousemove', (e) => {
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
		start: 'top 88%',
		once: true,
		onEnter: (els) =>
			gsap.fromTo(
				els,
				{ y: 50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.09 },
			),
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
			scrollTrigger: { trigger: el, start: 'top 90%', once: true },
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
		gsap.fromTo(
			el,
			{ yPercent: -+el.dataset.parallax! },
			{
				yPercent: +el.dataset.parallax!,
				ease: 'none',
				scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
			},
		);
	});

	/* ---------- Horizontal pinned scroll (desktop) ---------- */
	const mm = gsap.matchMedia();
	mm.add('(min-width: 1024px)', () => {
		const section = document.querySelector<HTMLElement>('[data-hscroll]');
		const track = document.querySelector<HTMLElement>('[data-hscroll-track]');
		if (!section || !track) return;
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

	/* ---------- Footer giant word ---------- */
	gsap.from('[data-footer-word]', {
		yPercent: 40,
		opacity: 0,
		ease: 'none',
		scrollTrigger: { trigger: '[data-footer-word]', start: 'top bottom', end: 'bottom bottom', scrub: true },
	});

	/* ---------- Magnetic buttons ---------- */
	if (finePointer) {
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

/* ---------- Custom cursor ---------- */
const cursor = document.querySelector<HTMLElement>('.cursor');
if (cursor && finePointer && !reduced) {
	const cx = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
	const cy = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
	addEventListener('mousemove', (e) => {
		cx(e.clientX);
		cy(e.clientY);
	});
	$$('a, button').forEach((el) => {
		el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
		el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
	});
} else {
	cursor?.remove();
}

addEventListener('load', () => ScrollTrigger.refresh());
