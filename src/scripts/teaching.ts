type Course = { id:string; groups:string[]; methods:string[] };
declare global { interface Window { teachingPortfolio: { portfolio:Course[]; breadth:{id:string;title:string;methods:string[]}[] } } }
const root = document.querySelector('.teaching-page');
if (root) {
 const {portfolio,breadth} = window.teachingPortfolio;
 const normalize = (value:string) => value.toLowerCase();
 const filter = (kind:'group'|'method', value:string) => {
  const matches = portfolio.filter(course => value==='all' || (kind==='group' ? course.groups.includes(value) : course.methods.some(method=>normalize(method)===normalize(value))));
  root.querySelectorAll<HTMLElement>('[data-course-id]').forEach(card=>{
   const match=matches.some(course=>course.id===card.dataset.courseId);
   card.classList.toggle('is-muted',!match);
   card.classList.toggle('is-match',match&&value!=='all');
  });
  const activeMethods=kind==='method'?[value]:breadth.find(group=>group.id===value)?.methods??[];
  const aliases:Record<string,string>={'Multi-Criteria Decisions':'Multi-Criteria Decision Making','Service Operations':'Service Systems','Statistical Quality Control':'Quality Engineering'};
  root.querySelectorAll<HTMLElement>('[data-method-tag]').forEach(tag=>{
   const label=tag.dataset.methodTag!;
   tag.classList.toggle('is-match',activeMethods.some(method=>normalize(method)===normalize(aliases[label]??label)));
  });
  root.querySelectorAll<HTMLElement>('[data-breadth]').forEach(button=>button.setAttribute('aria-pressed',String(kind==='group'&&button.dataset.breadth===value)));
  root.querySelectorAll<HTMLElement>('[data-method]').forEach(button=>button.setAttribute('aria-pressed',String(kind==='method'&&button.dataset.method===value)));
 };
 root.querySelectorAll<HTMLElement>('[data-breadth]').forEach(button=>button.addEventListener('click',()=>filter('group',button.dataset.breadth!)));
 root.querySelectorAll<HTMLElement>('[data-method]').forEach(button=>button.addEventListener('click',()=>filter('method',button.dataset.method!)));
 root.querySelectorAll<HTMLElement>('.course-details').forEach(details=>{
  const button=details.querySelector<HTMLButtonElement>('.course-toggle')!;
  const panel=details.querySelector<HTMLElement>('.course-detail-grid')!;
  button.hidden=false;
  panel.hidden=true;
  button.addEventListener('click',()=>{
   const open=button.getAttribute('aria-expanded')!=='true';
   panel.hidden=!open;
   button.setAttribute('aria-expanded',String(open));
   button.querySelector('span')!.textContent=open?'−':'+';
  });
 });
 const selectRegion=(id:string)=>{
  root.querySelectorAll<HTMLElement>('[data-region-panel]').forEach(panel=>panel.hidden=panel.dataset.regionPanel!==id);
  root.querySelectorAll<HTMLElement>('[data-region]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.region===id)));
 };
 root.querySelectorAll<HTMLElement>('[data-region]').forEach(button=>button.addEventListener('click',()=>selectRegion(button.dataset.region!)));
 selectRegion('missouri');
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let observer:IntersectionObserver|undefined;
 if (!motion.matches && 'IntersectionObserver' in window) {
  observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');observer!.unobserve(entry.target);}
  }),{threshold:.1});
  root.querySelectorAll('.reveal').forEach(element=>{element.classList.add('is-armed');observer!.observe(element);});
 }
 motion.addEventListener('change',event=>{if(event.matches){observer?.disconnect();root.querySelectorAll('.reveal').forEach(element=>element.classList.add('is-visible'));}});
}
