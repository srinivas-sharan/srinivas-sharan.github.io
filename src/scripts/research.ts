import { matchesResearchFilters } from './research-filters';
const requestedArea = new URLSearchParams(location.search).get('area');
const areaParam=requestedArea==='intelligent-production-service-systems'?'service-healthcare':requestedArea;
function initializeArea(select: HTMLSelectElement | null) {
  if (select && areaParam && [...select.options].some(o=>o.value===areaParam)) select.value=areaParam;
}
function setAreaQuery(area:string) {
  const url=new URL(location.href);
  if(area==='all') url.searchParams.delete('area'); else url.searchParams.set('area',area);
  history.replaceState(null,'',url);
}
function updateCount(root:Element,count:number,noun:string) {
  const result=root.querySelector('[data-filter-result]');
  if(result) result.textContent=`${count} ${noun}${count===1?'':'s'}`;
  const empty=root.querySelector<HTMLElement>('[data-filter-empty]');
  if(empty) empty.hidden=count!==0;
}
const projectRoot=document.querySelector('[data-project-filter]');
if(projectRoot) {
  const capability=projectRoot.querySelector<HTMLSelectElement>('[data-capability-filter]');
  const capabilityParam=new URLSearchParams(location.search).get('capability');
  if(capability&&capabilityParam&&[...capability.options].some(o=>o.value===capabilityParam))capability.value=capabilityParam;
  const area=projectRoot.querySelector<HTMLSelectElement>('[data-area-filter]');
  const buttons=[...projectRoot.querySelectorAll<HTMLButtonElement>('[data-status-filter]')];
  const cards=[...projectRoot.querySelectorAll<HTMLElement>('[data-project]')];
  let status='all'; initializeArea(area);
  const filter=()=>{
    let count=0;
    cards.forEach(card=>{card.hidden=!matchesResearchFilters({areas:card.dataset.areas?.split(' ')??[],capabilities:card.dataset.capabilities?.split(' ')??[],status:card.dataset.status},{status,area:area?.value,capability:capability?.value});if(!card.hidden)count++;});
    updateCount(projectRoot,count,'project');
  };
  buttons.forEach(button=>button.addEventListener('click',()=>{status=button.dataset.statusFilter!;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));filter();}));
  area?.addEventListener('change',()=>{setAreaQuery(area.value);filter();});
  capability?.addEventListener('change',()=>{const url=new URL(location.href);if(capability.value==='all')url.searchParams.delete('capability');else url.searchParams.set('capability',capability.value);history.replaceState(null,'',url);filter();});
  projectRoot.querySelector<HTMLElement>('[data-filter-controls]')!.hidden=false;filter();
}
const publicationRoot=document.querySelector('[data-publication-filter]');
if(publicationRoot) {
  const area=publicationRoot.querySelector<HTMLSelectElement>('[data-area-filter]');
  const year=publicationRoot.querySelector<HTMLSelectElement>('[data-year-filter]');
  const search=publicationRoot.querySelector<HTMLInputElement>('[data-publication-search]');
  const papers=[...publicationRoot.querySelectorAll<HTMLElement>('[data-publication]')];
  initializeArea(area);
  const filter=()=>{
    let count=0;
    papers.forEach(paper=>{
      paper.hidden=!matchesResearchFilters({areas:paper.dataset.areas?.split(' ')??[],year:paper.dataset.year,text:paper.dataset.search},{area:area?.value,year:year?.value,search:search?.value});
      if(!paper.hidden) count++;
    });
    publicationRoot.querySelectorAll<HTMLElement>('[data-publication-year]').forEach(group=>{group.hidden=![...group.querySelectorAll<HTMLElement>('[data-publication]')].some(p=>!p.hidden);});
    updateCount(publicationRoot,count,'journal publication');
  };
  search?.addEventListener('input',filter);year?.addEventListener('change',filter);
  area?.addEventListener('change',()=>{setAreaQuery(area.value);filter();});
  publicationRoot.querySelector<HTMLElement>('[data-filter-controls]')!.hidden=false;filter();
}
const researcherRoot=document.querySelector('[data-researcher-filter]');
if(researcherRoot) {
  const buttons=[...researcherRoot.querySelectorAll<HTMLButtonElement>('[data-degree-filter]')];
  const cards=[...document.querySelectorAll<HTMLElement>('[data-researcher]')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const degree=button.dataset.degreeFilter;
    let count=0;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    cards.forEach(card=>{card.hidden=degree!=='All'&&!card.dataset.degrees?.split(' ').includes(degree!);if(!card.hidden)count++;});
    updateCount(researcherRoot,count,'current researcher');
  }));
  researcherRoot.querySelector<HTMLElement>('[data-filter-controls]')!.hidden=false;
}
document.querySelectorAll<HTMLButtonElement>('[data-researcher-toggle]').forEach(button=>{
 const panel=document.getElementById(button.getAttribute('aria-controls')!)!;
 button.hidden=false;panel.hidden=true;
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));panel.hidden=!open;button.textContent=open?'Close research ↑':'View research ↓';});
});
document.querySelectorAll<HTMLDetailsElement>('.ms-alumni').forEach(details=>{
 const sync=()=>details.querySelector('summary')?.setAttribute('aria-expanded',String(details.open));
 details.addEventListener('toggle',sync);sync();
});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const reveal=document.querySelector('[data-research-reveal]');
if(reveal && !reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.2});
  reveal.classList.add('is-armed');observer.observe(reveal);
}

