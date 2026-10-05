/**
 * Projects Data & Filter Management
 * Vanilla JavaScript implementation
 */

export const projectsData = [
  {
    id: 'mox-ecommerce',
    title: 'MOX — Full-Stack E-Commerce',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    tagline: 'Modern luxury streetwear & footwear e-commerce application',
    description: 'A comprehensive full-stack e-commerce web platform engineered with pure JavaScript, Tailwind CSS, Node.js, Express, and MongoDB. Includes instant search, multi-faceted category filtering, responsive cart drawer, and order simulation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/assets/images/project_mox_preview_1791019143173.jpg',
    githubUrl: 'https://github.com/minhajrahman/mox-ecommerce',
    liveUrl: 'https://mox-commerce.demo',
    featured: true,
    highlights: [
      'Engineered RESTful product API with query filters & pagination',
      'Client-side cart state management persisted in localStorage',
      'Fluid off-canvas cart drawer with zero layout shifts',
      'Optimized image loading with custom responsive picture markup'
    ]
  },
  {
    id: 'code-with-minhaj',
    title: 'Code With Minhaj — Developer Blog',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tagline: 'Personal developer portfolio, technical blog & interactive playground',
    description: 'A personal developer ecosystem featuring interactive syntax-highlighted code playgrounds, technical articles, dark/light theme switching, and seamless micro-interactions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    image: '/assets/images/project_codewithminhaj_1791019155565.jpg',
    githubUrl: 'https://github.com/minhajrahman/codewithminhaj',
    liveUrl: 'https://codewithminhaj.demo',
    featured: true,
    highlights: [
      'Interactive syntax highlighter with live code snippet runner',
      'Sub-second first contentful paint with zero external runtime frameworks',
      'Custom markdown-to-HTML parser for editorial technical posts',
      'Synchronized theme persistence across multiple browser tabs'
    ]
  },
  {
    id: 'devpulse-analytics',
    title: 'DevPulse — Developer Analytics',
    category: 'javascript',
    categoryLabel: 'JavaScript',
    tagline: 'Real-time developer workflow analytics and pipeline monitoring',
    description: 'A high-performance developer analytics dashboard built with Vanilla JavaScript, SVG charts, and REST API integration. Visualizes commit frequency, latency benchmarks, and active task pipelines.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'SVG Graphics'],
    image: '/assets/images/project_devpulse_preview_1791019186293.jpg',
    githubUrl: 'https://github.com/minhajrahman/devpulse-analytics',
    liveUrl: 'https://devpulse.demo',
    featured: true,
    highlights: [
      'Lightweight SVG vector charting engine without external charting libraries',
      'Live mock WebSocket simulation for streaming system metrics',
      'Interactive Kanban workflow board with drag-and-drop state updates',
      'Accessible keyboard navigation across all interactive data panels'
    ]
  },
  {
    id: 'aura-luxe',
    title: 'Aura Luxe — Architectural Living',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tagline: 'Minimalist brand store for architectural ceramics and design objects',
    description: 'An editorial e-commerce experience celebrating tactile materials, warm stone neutrals, and fluid product exploration. Features custom drawer animations and typography-driven visual hierarchy.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    image: '/assets/images/project_auraluxe_preview_1791019171367.jpg',
    githubUrl: 'https://github.com/minhajrahman/aura-luxe',
    liveUrl: 'https://aura-luxe.demo',
    featured: false,
    highlights: [
      'Fluid 60fps micro-interactions crafted with CSS transitions & transforms',
      'Ambient aesthetic with dynamic lighting contrast controls',
      'Accessible focus management and semantic ARIA landmark hierarchy',
      'Zero-layout-shift responsive media loading'
    ]
  },
  {
    id: 'zenith-agency',
    title: 'Zenith Studio — Creative Agency',
    category: 'frontend',
    categoryLabel: 'Frontend',
    tagline: 'Interactive digital experience showcase for high-fashion studio',
    description: 'An avant-garde portfolio showcase featuring custom magnetic button physics, editorial grid layouts, split-screen hero transitions, and responsive typography pairing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/assets/images/project_codewithminhaj_1791019155565.jpg',
    githubUrl: 'https://github.com/minhajrahman/zenith-studio',
    liveUrl: 'https://zenith-studio.demo',
    featured: false,
    highlights: [
      'IntersectionObserver-driven scroll reveal sequences',
      'Custom cursor physics with pointer event tracking',
      'Editorial responsive typography scaling seamlessly from 320px to 4K',
      'Full compliance with prefers-reduced-motion media query'
    ]
  },
  {
    id: 'saasify-cloud',
    title: 'SaaSify — Cloud Billing Portal',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    tagline: 'Subscription management, tiered billing & API developer console',
    description: 'Full-stack SaaS subscription dashboard supporting team seat allocations, webhook logs, dynamic invoice generation, and secured session management with Express & MongoDB.',
    technologies: ['HTML5', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/assets/images/project_devpulse_preview_1791019186293.jpg',
    githubUrl: 'https://github.com/minhajrahman/saasify-portal',
    liveUrl: 'https://saasify-cloud.demo',
    featured: false,
    highlights: [
      'Modular RESTful architecture with role-based access controllers',
      'Clean data export pipeline generating dynamic PDF invoices',
      'Secure token storage and sanitization against XSS/CSRF vectors',
      'Instant search and sorting on high-volume activity audit tables'
    ]
  }
];

/**
 * Render Project Cards into container
 */
export function renderProjects(container, projects = projectsData) {
  if (!container) return;

  container.innerHTML = projects.map((p, index) => {
    const techSpans = p.technologies
      .slice(0, 4)
      .map(t => `<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">${t}</span>`)
      .join('<span class="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>');

    return `
      <article class="project-card card-surface project-item reveal stagger-${(index % 4) + 1}" data-category="${p.category}" data-id="${p.id}">
        <div class="project-card-image-wrap bg-slate-100 dark:bg-slate-800">
          <img 
            src="${p.image}" 
            alt="${p.title} preview" 
            class="project-card-image"
            loading="lazy"
            referrerPolicy="no-referrer"
            onerror="this.onerror=null; this.src='/assets/images/project_mox_preview_1791019143173.jpg';"
          />
          <div class="project-card-overlay">
            <button type="button" class="btn-primary text-xs py-1.5 px-3 quick-view-btn" data-id="${p.id}" aria-label="View details for ${p.title}">
              View Project Details
            </button>
          </div>
        </div>

        <div class="p-6 flex flex-col justify-between flex-1">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <span>${p.categoryLabel}</span>
              ${p.featured ? '<span class="text-emerald-600 dark:text-emerald-400 font-medium normal-case tracking-normal">Featured Work</span>' : ''}
            </div>

            <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
              ${p.title}
            </h3>

            <p class="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
              ${p.description}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap items-center gap-2 mb-5 py-2 border-t border-b border-slate-100 dark:border-slate-800/80">
              ${techSpans}
            </div>

            <div class="flex items-center justify-between gap-3">
              <button 
                type="button" 
                class="btn-primary flex-1 text-xs py-2 px-3 quick-view-btn" 
                data-id="${p.id}"
              >
                <span>Live Demo</span>
                <svg class="w-3.5 h-3.5 project-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>

              <button 
                type="button" 
                class="btn-secondary text-xs py-2 px-3 quick-view-btn" 
                data-id="${p.id}"
                aria-label="View ${p.title} repository details"
              >
                <span>Details</span>
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Filter Projects with smooth transition
 */
export function setupProjectFilters(filterButtons, projectsContainer) {
  if (!filterButtons || !projectsContainer) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeFilter = btn.getAttribute('data-filter');

      // Update button state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cards = projectsContainer.querySelectorAll('.project-item');

      // Step 1: Smooth fade/scale out existing cards
      cards.forEach(card => {
        card.classList.add('filtering-out');
      });

      // Step 2: Swap visibility after brief transition
      setTimeout(() => {
        let visibleCount = 0;
        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          const isMatch = activeFilter === 'all' || category === activeFilter;

          if (isMatch) {
            card.style.display = 'flex';
            card.classList.remove('filtering-out');
            card.classList.add('filtering-in');
            card.classList.add('revealed');
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // If no projects found
        let emptyState = document.getElementById('no-projects-message');
        if (visibleCount === 0) {
          if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.id = 'no-projects-message';
            emptyState.className = 'col-span-full text-center py-12 text-slate-500';
            emptyState.innerHTML = '<p class="text-base">No projects found for this category.</p>';
            projectsContainer.appendChild(emptyState);
          }
          emptyState.style.display = 'block';
        } else if (emptyState) {
          emptyState.style.display = 'none';
        }
      }, 220);
    });
  });
}

/**
 * Modal Details Preview Controller
 */
export function setupProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-content-body');

  if (!modalBackdrop || !modalBody) return;

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div class="relative">
        <div class="aspect-video w-full bg-slate-900 rounded-t-xl overflow-hidden relative">
          <img 
            src="${project.image}" 
            alt="${project.title} screenshot" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to from-slate-950/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span class="inline-block text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">${project.categoryLabel}</span>
              <h3 class="text-2xl font-bold text-white">${project.title}</h3>
            </div>
          </div>
        </div>

        <div class="p-6 md:p-8 space-y-6">
          <div>
            <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Overview</h4>
            <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">${project.description}</p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Engineering Highlights</h4>
            <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
              ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              ${project.technologies.map(t => `
                <span class="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md border border-slate-200 dark:border-slate-700">
                  ${t}
                </span>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div class="text-xs text-slate-500">
              Production-ready frontend architecture & testing verified.
            </div>
            <div class="flex items-center gap-3">
              <a 
                href="${project.githubUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View Source</span>
              </a>
              <a 
                href="${project.liveUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                <span>Launch Live Demo</span>
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Delegated click event for view details
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-view-btn');
    if (btn) {
      const id = btn.getAttribute('data-id');
      if (id) {
        openModal(id);
      }
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}
