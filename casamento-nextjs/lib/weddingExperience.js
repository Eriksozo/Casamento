'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function initWeddingExperience() {
  /* ═══════════════════════════════════════════════════════
       GSAP setup
    ═══════════════════════════════════════════════════════ */
    const hasGSAP = typeof gsap !== 'undefined';
    if (hasGSAP) {
      gsap.registerPlugin(ScrollTrigger);
      if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
    } else {
      /* fallback sem GSAP: exibe tudo */
      document.querySelectorAll('[data-anim]').forEach(el => (el.style.opacity = '1'));
    }

    /* ═══════════════════════════════════════════════════════
       LENIS — scroll suave com inércia
    ═══════════════════════════════════════════════════════ */
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
      lenis = new Lenis({ lerp: 0.065, smoothWheel: true });
      if (hasGSAP) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        function lenisLoop(t) { lenis.raf(t); requestAnimationFrame(lenisLoop); }
        requestAnimationFrame(lenisLoop);
      }
      lenis.stop(); /* pausa até o envelope abrir */
    }

    /* ── Scroll progress bar ── */
    const bar = document.getElementById('scrollBar');
    if (lenis) {
      lenis.on('scroll', ({ progress }) => { bar.style.width = (progress * 100) + '%'; });
    } else {
      window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
      }, { passive: true });
    }


    /* ═══════════════════════════════════════════════════════
       MÚSICA
    ═══════════════════════════════════════════════════════ */
    const audio    = document.getElementById('bgAudio');
    const musicBtn = document.getElementById('musicBtn');
    let fadeTimer;

    function fadeTo(target, duration, cb) {
      clearInterval(fadeTimer);
      const steps = 30, interval = duration / steps;
      const delta = (target - audio.volume) / steps;
      fadeTimer = setInterval(() => {
        audio.volume = Math.max(0, Math.min(1, audio.volume + delta));
        if ((delta > 0 && audio.volume >= target) || (delta < 0 && audio.volume <= target)) {
          clearInterval(fadeTimer);
          if (cb) cb();
        }
      }, interval);
    }

    function startMusic() {
      if (!audio.paused) return;
      audio.volume = 0;
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.setAttribute('aria-label', 'Pausar música');
        fadeTo(0.65, 2200);
      }).catch(() => {});
    }

    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (audio.paused) {
        startMusic();
      } else {
        fadeTo(0, 1200, () => {
          audio.pause();
          musicBtn.classList.remove('playing');
          musicBtn.setAttribute('aria-label', 'Tocar música');
        });
      }
    });

    /* ═══════════════════════════════════════════════════════
       COUNTDOWN TIMER
    ═══════════════════════════════════════════════════════ */
    function updateCountdown() {
      const weddingDate = new Date('2026-09-19T15:30:00').getTime();
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
      } else {
        // Casamento já aconteceu
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }

    updateCountdown();
    const __countdownTimer = setInterval(updateCountdown, 1000);

    /* ═══════════════════════════════════════════════════════
       PETAL BURST — canvas customizado (sem dependência)
    ═══════════════════════════════════════════════════════ */
    function petalBurst() {
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:fixed;inset:0;z-index:1002;pointer-events:none;';
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');

      const colors  = ['#889645','#7B8A36','#8B6848','#C4A882','#F4EEE4','#A0885A','#D4C4A0'];
      const petals  = [];
      const cx = canvas.width / 2, cy = canvas.height * 0.45;

      for (let i = 0; i < 90; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 9;
        petals.push({
          x: cx + (Math.random() - 0.5) * 120,
          y: cy + (Math.random() - 0.5) * 80,
          vx: Math.cos(angle) * speed * (0.4 + Math.random() * 0.6),
          vy: Math.sin(angle) * speed * (0.4 + Math.random() * 0.6) - 3,
          rot: Math.random() * Math.PI * 2,
          rotV: (Math.random() - 0.5) * 0.22,
          size: 5 + Math.random() * 11,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.75 + Math.random() * 0.25,
          life: 1.0,
          decay: 0.008 + Math.random() * 0.008
        });
      }

      function drawPetal(ctx, size) {
        /* forma de pétala: elipse rotacionada */
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.38, size, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      let lastT = 0;
      function loop(t) {
        const dt = Math.min((t - lastT) / 1000, 0.05);
        lastT = t;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        petals.forEach(p => {
          p.x  += p.vx;
          p.y  += p.vy;
          p.vy += 0.18; /* gravidade */
          p.vx *= 0.992;
          p.rot += p.rotV;
          p.life -= p.decay;
          if (p.life > 0) {
            alive = true;
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.life) * p.alpha;
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            drawPetal(ctx, p.size);
            ctx.restore();
          }
        });
        if (alive) requestAnimationFrame(loop);
        else canvas.remove();
      }
      requestAnimationFrame(loop);
    }

    /* ═══════════════════════════════════════════════════════
       ANIMAÇÕES GSAP — hero (chamado após envelope abrir)
    ═══════════════════════════════════════════════════════ */
    function playHeroAnimations() {
      if (!hasGSAP) return;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      /* logo escala + fade */
      tl.fromTo('.hero__logo',
        { opacity: 0, scale: 0.84 },
        { opacity: 1, scale: 1,    duration: 1.5 }
      );

      /* eyebrow letra a letra com SplitText */
      const eyebrow = document.querySelector('.hero__tagline .eyebrow');
      if (eyebrow && typeof SplitText !== 'undefined') {
        const sp = new SplitText(eyebrow, { type: 'chars', charsClass: 'split-char' });
        gsap.set(sp.chars, { opacity: 0, y: 18 });
        tl.to(sp.chars, {
          opacity: 1, y: 0, duration: 0.5,
          stagger: 0.038, ease: 'power3.out'
        }, '-=0.6');
      } else if (eyebrow) {
        tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.6');
      }

      /* copy */
      tl.fromTo('.hero__tagline .copy',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3'
      );

      /* vine */
      tl.fromTo('.hero__vine',
        { opacity: 0, scaleX: 0.4 },
        { opacity: 1, scaleX: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4'
      );

      /* breathing loop na logo, após entrada */
      tl.to('.hero__logo', {
        scale: 1.016, duration: 3.2, ease: 'sine.inOut',
        repeat: -1, yoyo: true
      }, '+=0.2');
    }

    /* ═══════════════════════════════════════════════════════
       SCROLL TRIGGER — seções abaixo do hero
    ═══════════════════════════════════════════════════════ */
    function initScrollAnimations() {
      if (!hasGSAP) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /* ── Seção label (letra a letra) ── */
      document.querySelectorAll('.sec-label').forEach(el => {
        if (typeof SplitText !== 'undefined' && !reduced) {
          const sp = new SplitText(el, { type: 'chars', charsClass: 'split-char' });
          gsap.set(sp.chars, { opacity: 0, y: 14 });
          gsap.to(sp.chars, {
            scrollTrigger: { trigger: el, start: 'top 90%' },
            opacity: 1, y: 0, duration: 0.48, stagger: 0.05, ease: 'power3.out'
          });
        } else {
          gsap.fromTo(el, { opacity: 0, y: 14 }, {
            scrollTrigger: { trigger: el, start: 'top 90%' },
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
          });
        }
      });

      /* ── Cards — stagger com profundidade ── */
      const cards = document.querySelectorAll('.card');
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 48, scale: 0.96 },
          {
            scrollTrigger: { trigger: '.cards', start: 'top 82%' },
            opacity: 1, y: 0, scale: 1,
            duration: 0.95, stagger: 0.14, ease: 'power3.out'
          }
        );
      }

      /* ── Verse ornamentos ── */
      gsap.fromTo('.verse-rule',
        { scaleX: 0, opacity: 0 },
        {
          scrollTrigger: { trigger: '.verse .wrap', start: 'top 82%' },
          scaleX: 1, opacity: 1,
          duration: 1.4, stagger: 0.3,
          ease: 'expo.out', transformOrigin: 'center center'
        }
      );
      gsap.fromTo('.verse__leaf',
        { opacity: 0, scale: 0.5 },
        {
          scrollTrigger: { trigger: '.verse .wrap', start: 'top 80%' },
          opacity: 0.4, scale: 1, duration: 1, ease: 'back.out(1.6)'
        }
      );

      /* ── Versículo — palavra a palavra ── */
      const verseText = document.querySelector('.verse__text');
      if (verseText) {
        if (typeof SplitText !== 'undefined' && !reduced) {
          const sp = new SplitText(verseText, { type: 'words', wordsClass: 'split-word' });
          gsap.set(sp.words, { opacity: 0, y: 22 });
          gsap.to(sp.words, {
            scrollTrigger: { trigger: verseText, start: 'top 85%' },
            opacity: 1, y: 0, duration: 0.68, stagger: 0.07, ease: 'power3.out'
          });
        } else {
          gsap.fromTo(verseText, { opacity: 0, y: 20 }, {
            scrollTrigger: { trigger: verseText, start: 'top 85%' },
            opacity: 1, y: 0, duration: 1, ease: 'power3.out'
          });
        }
      }

      /* ── Ref do versículo ── */
      gsap.fromTo('.verse__ref', { opacity: 0, y: 14 }, {
        scrollTrigger: { trigger: '.verse__ref', start: 'top 90%' },
        opacity: 1, y: 0, duration: 0.85, ease: 'power2.out'
      });

      /* ── Footer ── */
      gsap.fromTo('.footer__logo', { opacity: 0, scale: 0.86 }, {
        scrollTrigger: { trigger: '.footer__logo', start: 'top 90%' },
        opacity: 1, scale: 1, duration: 1.3, ease: 'expo.out'
      });

      const footerDate = document.querySelector('.footer__date');
      if (footerDate && typeof SplitText !== 'undefined' && !reduced) {
        const sp = new SplitText(footerDate, { type: 'chars', charsClass: 'split-char' });
        gsap.set(sp.chars, { opacity: 0, y: 12 });
        gsap.to(sp.chars, {
          scrollTrigger: { trigger: footerDate, start: 'top 92%' },
          opacity: 1, y: 0, duration: 0.44, stagger: 0.06, ease: 'power3.out'
        });
      } else if (footerDate) {
        gsap.fromTo(footerDate, { opacity: 0, y: 12 }, {
          scrollTrigger: { trigger: footerDate, start: 'top 92%' },
          opacity: 1, y: 0, duration: 0.8
        });
      }

      gsap.fromTo('.footer__blessing', { opacity: 0, y: 10 }, {
        scrollTrigger: { trigger: '.footer__blessing', start: 'top 93%' },
        opacity: 1, y: 0, duration: 1, ease: 'power2.out'
      });

      /* ── Parallax aurora do versículo (scrub) ── */
      if (!reduced) {
        gsap.to('.verse__aurora', {
          scrollTrigger: {
            trigger: '.verse',
            start: 'top bottom', end: 'bottom top',
            scrub: 1.8
          },
          y: -70, ease: 'none'
        });
      }
    }

    /* ═══════════════════════════════════════════════════════
       GALLERY LIGHTBOX
    ═══════════════════════════════════════════════════════ */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryImages = Array.from(galleryItems).map(item => item.querySelector('img').src);
    let currentImgIdx = 0;

    function openLightbox(idx) {
      currentImgIdx = idx;
      lightboxImg.src = galleryImages[idx];
      lightboxCounter.textContent = `${idx + 1} / ${galleryImages.length}`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function navLightbox(dir) {
      currentImgIdx = (currentImgIdx + dir + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentImgIdx];
      lightboxCounter.textContent = `${currentImgIdx + 1} / ${galleryImages.length}`;
    }

    galleryItems.forEach((item, idx) => {
      item.addEventListener('click', () => openLightbox(idx));
    });

    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => navLightbox(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => navLightbox(1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    });

    /* ═══════════════════════════════════════════════════════
       SCROLL CUE
    ═══════════════════════════════════════════════════════ */
    const cue = document.getElementById('scrollCue');
    if (cue) {
      setTimeout(() => cue.classList.add('show'), 2400);
      window.addEventListener('scroll', () => cue.classList.remove('show'), { once: true, passive: true });
    }

    /* ═══════════════════════════════════════════════════════
       ENVELOPE — abre, pétala burst, inicia tudo
    ═══════════════════════════════════════════════════════ */
    const envelopeEl = document.getElementById('envelope');
    let envelopeOpened = false;

    function openEnvelope(e) {
      console.log('openEnvelope chamado', envelopeOpened);
      if (envelopeOpened) return;
      envelopeOpened = true;

      if (envelopeEl) {
        console.log('Adicionando classe opening');
        envelopeEl.classList.add('opening');
      }
      startMusic();
      petalBurst(); /* 🌸 chuva de pétalas */

      setTimeout(() => {
        console.log('Removendo envelope após 1600ms');
        if (envelopeEl && envelopeEl.parentNode) {
          envelopeEl.remove();
        }
        document.body.style.overflow = '';
        if (lenis) lenis.start();
        playHeroAnimations();
        initScrollAnimations();
        if (hasGSAP) ScrollTrigger.refresh();
      }, 1600);
    }

    document.body.style.overflow = 'hidden';

    if (envelopeEl) {
      console.log('Envelope element encontrado');
      envelopeEl.addEventListener('click', (e) => {
        console.log('Click no envelope');
        openEnvelope(e);
      });
      envelopeEl.addEventListener('touchstart', (e) => {
        console.log('Touch no envelope');
        e.preventDefault();
        openEnvelope(e);
      });
      envelopeEl.addEventListener('keydown',  (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log('Tecla pressionada no envelope');
          e.preventDefault();
          openEnvelope(e);
        }
      });
    } else {
      console.log('Envelope element NÃO encontrado!');
    }
  return function cleanup() {
    try { clearInterval(__countdownTimer); } catch (e) {}
    try { if (lenis) lenis.destroy(); } catch (e) {}
    try { if (hasGSAP) ScrollTrigger.getAll().forEach(function (t) { t.kill(); }); } catch (e) {}
  };
}
