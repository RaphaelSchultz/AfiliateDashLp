import { useEffect } from 'react';
import { useReducedMotion } from './MotionElements';

// All observers, timers and animation frames belong to the mounted page.
export default function useLandingMotion(ref) {
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const frames = new Set();
    const counters = new WeakSet();
    const all = selector => [...root.querySelectorAll(selector)];
    const frame = fn => {
      const id = requestAnimationFrame(time => { frames.delete(id); fn(time); });
      frames.add(id);
    };
    const format = (value, node) => {
      const decimals = Number(node.dataset.dec || 0);
      if (decimals) return value.toFixed(decimals).replace('.', 'comma' in node.dataset ? ',' : '.');
      return 'thousand' in node.dataset ? Math.round(value).toLocaleString('pt-BR') : String(Math.round(value));
    };
    const count = node => {
      if (counters.has(node)) return;
      counters.add(node);
      const target = Number(node.dataset.count);
      const suffix = node.dataset.suffix || '';
      if (reduced) { node.textContent = format(target, node) + suffix; return; }
      let start;
      const tick = time => {
        start ??= time;
        const progress = Math.min((time - start) / 1500, 1);
        node.textContent = format(target * (1 - (1 - progress) ** 3), node) + (progress === 1 ? suffix : '');
        if (progress < 1) frame(tick);
      };
      frame(tick);
    };
    const reveal = node => {
      node.classList.add('in');
      if (node.matches('[data-count]')) count(node);
      node.querySelectorAll('[data-count]').forEach(count);
      node.querySelectorAll('[data-w]').forEach((bar, i) => {
        bar.style.transitionDelay = reduced ? '0s' : `${200 + i * 120}ms`;
        bar.style.width = `${bar.dataset.w}%`;
      });
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { reveal(entry.target); observer.unobserve(entry.target); } });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
    all('.rv, .float, .kpi, .steps, [data-count]').forEach(node => reduced ? reveal(node) : observer.observe(node));
    const win = root.querySelector('#window');
    const scrub = root.querySelector('#scrub');
    const words = all('#scrub .w');
    const sticky = root.querySelector('.sticky');
    const pricing = root.querySelector('#planos');
    const dots = all('.dots a');
    const sections = dots.map(dot => root.querySelector(`#${dot.dataset.spy}`)).filter(Boolean);
    let pending = false;
    const update = () => {
      pending = false;
      const vh = window.innerHeight;
      if (win) {
        const progress = reduced ? 1 : Math.min(Math.max((vh - win.getBoundingClientRect().top) / (vh * .85), 0), 1);
        win.style.setProperty('--tilt', `${16 * (1 - progress)}deg`);
        win.style.setProperty('--scale', `${.94 + .06 * progress}`);
      }
      if (scrub) {
        const rect = scrub.getBoundingClientRect();
        const progress = reduced ? 1 : Math.min(Math.max((vh * .85 - rect.top) / (rect.height + vh * .3), 0), 1);
        words.forEach((word, i) => word.classList.toggle('on', i < Math.round(progress * words.length)));
      }
      const priceRect = pricing?.getBoundingClientRect();
      const plansVisible = priceRect && priceRect.top < vh && priceRect.bottom > 0;
      const showSticky = window.scrollY > 700 && !plansVisible && window.scrollY + vh < document.documentElement.scrollHeight - 400;
      if (sticky) { sticky.classList.toggle('show', showSticky); sticky.inert = !showSticky; }
      const reached = sections.filter(section => section.getBoundingClientRect().top <= vh * .5);
      const active = reached[reached.length - 1] || sections[0];
      dots.forEach(dot => {
        const selected = dot.dataset.spy === active?.id;
        dot.classList.toggle('on', selected);
        if (selected) dot.setAttribute('aria-current', 'location'); else dot.removeAttribute('aria-current');
      });
    };
    const schedule = () => { if (!pending) { pending = true; frame(update); } };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ref, reduced]);
}
