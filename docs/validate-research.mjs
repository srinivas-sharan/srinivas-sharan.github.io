import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const astroRequire=createRequire(require.resolve('astro/package.json'));
const viteRequire=createRequire(astroRequire.resolve('vite'));
const {build}=viteRequire('esbuild');
async function loadTS(path){
 const result=await build({entryPoints:[path],bundle:true,write:false,platform:'node',format:'esm',plugins:[{name:'test-image-metadata',setup(b){b.onLoad({filter:/\.(png|svg)$/},()=>({contents:'export default {};',loader:'js'}));}}]});
 return import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
}
const [data,filters]=await Promise.all([loadTS('src/data/research.ts'),loadTS('src/scripts/research-filters.ts')]);
const match=filters.matchesResearchFilters;
assert.equal(data.publications.length,50);
assert.equal(data.researchAreas.length,4);
assert.equal(data.areaName('service-healthcare'),'Intelligent Production & Service Systems');
assert.deepEqual(data.publications.find(p=>p.id==='journal-05').areaIds,['logistics']);
assert.equal(data.projects.find(p=>p.id==='project-18').primaryAreaId,'service-healthcare');
assert.equal(data.researchers.find(p=>p.id==='fatemeh-pourdehghan').areaIds[0],'service-healthcare');
assert.equal(data.researchers.find(p=>p.id==='mahima-naznin').areaIds.length,0);
// Curated publications without a verified destination remain unlinked, never guessed.
for(const p of data.publications)if(p.url)assert(/^https:\/\//.test(p.url));
assert.equal(new Set(data.publications.map(p=>p.id)).size,50);
assert.equal(data.projects.length,23);
assert.equal(data.projects.filter(p=>p.status==='current').length,10);
assert.equal(data.projects.filter(p=>p.status==='completed').length,12);
assert.equal(data.projects.filter(p=>p.status==='undated').length,1);
assert.equal(data.currentResearchers.length,12);
assert.equal(data.currentResearchers.filter(p=>p.degrees.includes('PhD')).length,8);
assert.equal(data.currentResearchers.filter(p=>p.degrees.includes('MS')).length,6);
assert.equal(data.undergraduateResearchers.length,3);
assert.equal(data.phdAlumni.length,5);
assert.equal(data.msAlumni.length,6);
assert.deepEqual(data.undergraduateResearchers.map(p=>p.name),['Victoria Prettejohn','Arush Singh','Eric Pflasterer']);
for(const id of ['project-06','project-09','project-12']){const p=data.projects.find(p=>p.id===id);assert(p.dates.endsWith('Jan 2028'));assert.equal(p.status,'current');}
assert.equal(data.projects.find(p=>p.id==='project-04').parentId,null);
assert.equal(data.projects.find(p=>p.id==='project-04').relatedProgramId,'project-12');
assert.equal(data.projects.find(p=>p.id==='project-07').parentId,null);
assert.equal(data.projects.filter(p=>p.parentId==='project-12').length,2);
const capabilities=await loadTS('src/data/capabilities.ts');
assert.equal(capabilities.technicalCapabilities.length,6);
for(const p of data.projects)for(const id of p.capabilityIds)assert(capabilities.technicalCapabilities.some(c=>c.id===id));
assert(match({areas:['aviation'],status:'current',capabilities:['optimization']},{area:'aviation',status:'current',capability:'optimization'}));
assert(!match({areas:['aviation'],capabilities:['optimization']},{capability:'emerging'}));
const projectHTML=readFileSync('dist/research/projects/index.html','utf8');
assert.equal((projectHTML.match(/data-project /g)||[]).length,21);
assert(projectHTML.includes('Related supplements'));
const groupHTML=readFileSync('dist/research/group/index.html','utf8');
assert(!groupHTML.includes('How We Work'));
assert(!groupHTML.includes('Luke Richey'));
assert(groupHTML.includes('Research at OptiDec'));
for(const route of ['','research/group/','research/areas/','research/projects/','research/publications/'])assert(!readFileSync(`dist/${route}index.html`,'utf8').includes('data-sponsor-viewport'));
for(const id of ['pyam-oveys','mahima-naznin','fatemeh-pourdehghan']) {
 assert(data.currentResearchers.some(p=>p.id===id));
 assert(!data.msAlumni.some(p=>p.id===id));
}
const projectResults=(f)=>data.projects.filter(p=>match({areas:p.areaIds,status:p.status},f)).map(p=>p.id);
assert.deepEqual(projectResults({status:'current',area:'autonomy'}),['project-03']);
assert.deepEqual(projectResults({status:'completed',area:'service-healthcare'}),['project-17','project-18','project-19','project-23']);
assert.equal(projectResults({status:'current',area:'not-an-area'}).length,0);
const paperResults=(f)=>data.publications.filter(p=>match({areas:p.areaIds,year:p.year,text:`${p.title} ${p.authors} ${p.journal}`},f));
assert.deepEqual(paperResults({year:'2026',area:'aviation',search:'Javid recharging'}).map(p=>p.id),['journal-01']);
assert.deepEqual(paperResults({year:'2022',area:'autonomy',search:'production economics'}).map(p=>p.id),['journal-22']);
assert.equal(paperResults({year:'2025',area:'aviation',search:'nonexistent phrase'}).length,0);
assert.equal(paperResults({search:'   '}).length,50);
for(const a of data.researchAreas){assert(a.selectedPublicationIds.length>=3);for(const id of a.selectedPublicationIds)assert(data.publications.find(p=>p.id===id)?.areaIds.includes(a.id));}
for(const route of ['research','research/areas','research/projects','research/publications','research/group']){
 const html=readFileSync(`dist/${route}/index.html`,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert(html.includes('aria-label="Research section"'));
 assert(!/My Share|currentLegalStatus|sourceText|migration seed|next content pass|Roster from/.test(html));
 assert(!html.split('</header>')[0].includes('>Research Group</a>'));
 for(const [,path]of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
  const decoded=decodeURIComponent(path.replace(/&amp;/g,'&'));
  assert(existsSync('dist'+decoded+(decoded.endsWith('/')?'index.html':'')),`Missing ${decoded}`);
 }
}
for(const route of ['research-group','people'])assert(readFileSync(`dist/${route}/index.html`,'utf8').includes('/research/group/'));
assert.equal(data.sponsors.length,12);
for(const sponsor of data.sponsors)assert(existsSync(`public/images/sponsors/${sponsor.id}.png`));
console.log('Research checks passed: full bibliography, project status, deduplicated roster/alumni, combined filters, area relationships, all routes/assets, privacy, and redirects.');
for(const entry of readdirSync('dist',{recursive:true}).filter(p=>p.endsWith('.html'))){
 const html=readFileSync(`dist/${entry}`,'utf8');
 for(const [,path]of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){
  if(path.startsWith('//'))continue;
  const decoded=decodeURIComponent(path.replace(/&amp;/g,'&'));
  assert(existsSync('dist'+decoded+(decoded.endsWith('/')?'index.html':'')),`${entry}: missing ${decoded}`);
 }
 if(entry==='index.html'||entry.startsWith('research/')){
  assert(!html.includes('Service Systems Engineering &amp; Management'));
  assert(!/under.review|unpublished|manuscript-specific/i.test(html),'No private manuscript status in public Research');
 }
}
for(const slug of ['intelligent-production-service-systems','service-systems-engineering-management','service-healthcare'])assert(existsSync(`dist/research/areas/${slug}/index.html`));
console.log('Site-wide internal destinations, taxonomy migration, public-content safeguards and area redirects passed.');

// Exercise sponsor timing and pause behavior without a browser. DOM rendering
// and actual touch-device behavior still require separate visual verification.
const {runInNewContext}=await import('node:vm');
const compiled=await build({entryPoints:['src/scripts/research.ts'],bundle:true,write:false,platform:'browser',format:'iife'});
class Fixture extends EventTarget {
 constructor(){super();this.hidden=false;this.attributes={};this.classList={add(){}};}
 setAttribute(k,v){this.attributes[k]=v;}
 removeAttribute(k){delete this.attributes[k];}
 querySelectorAll(){return [];}
}
const track=new Fixture(),set=new Fixture(),copy=new Fixture(),viewport=new Fixture(),toggle=new Fixture(),motion=new Fixture();
set.offsetWidth=2400;set.cloneNode=()=>copy;track.append=()=>{};
viewport.scrollLeft=0;viewport.querySelector=s=>s==='[data-sponsor-set]'?set:track;
viewport.closest=()=>({querySelector:()=>toggle});viewport.contains=node=>node===set;viewport.setPointerCapture=()=>{};
motion.matches=false;
let callback=null,now=1000;
const win=new Fixture();win.matchMedia=()=>motion;
const doc={hidden:false,querySelector:s=>s==='[data-sponsor-viewport]'?viewport:null,querySelectorAll:()=>[]};
const Observer=class {observe(){}disconnect(){}};
runInNewContext(compiled.outputFiles[0].text,{window:win,document:doc,location:{search:''},URLSearchParams,performance:{now:()=>now},requestAnimationFrame:cb=>{callback=cb;return 1;},cancelAnimationFrame:()=>{callback=null;},ResizeObserver:Observer,IntersectionObserver:Observer});
const frame=()=>{now+=32;const cb=callback;callback=null;cb?.(now);};
const fire=(target,type,props={})=>{const event=new Event(type);Object.assign(event,props);target.dispatchEvent(event);};
frame();assert(viewport.scrollLeft>0,'Sponsor track moves');
fire(viewport,'mouseenter');let x=viewport.scrollLeft;frame();assert.equal(viewport.scrollLeft,x,'Hover pauses');
fire(viewport,'mouseleave');fire(viewport,'focusin');frame();assert.equal(viewport.scrollLeft,x,'Focus pauses');
fire(viewport,'focusout',{relatedTarget:null});frame();assert(viewport.scrollLeft>x);
fire(toggle,'click');x=viewport.scrollLeft;frame();assert.equal(viewport.scrollLeft,x,'Explicit pause');
assert.equal(toggle.attributes['aria-pressed'],'true');fire(toggle,'click');
fire(viewport,'pointerdown',{pointerType:'mouse',pointerId:1,clientX:100});fire(viewport,'pointermove',{pointerType:'mouse',clientX:60});assert(Math.abs(viewport.scrollLeft-(x+40))<1e-8,'Mouse drag scrolls');x=viewport.scrollLeft;frame();assert.equal(viewport.scrollLeft,x,'Drag pauses animation');fire(viewport,'pointerup');now+=1700;
viewport.scrollLeft=2399;frame();assert(viewport.scrollLeft<10,'Cycle wraps without an empty interval');
motion.matches=true;fire(motion,'change');assert(copy.hidden,'Reduced motion hides duplicate');assert(toggle.hidden);assert.equal(callback,null,'Reduced motion cancels animation');assert.equal(viewport.scrollLeft,0);
console.log('Sponsor tests passed: motion, hover/focus/user pause, dragging, wraparound, and reduced-motion fallback.');

// Final publication cleanup: taxonomy assignments, opening timing and factual content.
const expectedCapabilities={
 '01':['optimization','simulation'],'02':['ai','simulation'],
 '03':['optimization','algorithms','autonomy','simulation','emerging'],
 '10':['ai','simulation'],'11':['ai','optimization','simulation'],
 '14':['optimization','ai','algorithms','emerging'],
 '15':['optimization','ai','simulation','emerging'],'20':['ai'],
};
for(const [id,expected] of Object.entries(expectedCapabilities))assert.deepEqual(data.projects.find(p=>p.id===`project-${id}`).capabilityIds,expected);
for(const id of ['08','14','20']){
 const p=data.projects.find(p=>p.id===`project-${id}`);
 assert.deepEqual(p.areaIds,[]);
 assert.equal(p.projectType,'Cross-Cutting Research Education');
}
assert.deepEqual(capabilities.areaCapabilities.aviation,['optimization','algorithms','ai','simulation','autonomy']);
assert.deepEqual(capabilities.areaCapabilities.autonomy,['optimization','algorithms','simulation','autonomy']);
assert.deepEqual(capabilities.technicalCapabilities.find(c=>c.id==='emerging').methods,['AI–OR Integration','Learning-Augmented Optimization','Quantum-Assisted Optimization','Hybrid Quantum-Classical Methods','QUBO Formulations']);
const alizadeh=data.publications.find(p=>p.id==='journal-06');
assert.equal(alizadeh.publicationStatus,'published-online');
assert.equal(alizadeh.details,'');
assert.equal(alizadeh.url,'https://doi.org/10.1080/00207543.2026.2626537');
for(const route of ['','research/group/']){
 const html=readFileSync(`dist/${route}index.html`,'utf8');
 assert(html.includes('positions · Fall 2027'));
 assert(html.includes('students for Fall 2027 for research at the intersection'));
}
const newsHTML=readFileSync('dist/news/index.html','utf8');
assert(newsHTML.includes('CELDi – Optimal Supplier Collaboration; Co-Principal Investigator'));
assert(!newsHTML.includes('passed his comprehensive exam'));
for(const route of ['news','teaching-education']){
 const html=readFileSync(`dist/${route}/index.html`,'utf8');
 assert(html.includes('Junior Excellence in Teaching Award'));
 assert(!html.includes('Outstanding Junior'));
 assert(html.includes('Outstanding Senior Faculty Teaching Award'));
}
const leadershipHTML=readFileSync('dist/leadership-service/index.html','utf8');
assert(leadershipHTML.includes('Ad hoc reviewer'));
assert(leadershipHTML.includes('Caden Davis'));
assert(leadershipHTML.includes('AI Integration Committee'));
assert(!leadershipHTML.includes('TODO before production'));
for(const id of ['soham-basu','arghadeep-mitra']){
 assert(groupHTML.split(`id="${id}"`)[1].split('</article>')[0].includes('PhD Researcher'));
 assert.deepEqual(data.researchers.find(p=>p.id===id).degrees,['MS','PhD']);
}
assert(readFileSync('dist/index.html','utf8').includes('Industrial Engineering Education · ASEE'));
console.log('Final cleanup checks passed: shared taxonomy, cross-cutting programs, Fall 2027, factual corrections, publication status and preserved advising data.');