// Scroll the native horizontal viewport so touch, trackpads, keyboard, and mouse
// dragging share the same track. A duplicate is decorative and never focusable.
const viewport=document.querySelector<HTMLElement>('[data-sponsor-viewport]');
if(viewport) {
 const set=viewport.querySelector<HTMLElement>('[data-sponsor-set]')!;
 const track=viewport.querySelector<HTMLElement>('.sponsor-track')!;
 const clone=set.cloneNode(true) as HTMLElement;
 clone.removeAttribute('data-sponsor-set');clone.classList.add('sponsor-copy');clone.setAttribute('aria-hidden','true');clone.inert=true;
 clone.querySelectorAll('[tabindex]').forEach(e=>e.removeAttribute('tabindex'));
 clone.querySelectorAll('img').forEach(img=>img.alt='');track.append(clone);
 const toggle=viewport.closest('section')!.querySelector<HTMLButtonElement>('.sponsor-pause')!;
 let userPaused=false,hovered=false,focused=false,dragging=false,inView=true;
 let cycle=set.offsetWidth,last=0,frame=0,resumeAt=0,dragX=0,dragScroll=0;
 const resize=new ResizeObserver(()=>{cycle=set.offsetWidth;});resize.observe(set);
 function tick(now:number) {
   const delta=Math.min(now-last,64);last=now;
   if(!reducedMotion.matches&&!userPaused&&!hovered&&!focused&&!dragging&&inView&&!document.hidden&&now>=resumeAt&&cycle>0) {
     viewport!.scrollLeft+=cycle*delta/45000;
     if(viewport!.scrollLeft>=cycle) viewport!.scrollLeft-=cycle;
   }
   frame=requestAnimationFrame(tick);
 }
 function motionPreference() {
   toggle.hidden=reducedMotion.matches;
   clone.hidden=reducedMotion.matches;
   if(reducedMotion.matches){cancelAnimationFrame(frame);frame=0;viewport!.scrollLeft=0;}
   else if(!frame){last=performance.now();frame=requestAnimationFrame(tick);}
 }
 toggle.addEventListener('click',()=>{userPaused=!userPaused;toggle.setAttribute('aria-pressed',String(userPaused));toggle.textContent=userPaused?'Resume logos':'Pause logos';});
 viewport.addEventListener('mouseenter',()=>{hovered=true;});viewport.addEventListener('mouseleave',()=>{hovered=false;});
 viewport.addEventListener('focusin',()=>{focused=true;});viewport.addEventListener('focusout',event=>{focused=viewport.contains(event.relatedTarget as Node);});
 viewport.addEventListener('wheel',()=>{resumeAt=performance.now()+1600;},{passive:true});
 viewport.addEventListener('pointerdown',event=>{dragging=true;dragX=event.clientX;dragScroll=viewport.scrollLeft;if(event.pointerType==='mouse')viewport.setPointerCapture(event.pointerId);});
 viewport.addEventListener('pointermove',event=>{if(dragging&&event.pointerType==='mouse')viewport.scrollLeft=dragScroll+dragX-event.clientX;});
 const finishDrag=()=>{dragging=false;resumeAt=performance.now()+1600;};
 viewport.addEventListener('pointerup',finishDrag);viewport.addEventListener('pointercancel',finishDrag);viewport.addEventListener('lostpointercapture',finishDrag);
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;}).observe(viewport);
 reducedMotion.addEventListener('change',motionPreference);motionPreference();
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);resize.disconnect();},{once:true});
}
