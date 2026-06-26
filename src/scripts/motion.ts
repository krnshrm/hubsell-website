// hubsell — site motion system.
// Self-hosted Lenis smooth scroll + GSAP ScrollTrigger reveals, rebuilt from the
// Webflow site custom code. The `.reveal` / `.reveal-stagger` class contract is
// preserved so existing markup just works. Unlike the original, this respects
// prefers-reduced-motion: when reduced, we skip Lenis and all reveals entirely
// and leave content at full opacity (the inline head guard never adds .has-anim).

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMotion() {
  if (REDUCED) return; // content already visible; no smooth scroll, no reveals.

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // In-page anchor links scroll smoothly through Lenis.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (target && target.length > 1 && document.querySelector(target)) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72 });
      }
    });
  });

  // Single-element fade-up.
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0, duration: 1.3, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
      }
    );
  });

  // Staggered children fade-up.
  gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((el) => {
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
      }
    );
  });
}

initMotion();
