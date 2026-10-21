// One shared detail row on desktop; the same DOM becomes an accordion on mobile.
const graduatePath = document.querySelector<HTMLElement>('.graduate-path');
const graduateButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-graduate-stage]'));
const graduatePanels = Array.from(document.querySelectorAll<HTMLElement>('[data-graduate-panel]'));
const compactLayout = window.matchMedia('(max-width: 760px)');
let activeGraduate: string | null = '0';
function selectGraduate(id: string | null) {
  activeGraduate = id;
  graduateButtons.forEach(button => {
    const active = button.dataset.graduateStage === id;
    button.setAttribute('aria-expanded', String(active));
    const indicator = button.querySelector('.stage-indicator');
    if (indicator) indicator.textContent = active ? '−' : '+';
  });
  graduatePanels.forEach(panel => { panel.hidden = panel.dataset.graduatePanel !== id; });
}
if (graduatePath && graduateButtons.length) {
  graduatePath.classList.add('is-interactive');
  selectGraduate('0');
  graduateButtons.forEach(button => {
    button.disabled = false;
    button.addEventListener('click', () => {
      const id = button.dataset.graduateStage!;
      selectGraduate(compactLayout.matches && activeGraduate === id ? null : id);
    });
  });
  compactLayout.addEventListener('change', () => {
    if (!compactLayout.matches && activeGraduate === null) selectGraduate('0');
  });
}
const curriculumButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-curriculum-stage]'));
curriculumButtons.forEach(button => {
  button.disabled = false;
  button.addEventListener('click', () => {
    curriculumButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});

const selector = document.querySelector<HTMLElement>('.service-selector');
const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-service]'));
const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-service-panel]'));
function selectService(id: string) {
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.service === id)));
  panels.forEach(panel => { panel.hidden = panel.dataset.servicePanel !== id; });
}
if (selector && buttons.length && panels.length) {
  selectService('department');
  selector.hidden = false;
  buttons.forEach(button => button.addEventListener('click', () => selectService(button.dataset.service!)));
}
// Without JavaScript all detail panels remain readable. Reveal each connecting
// line once; the curriculum context stays visible throughout.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.leadership-reveal').forEach(section => {
    section.classList.add('is-armed');
    observer.observe(section);
  });
}
