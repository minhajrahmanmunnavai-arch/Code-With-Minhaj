/**
 * Animations & Scroll Triggers
 * Vanilla JavaScript with IntersectionObserver and requestAnimationFrame
 */

/**
 * Initialize Page Load Staggered Entrance
 */
export function initPageLoadSequence() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    // Reveal all elements immediately
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  // Target key hero and navbar elements to ensure classes are active
  const nav = document.getElementById('main-navbar');
  const heroBadge = document.getElementById('hero-badge');
  const heroHeading = document.getElementById('hero-heading');
  const heroDesc = document.getElementById('hero-desc');
  const heroBtn1 = document.getElementById('hero-btn-1');
  const heroBtn2 = document.getElementById('hero-btn-2');
  const heroVisual = document.getElementById('hero-visual');
  const floatingCard1 = document.getElementById('hero-floating-1');
  const floatingCard2 = document.getElementById('hero-floating-2');

  if (nav) nav.classList.add('animate-load-nav');
  if (heroBadge) heroBadge.classList.add('animate-load-badge');
  if (heroHeading) heroHeading.classList.add('animate-load-heading');
  if (heroDesc) heroDesc.classList.add('animate-load-desc');
  if (heroBtn1) heroBtn1.classList.add('animate-load-btn-1');
  if (heroBtn2) heroBtn2.classList.add('animate-load-btn-2');
  if (heroVisual) heroVisual.classList.add('animate-load-hero-visual');
  if (floatingCard1) floatingCard1.classList.add('animate-load-floating-1');
  if (floatingCard2) floatingCard2.classList.add('animate-load-floating-2');
}

/**
 * Scroll Reveal using IntersectionObserver
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Stat Counter Animation with smooth easing
 */
export function initStatsCounters() {
  const statsSection = document.getElementById('about-stats');
  if (!statsSection) return;

  let hasAnimated = false;

  const counterElements = statsSection.querySelectorAll('.stat-counter');

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function startCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = Math.floor(easedProgress * target);

      el.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if (!('IntersectionObserver' in window)) {
    counterElements.forEach(startCount);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(el => startCount(el));
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/**
 * Skill Progress Bars reveal
 */
export function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const skillBars = skillsSection.querySelectorAll('.skill-progress-bar');

  if (!('IntersectionObserver' in window)) {
    skillBars.forEach(bar => {
      bar.style.width = bar.getAttribute('data-level') + '%';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = `${level}%`;
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
}

/**
 * Vertical Timeline Scroll Progress tracker
 */
export function initTimelineScroll() {
  const timelineSection = document.getElementById('experience');
  const progressBar = document.getElementById('timeline-progress');
  if (!timelineSection || !progressBar) return;

  function updateTimeline() {
    const rect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // When section enters the viewport
    const start = rect.top - windowHeight * 0.5;
    const totalHeight = rect.height;

    if (start > 0) {
      progressBar.style.height = '0%';
    } else {
      const progress = Math.min(Math.max(-start / totalHeight, 0), 1);
      progressBar.style.height = `${(progress * 100).toFixed(1)}%`;
    }

    // Check individual nodes
    const nodes = timelineSection.querySelectorAll('.timeline-item');
    nodes.forEach(node => {
      const nodeRect = node.getBoundingClientRect();
      const dot = node.querySelector('.timeline-node');
      if (dot && nodeRect.top < windowHeight * 0.75) {
        dot.style.borderColor = 'var(--accent-secondary)';
        dot.style.boxShadow = '0 0 12px var(--accent-glow)';
      }
    });
  }

  window.addEventListener('scroll', updateTimeline, { passive: true });
  updateTimeline();
}

/**
 * Back-to-Top Floating Button controller
 */
export function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
