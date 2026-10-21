import records from '../../docs/content-2026/cv-records.json';
import {projectCapabilities,researcherCapabilities} from './capabilities';
import area1 from '../assets/photos/Area 1.png';
import area2 from '../assets/photos/Area 2.png';
import area3 from '../assets/photos/Area 3.png';
import area4 from '../assets/photos/production-service-systems.svg';
import {areaFraming} from './area-framing';

// Build-only projection. All 50 journal titles, 23 award titles, and advisee
// statuses were reconciled against the user-supplied CV on 2026-09-26.
// Do not expose the raw CV records, budget shares, or editorial notes to clients.
export const researchAsOf = 'September 2026';
export const labName = 'Optimization & Intelligent Decision Systems Lab';
const areaEvidence = [
  { id:'logistics', methodTags:['Optimization','Simulation','Predictive Analytics'], image:area1, methods:['Optimization','Simulation','Forecasting','Network Design','Resilience Analytics'], selectedPublicationIds:['journal-05','journal-02','journal-42','journal-17'] },
  { id:'aviation', methodTags:['Optimization','Adaptive Algorithms','Multi-Agent Decisions'], image:area2, methods:['Routing','Optimization','Metaheuristics','Integrated Ground-Air Logistics','Electric Mobility'], selectedPublicationIds:['journal-01','journal-19','journal-31','journal-24'] },
  { id:'autonomy', methodTags:['Optimization','Adaptive Algorithms','Multi-Agent Systems'], image:area3, methods:['Optimization','AI','Simulation','Dynamic Assignment','Decision Support'], selectedPublicationIds:['journal-09','journal-22','journal-23'] },
  { id:'service-healthcare', methodTags:['Predictive-to-Prescriptive','Optimization','Simulation'], image:area4, methods:['Forecasting','Scheduling','Resource Allocation','Service Analytics','Customer Experience'], selectedPublicationIds:['journal-04','journal-03','journal-11','journal-26','journal-08'] },
];
export const researchAreas = areaEvidence.map(area=>({...area,...areaFraming[area.id]}));
export const areaName = (id: string) => researchAreas.find(a=>a.id===id)?.title ?? id;
// Curated topic relationships supported by the exact publication/project titles.
// Cross-cutting papers and projects remain unclassified when no clear fit exists.
const journalAreas: Record<string,string[]> = {
 '01':['aviation','logistics'],'02':['logistics','aviation'],'03':['service-healthcare'],'04':['service-healthcare'],'05':['logistics'],'06':['aviation','logistics'],
 '07':['service-healthcare'],'08':['service-healthcare'],'09':['autonomy','logistics'],'10':['aviation'],
 '11':['service-healthcare'],'12':['service-healthcare'],'16':['aviation'],'17':['logistics'],'19':['aviation'],
 '20':['service-healthcare'],'22':['autonomy','logistics'],'23':['aviation','autonomy'],
 '24':['aviation'],'25':['service-healthcare'],'26':['service-healthcare'],'29':['service-healthcare'],'30':['service-healthcare'],
 '31':['aviation'],'32':['service-healthcare'],'33':['service-healthcare'],'34':['aviation'],
 '35':['aviation','logistics'],'36':['service-healthcare'],'37':['service-healthcare'],'38':['service-healthcare'],
 '39':['service-healthcare'],'42':['logistics'],'43':['service-healthcare'],'44':['logistics'],
 '45':['service-healthcare'],'48':['service-healthcare'],'49':['service-healthcare'],'50':['service-healthcare'],
};
// Destinations verified against publisher pages. Unverified titles remain unlinked.
const publicationLinks: Record<string,string> = {
 'journal-06':'https://doi.org/10.1080/00207543.2026.2626537',
 'journal-02':'https://doi.org/10.1080/00207543.2026.2685180',
 'journal-03':'https://doi.org/10.1016/j.knosys.2026.115669',
 'journal-04':'https://doi.org/10.1016/j.cor.2026.107493',
 'journal-19':'https://doi.org/10.1080/23302674.2023.2252737',
 'journal-26':'https://doi.org/10.1016/j.cie.2022.108270',
 'journal-31':'https://doi.org/10.1016/j.jairtraman.2021.102043',
 'journal-09':'https://doi.org/10.1016/j.tre.2025.104082',
 'journal-17':'https://doi.org/10.1080/23302674.2023.2224511',
 'journal-42':'https://doi.org/10.1016/j.simpat.2019.03.004',
 'journal-01':'https://www.sciencedirect.com/science/article/pii/S1366554526004874',
 'journal-11':'https://link.springer.com/article/10.1007/s10696-025-09602-z',
 'journal-12':'https://link.springer.com/article/10.1007/s10479-022-05162-9',
 'journal-16':'https://link.springer.com/article/10.1007/s10479-023-05418-y',
 'journal-18':'https://onlinelibrary.wiley.com/doi/abs/10.1111/ijcs.12895',
 'journal-21':'https://www.nature.com/articles/s41598-022-25933-5',
 'journal-22':'https://www.sciencedirect.com/science/article/pii/S092552732200216X',
 'journal-23':'https://www.sciencedirect.com/science/article/pii/S1366554522002150',
 'journal-24':'https://doi.org/10.1016/j.tre.2022.102788',
};
export const publications = records.journals.map(p=>({
 id:p.id,year:p.year,title:p.title,authors:p.authors.replace(/\*+/g,'').replace(/\.$/,'')+'.',
 // User-confirmed online publication; no verified final issue metadata in the repository.
 publicationStatus:p.id==='journal-06'?'published-online':p.publicationStatus,
 journal:p.venue,details:p.id==='journal-06'?'':p.bibliographicDetails.replace(/\s*\((?:Cited|Featured|Best Paper|\d+ Altmetric|Winner)[\s\S]*$/i,'').trim(),
 primaryArea:journalAreas[p.id.slice(-2)]?.[0]??null,secondaryAreas:journalAreas[p.id.slice(-2)]?.slice(1)??[],
 primaryAreaId:journalAreas[p.id.slice(-2)]?.[0]??null,secondaryAreaId:journalAreas[p.id.slice(-2)]?.[1]??null,
 areaIds:journalAreas[p.id.slice(-2)] ?? [],url:publicationLinks[p.id] ?? null,
})).sort((a,b)=>b.year-a.year || a.id.localeCompare(b.id));
export type ResearchPublication = typeof publications[number];
export const selectedPublications = ['journal-01','journal-05','journal-09','journal-04','journal-26'].map(id=>publications.find(p=>p.id===id)!);
const projectAreas:Record<string,string[]> = {
 '01':['logistics'],'02':['service-healthcare'],'03':['autonomy','service-healthcare'],'04':['aviation','logistics'],
 '05':['service-healthcare'],'06':['aviation'],'07':['autonomy'],'08':[],'09':['aviation'],'10':['service-healthcare'],'11':['logistics'],
 '12':['aviation','logistics'],'13':['logistics'],'15':['aviation'],'16':['aviation','logistics'],'17':['service-healthcare'],
 '18':['service-healthcare'],'19':['service-healthcare'],'21':['logistics'],'23':['service-healthcare'],
};
const descriptions:Record<string,string> = {
 '01':'Integrates discrete-event simulation and optimization to evaluate freight routing, fleet composition, and infrastructure strategies under demand variability and disruptions. Develops an interactive decision-support toolbox for Anchorage’s multimodal freight network to assess trade-offs among cost, reliability, safety, and resilience.',
 '02':'Predictive and decision analytics for steel procurement under price uncertainty. The research integrates market data, forecasting models, interactive analytics, and decision-support tools to connect market intelligence with purchasing decisions.',
 '03':'Connects international research training with optimization of human–mobile robot operations in manufacturing and services.',
 '04':'Develops route management for coordinated electric-truck and drone last-mile logistics.',
 '05':'Integrates retrieval-augmented language models, analytics APIs, and agent-based response validation to translate steel-market data and forecasts into conversational insights and automated reports. Establishes an extensible foundation for decision support in procurement, pricing, and margin analysis.',
 '06':'Supports wireless research for cloud-based electric-truck and drone logistics.',
 '07':'Examines the translation potential of a software platform for human–robot operations.',
 '08':'Develops and evaluates an application-inspired learning platform for automating scientific workflows with Cloud DevOps. Integrates healthcare scheduling and supply-chain cybersecurity use cases with hands-on learning, assessment, and learner-experience research.',
 '09':'Supports undergraduate research in electric-truck and drone route management.',
 '10':'The project develops an AI-powered analytics platform for steel price prediction and market intelligence. Machine-learning and time-series models analyze historical prices and market indicators to generate forecasts that support procurement planning and purchasing decisions under market uncertainty.',
 '11':'The project develops a machine-learning decision-support framework for procurement lead-time prediction in defense supply chains. The research integrates supplier, item, order, and historical lead-time data with interpretable model evaluation and operational requirements to improve planning for low-volume, high-variety parts.',
 '12':'Develops a cloud-based route management platform for last-mile electric-truck and drone operations.',
 '13':'Combines route optimization, scenario analysis, and incident management for freight and fuel transport.',
 '14':'Provides undergraduate research experiences in prescriptive analytics for AI-enabled operations engineering.',
 '15':'Integrates machine learning and simulation-based optimization to study hub locations, fleet allocation, and coordinated delivery for air taxis and drones. Through collaboration with IIT Madras faculty and students and the ePlane startup team in India, the program connects decision-analytics methods with practical challenges in advanced air mobility.',
 '16':'Advances RoutePEARL, a route-optimization platform for coordinated electric-truck and drone deliveries, through more than 100 industry customer-discovery interviews. Translates operational needs into routing requirements for battery constraints, safe drone deployment, and reliable network connectivity.',
 '17':'The project supported applied research and technology translation to strengthen innovation, resilience, and operational agility among Missouri manufacturers. As part of the program, complementary funding extended industry-focused research in production optimization and steel-market analytics, including the Rebundle and Trinity Products projects.',
 '18':'Combines descriptive analytics and machine-learning forecasts to translate steel-market data into purchasing insights for Trinity Products. Develops an AI-enabled decision-support system to help procurement teams interpret market trends and make informed buying decisions under price uncertainty.',
 '19':'The project integrates mixed-integer production scheduling with discrete-event simulation to coordinate workforce capacity, material flow, and production under resource constraints. A deployable scheduling and scenario-analysis tool translates model outputs into weekly production plans and supports operational decisions as the manufacturing system scales.',
 '20':'Connects university expertise and industry workforce needs through a Digital Transformation Consortium with MU Extension. Delivers self-paced, certificate-based training in business analytics, programming, and geospatial analysis to help Missourians translate data into workplace decisions and transition into digital careers.',
 '21':'The project combines supplier-performance analytics with spare-parts inventory modeling to support aerospace supply-chain decisions. The framework connects supplier reliability and performance measures with inventory requirements to improve part availability, strengthen supplier collaboration, and reduce excess inventory exposure.',
 '22':'Uses real-world pre- and post-implementation data to evaluate the economic impact of NAVIFY digital tumor board software. Combines personnel-cost modeling, system-wide savings projections, and discounted payback analysis to inform investment in cancer-care workflow technology.',
 '23':'The project integrates predictive analytics with inventory optimization to support tactical decisions in a high-variety, made-to-order electrical hardware supply chain. Improved demand forecasts inform inventory policies that balance inventory investment, stockout risk, and customer-service requirements under long supplier lead times and substantial SKU-level uncertainty.',
};
export const sourceLinks = {
 steel:'https://engineering.missouri.edu/2024/ph-d-student-earns-first-in-poster-competition-at-celdi-research-symposium/',
 regional:'https://engineering.missouri.edu/2024/engineering-student-takes-first-at-iise-regional-conference-paper-competition/',
 freight:'https://engineering.missouri.edu/2024/mizzou-engineers-develop-advanced-solutions-for-port-of-alaska-operations/',
 ires:'https://engineering.missouri.edu/2025/mizzou-engineering-faculty-to-lead-global-research-on-human-robot-collaboration/',
 icorps:'https://engineering.missouri.edu/2026/optimizing-warehouse-execution-through-human-robot-collaboration/',
};
const projectDetails:Record<string,{question:string;methods:string[];researcherIds:string[];publicationIds:string[];url:string}> = {
 '07':{question:'How can optimization and AI-enabled decision support coordinate humans, autonomous mobile robots, and warehouse tasks in real time?',methods:['Optimization','AI-enabled Decision Support','Human–Robot Coordination'],researcherIds:['arghadeep-mitra'],publicationIds:[],url:sourceLinks.icorps},
 '03':{question:'How can human–mobile robot collaboration improve manufacturing and service operations?',methods:['Modeling','Optimization','Human–Robot Interaction'],researcherIds:[],publicationIds:[],url:sourceLinks.ires},
 '13':{question:'How can freight and fuel movements remain efficient during port disruptions?',methods:['Simulation','Scenario Analysis','Predictive Analytics'],researcherIds:['ray-wood'],publicationIds:[],url:sourceLinks.freight},
 '18':{question:'How can data and machine learning inform steel purchasing decisions?',methods:['Descriptive Analytics','Machine Learning','Decision Support'],researcherIds:['pyam-oveys','mahima-naznin','thomas-willerth'],publicationIds:[],url:sourceLinks.steel},
};
// Project-specific labels grounded in user-supplied funded project descriptions.
// These retain the existing capability filters and research-area taxonomy.
const projectMethodTags:Record<string,{label:string;capabilityId?:string}[]> = {
 '01':[
  {label:'Discrete-Event Simulation',capabilityId:'simulation'},
  {label:'Freight Routing & Fleet Optimization',capabilityId:'optimization'},
  {label:'Disruption & Scenario Analysis',capabilityId:'simulation'},
  {label:'Infrastructure Planning',capabilityId:'optimization'},
  {label:'Interactive Decision Support',capabilityId:'simulation'},
 ],
};
export const projects = records.projects.map(p=>{
 const num=p.id.slice(-2);
 // User-confirmed extension, September 2026; the original CV snapshot stays immutable.
 const extension:Record<string,string>={'06':'Aug 2025 – Jan 2028','09':'Aug 2024 – Jan 2028','12':'Aug 2023 – Jan 2028'};
 return {id:p.id,officialTitle:p.title,title:num==='23'?'Tactical Decision-Making for Made-to-Order Electrical Hardware Products':p.title,sponsor:num==='11'?'U.S. Department of Defense (via University of Houston)':num==='17'?'U.S. Economic Development Administration':p.sponsor,
  dates:extension[num]??p.period.label,status:extension[num]?'current':p.period.end?(p.period.end>='2026-09'?'current':'completed'):'undated',role:p.role,
  projectType:['08','14','20'].includes(num)?'Cross-Cutting Research Education':null,
  capabilityIds:projectCapabilities[num]??[],parentId:['06','09'].includes(num)?'project-12':null,relatedProgramId:num==='04'?'project-12':null,relatedProjectIds:num==='17'?['project-19','project-18']:[],
  primaryAreaId:projectAreas[num]?.[0]??null,secondaryAreaId:projectAreas[num]?.[1]??null,
  methodTags:projectMethodTags[num]??[],areaIds:projectAreas[num]??[],description:descriptions[num],details:projectDetails[num]??null};
});
export type ResearchProject = typeof projects[number];
export const currentProjects = ['project-01','project-12','project-03','project-02'].map(id=>projects.find(p=>p.id===id)!);
const personEvidence:Record<string,{description:string;tags:string[];areaIds:string[];publicationIds:string[];url?:string}> = {
 'arghadeep-mitra':{description:'Advancing Cobot iCommander, a warehouse execution system that uses optimization and AI-enabled decision support to coordinate humans, autonomous mobile robots, and warehouse tasks in real time.',tags:['Optimization','Human–Robot Systems','AI'],areaIds:['autonomy'],publicationIds:[],url:sourceLinks.icorps},
 'negar-jahanbakhsh-javid':{description:'Published research develops multi-objective optimization for electric truck–drone routing with flight-sensitive zones and partial truck recharging.',tags:['Optimization','Truck–Drone Routing','Electric Mobility'],areaIds:['aviation'],publicationIds:['journal-01']},
 'pyam-oveys':{description:'Research contributions include descriptive analytics and machine learning for steel-market decision support. First place, 2026 IISE DAIS Mobile/Web App Competition, with Sharan Srinivas and James Noble.',tags:['Machine Learning','Decision Support'],areaIds:['service-healthcare'],publicationIds:[],url:sourceLinks.steel},
 'mahima-naznin':{description:'Contributed to the steel-market decision-support research team using descriptive analytics and machine learning.',tags:['Analytics','Machine Learning'],areaIds:['logistics'],publicationIds:[],url:sourceLinks.steel},
 'shitao-yu':{description:'Published research on human–robot order picking and warehouse operations.',tags:['Human–Robot Operations','Optimization'],areaIds:['autonomy','logistics'],publicationIds:['journal-09','journal-22']},
 'mohamed-salama':{description:'Published research on truck–drone routing and scheduling for last-mile delivery.',tags:['Routing','Optimization'],areaIds:['aviation'],publicationIds:['journal-24','journal-35']},
 'haya-salah':{description:'Published research on predictive analytics and clinical appointment scheduling.',tags:['Machine Learning','Scheduling'],areaIds:['service-healthcare'],publicationIds:['journal-21','journal-26','journal-30']},
 'dustin-smith':{description:'Published research on simulation of warehouse check-in strategies for inbound logistics.',tags:['Simulation','Logistics'],areaIds:['logistics'],publicationIds:['journal-42']},
 'arash-alizadeh':{description:'Published research on truck–drone pollution routing with pickup and delivery.',tags:['Routing','Optimization'],areaIds:['aviation'],publicationIds:['journal-06']},
};
// Curated identities and expertise supplied in the final V3 brief; not inferred from publications.
const currentProfiles:Record<string,{description:string;collapsedTags:string[];expertise:string[];areaIds:string[]}>={
 "yusuf-salik":{"description": "Research focuses on computer vision and multimodal AI for intelligent industrial systems, with emphasis on real-time perception, monitoring, and decision support from image, video, and multimodal data in manufacturing and warehouse environments.", "collapsedTags": ["Computer Vision", "Multimodal AI", "Industrial Systems"], "expertise": ["Computer Vision", "Multimodal Learning", "Deep Learning", "Image & Video Processing", "Real-Time Vision", "Python"], "areaIds": ["autonomy"]},
 "soham-basu":{"description": "Research focuses on optimization of collaborative human–autonomous mobile robot (AMR) operations in warehouse order picking under uncertainty. Current work develops robust and stochastic optimization models for order batching, assignment, sequencing, and routing, supported by scalable metaheuristics for large operational instances.", "collapsedTags": ["Human–Robot Operations", "Optimization under Uncertainty"], "expertise": ["Mixed-Integer Programming", "Robust Optimization", "Stochastic Optimization", "Metaheuristics", "Simulation", "Quantum-Assisted Optimization"], "areaIds": ["autonomy", "logistics"]},
 "arghadeep-mitra":{"description": "Research focuses on stochastic optimization and adaptive decision-making for collaborative human–robot order picking in warehouse intralogistics. Current work examines autonomous mobile robots (AMRs), including fleet planning and task coordination under uncertainty and dynamic operating conditions.", "collapsedTags": ["Human–Robot Operations", "Stochastic Optimization"], "expertise": ["Stochastic Optimization", "Metaheuristics", "Reinforcement Learning", "Simulation", "Python"], "areaIds": ["autonomy"]},
 "celiker-busra":{"description": "Research focuses on optimization of last-mile e-grocery delivery systems that integrate drones with ground transportation. Current work examines routing, scheduling, and coordination decisions under product-availability and operational constraints using mathematical optimization and adaptive metaheuristics.", "collapsedTags": ["Last-Mile Logistics", "Coordinated Delivery", "Optimization"], "expertise": ["Mixed-Integer Linear Programming", "Combinatorial Optimization", "Vehicle Routing", "Adaptive Large Neighborhood Search", "Simulated Annealing", "Python"], "areaIds": ["aviation", "logistics"]},
 "negar-jahanbakhsh-javid":{"description": "Research focuses on optimization for emerging transportation and logistics systems, with emphasis on coordinated electric truck–drone operations. Current work examines routing, fleet, charging, and operational decisions using mathematical optimization and advanced computational algorithms.", "collapsedTags": ["Electric Truck–Drone Operations", "Optimization"], "expertise": ["Mixed-Integer Programming", "Multi-Objective Optimization", "Metaheuristics", "Matheuristics", "Combinatorial Optimization", "Algorithm Design"], "areaIds": ["aviation", "logistics"]},
 "mahima-naznin":{"description": "Research focuses on machine learning, explainable AI, and predictive analytics for risk assessment and decision support in complex systems. Current work emphasizes interpretable prediction and statistical modeling across healthcare and industrial applications.", "collapsedTags": ["Machine Learning", "Explainable AI", "Predictive Analytics"], "expertise": ["Machine Learning", "Statistical Modeling", "Predictive Analytics", "Explainable AI", "Cluster Analysis", "Time-Series Forecasting"], "areaIds": []},
 "fatemeh-pourdehghan":{"description": "Research focuses on optimization of additive manufacturing and integrated production–delivery systems, including order acceptance, batching, machine assignment, scheduling, and coordinated delivery decisions.", "collapsedTags": ["Production–Delivery Optimization", "Scheduling"], "expertise": ["MILP", "Adaptive Metaheuristics", "Scheduling", "Vehicle Routing", "Production–Delivery Optimization", "Python"], "areaIds": ["service-healthcare"]},
 "pyam-oveys":{"description": "Research focuses on predictive and decision analytics for steel procurement under price uncertainty. Current work integrates time-series forecasting, simulation, and interactive decision support to connect market forecasts with purchasing and inventory decisions.", "collapsedTags": ["Predictive Analytics", "Steel Procurement", "Decision Support"], "expertise": ["Machine Learning", "Time-Series Forecasting", "Simulation", "Inventory Decision-Making", "Decision Support Systems", "Python"], "areaIds": ["service-healthcare"]},
};
// Keep full source photographs; framing is applied non-destructively by the shared card.
const researcherPortraits:Record<string,{src:string;position:string;scale:number;origin:string}>={
 'negar-jahanbakhsh-javid':{src:'/images/researchers/negar-jahanbakhsh-javid.webp',position:'50% 50%',scale:1.45,origin:'50% 13%'},
 'soham-basu':{src:'/images/researchers/soham-basu.webp',position:'62% 50%',scale:1.6,origin:'50% 18%'},
 'celiker-busra':{src:'/images/researchers/celiker-busra.webp',position:'50% 50%',scale:1.15,origin:'50% 0%'},
 'yusuf-salik':{src:'/images/researchers/yusuf-salik.webp',position:'50% 0%',scale:1,origin:'50% 50%'},
 'fatemeh-pourdehghan':{src:'/images/researchers/fatemeh-pourdehghan.webp',position:'50% 0%',scale:1.3,origin:'50% 34%'},
 'arghadeep-mitra':{src:'/images/researchers/arghadeep-mitra.webp',position:'50% 0%',scale:1.5,origin:'50% 0%'},
 'pyam-oveys':{src:'/images/researchers/pyam-oveys.webp',position:'50% 50%',scale:1.08,origin:'50% 30%'},
 'mahima-naznin':{src:'/images/researchers/mahima-naznin.webp',position:'54% 0%',scale:1.85,origin:'54% 45%'},
};
export const researchers = records.people.map(p=>{
 const current=p.relationships.find(r=>r.type==='current-advisee');
 const completions=p.relationships.filter(r=>r.type==='completed-degree').map(r=>({degree:r.degree.join(' & '),period:r.completedPeriod?`${r.completedPeriod.season} ${r.completedPeriod.year}`:''}));
 const evidence=p.id==='mahima-naznin'?undefined:personEvidence[p.id];
 const profile=currentProfiles[p.id];
 return {id:p.id,name:p.id==='fatemeh-pourdehghan'?'Fatemeh Pourdehghan Golneshini':p.id==='celiker-busra'?'Busra Celiker':p.name,portrait:researcherPortraits[p.id]??null,current:!!current,degrees:current?.degree??[],completions,
  capabilityIds:researcherCapabilities[p.id]??[],
  collapsedTags:profile?.collapsedTags??[],expertise:profile?.expertise??[],
  description:profile?.description??evidence?.description??null,tags:profile?.expertise??evidence?.tags??[],areaIds:profile?.areaIds??evidence?.areaIds??[],publicationIds:evidence?.publicationIds??[],url:evidence?.url??null};
});
export const currentResearchers=researchers.filter(p=>p.current);
export const phdAlumni=researchers.filter(p=>!p.current && p.completions.some(c=>c.degree==='PhD'));
export const msAlumni=researchers.filter(p=>!p.current && !p.completions.some(c=>c.degree==='PhD') && p.completions.some(c=>c.degree==='MS'));
export const alumniPositions:Record<string,string[]>={
 'paul-antonacci':['U.S. Air Force'],'arash-alizadeh':['Postdoctoral Researcher · Wayne State University'],
 'shitao-yu':['Faculty of Management and Economics','Kunming University of Science and Technology · China'],
 'mohamed-salama':['Visiting Assistant Professor','Edwardson School of Industrial Engineering','Purdue University'],
 'haya-salah':['Data Scientist · Centene Corporation'],'ali-fallah':['PhD Student · NJIT'],
 'sai-kiran-singraj':['Quality Engineer · Hitachi Energy'],'ray-wood':['Configuration Management Engineer · Boeing'],
 'parth-jahagirdar':['Process Improvement Analyst · University of Missouri Research Reactor'],
 'dustin-smith':['Engagement Manager · Aminad Consulting'],'alexander-jackson':['Senior Project Engineer · Lockheed Martin'],
};
export const researcherStreams:Record<string,{stream:string;achievement?:string;projectId?:string}>={
 'negar-jahanbakhsh-javid':{stream:'NSF PFI-TT electric truck-drone route management research program',projectId:'project-12'},
 'pyam-oveys':{stream:'Steel-market decision support',projectId:'project-18',achievement:'1st Place, 2026 IISE DAIS Mobile/Web App Competition, with Sharan Srinivas and James Noble.'},
 'soham-basu':{stream:'Collaborative human-robot order picking and AMR coordination'},
 'fatemeh-pourdehghan':{stream:'Additive manufacturing scheduling and integrated production-delivery planning'},
 'arghadeep-mitra':{stream:'Cobot iCommander · human–robot warehouse operations',projectId:'project-07',achievement:'NSF I-Corps research translation and customer discovery.'},
};
export const undergraduateResearchers=[{name:'Victoria Prettejohn',role:'Undergraduate Research Scholar'},{name:'Arush Singh',role:'IE Innovation Fellow'},{name:'Eric Pflasterer',role:'Undergraduate Researcher'}];
export const personName=(id:string)=>researchers.find(p=>p.id===id)?.name ?? (id==='thomas-willerth'?'Thomas Willerth':id);
export const sponsors = [
 {id:'nsf',name:'National Science Foundation',height:58},
 {id:'alaska-dot',name:'Alaska Department of Transportation & Public Facilities',height:52},
 {id:'dod',name:'U.S. Department of Defense',height:56},
 {id:'army-research',name:'U.S. Army Research Office',height:56},
 {id:'eda',name:'U.S. Economic Development Administration',height:42},
 {id:'roche',name:'Roche Molecular Systems',height:44},
 {id:'schneider',name:'Schneider Electric',height:42},
 {id:'boeing',name:'Boeing',height:40},
 {id:'unicoil',name:'Universal Metal Coating Company (UNICOIL)',height:44},
 {id:'trinity',name:'Trinity Products',height:40},
 {id:'rebundle',name:'Rebundle',height:56},
 {id:'missouri-dhewd',name:'Missouri Department of Higher Education and Workforce Development',height:40},
];
export const training = [
 {name:'NSF REU',title:'Undergraduate Research',description:'Mentored research connects analytical methods, research communication, and exposure to funded projects.'},
 {name:'NSF IRES',title:'International Research',description:'Research with international partners, including Germany, develops technical collaboration and professional skills.',url:sourceLinks.ires},
 {name:'NSF I-Corps',title:'Research Translation',description:'Stakeholder discovery and problem definition help students explore how technical research can be put to use.',url:sourceLinks.icorps},
];
export const recognition = [
 {year:'2026',title:'IISE DAIS Mobile/Web App Competition',description:'First place — Pyam Oveys, Sharan Srinivas, and James Noble.'},
 {year:'2026',title:'Research translation through NSF I-Corps',description:'Exploring practical uses of research on human–robot warehouse operations.',url:sourceLinks.icorps},
 {year:'2024',title:'CELDi research poster competition',description:'Pyam Oveys earned first place for steel-market decision-support research.',url:sourceLinks.steel},
 {year:'2024',title:'IISE Regional Student Paper Competition',description:'Ray Wood earned first place for manufacturing workforce-optimization research.',url:sourceLinks.regional},
];
export const recentUndergraduates=[['Thomas Willerth','IE honors · 2025'],['Matt Floyd','IE · 2025'],['Stephen Swingle','IE honors · 2024'],['Marc Rosner','Marketing · 2024']];
