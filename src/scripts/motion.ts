// hubsell — site motion system.
// Self-hosted Lenis smooth scroll + the GSAP/ScrollTrigger wiring the product
// embeds rely on. The scroll-reveal tweens were removed (2026-07-02): content
// no longer slides in on scroll, and the `.reveal` / `.reveal-stagger` classes
// left in the markup are inert. Respects prefers-reduced-motion: when reduced,
// we skip Lenis entirely (the inline head guard never adds .has-anim).

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

  // Scroll reveals removed — sections are always visible. The product embeds
  // own their ScrollTriggers; the Lenis wiring above keeps them in sync.
}

initMotion();
