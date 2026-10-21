// Public summaries supplied in the Teaching & Education brief; no syllabus files are published.
export const breadth = [
  { id: 'analytics', title: 'Analytics & AI', methods: ['Machine Learning', 'Data Engineering', 'Text Analytics', 'Responsible AI'] },
  { id: 'decisions', title: 'Operations Research & Decisions', methods: ['Optimization', 'Resource Allocation', 'Multi-Criteria Decision Making'] },
  { id: 'systems', title: 'Engineering Systems', methods: ['Simulation', 'Quality Engineering', 'Supply Chains', 'Service Systems'] },
  { id: 'advanced', title: 'Advanced Methods', methods: ['Reinforcement Learning', 'Metaheuristics', 'Prescriptive Analytics'] },
];
export const courses = [
  { id:'analytics', code:'ISE 4410/7410', title:'Data Analytics and Machine Learning for Operations Intelligence', term:'Fall 2026', description:'Transforms operational data into meaningful insights, reliable predictions, and actionable recommendations through data analytics and machine learning.', tags:['Python','Excel','Machine Learning','Model Evaluation','Responsible AI'], methods:['Data preparation','Descriptive analytics','Supervised learning','Unsupervised learning','Model evaluation','Interpretability','Machine Learning','Data Engineering','Responsible AI'], tools:['Python','Excel'], applications:['Manufacturing','Transportation','Healthcare','Service operations'], groups:['analytics'] },
  { id:'services', code:'ISE 4370/7370', title:'Service Systems Engineering and Management', term:'Fall 2026', description:'Applies operations research and analytical methods to the design, operation, and improvement of complex service systems.', tags:['Optimization','Resource Allocation','Capacity & Demand','Service Operations','Multi-Criteria Decisions'], methods:['Optimization','Resource Allocation','Capacity and demand management','Multi-Criteria Decision Making','Service Systems'], tools:['Excel'], applications:['Transportation','Healthcare','Logistics','Finance','Hospitality','Government/service operations'], groups:['decisions','systems'] },
  { id:'quality', code:'ISE 4610/7610', title:'Quality Engineering and Analytics', term:'Spring 2026', description:'Examines quality planning, improvement, and control from a systems and data-driven decision perspective across manufacturing and service operations.', tags:['DMAIC','Statistical Quality Control','Process Capability','Python','Text Analytics'], methods:['DMAIC','Statistical process control','Capability analysis','Statistical quality methods','Text Analytics','Quality Engineering'], tools:['Python'], applications:['Manufacturing','Service quality','Customer experience','Operational process improvement'], groups:['analytics','systems'] },
  { id:'advanced', code:'ISE 8410', title:'Advanced Analytics with Engineering Applications', term:'Fall 2025', description:'Integrates descriptive, predictive, and prescriptive analytics for complex engineering decisions, with emphasis on practical implementation using Python.', tags:['Python','Machine Learning','Reinforcement Learning','Metaheuristics','Prescriptive Analytics'], methods:['Descriptive analytics','Machine Learning','Reinforcement Learning','Metaheuristics','Prescriptive Analytics','Optimization'], tools:['Python'], applications:['Manufacturing','Transportation','Healthcare','Engineering systems'], groups:['analytics','decisions','advanced'] },
];
export const additional = [
  {id:'simulation',title:'Systems Simulation', description:'Discrete-event simulation, input modeling, experimentation, statistical analysis, alternative comparison, and output analysis using Simio.',methods:['Simulation'],groups:['systems']},
  {id:'supply',title:'Analytics for Supply Chain Management',description:'Operations-research models for integrated supply-chain design, control, and operations, supplemented by case studies and management games.',methods:['Optimization','Supply Chains'],groups:['decisions','systems']},
  {id:'business',title:'Data Analytics and Machine Learning for Business',description:'Applied analytics and machine learning for data-driven business decisions using Excel and R.',methods:['Machine Learning'],groups:['analytics']},
  {id:'python',title:'Python for Marketing Analytics',description:'Python-based visualization, association analysis, clustering, and text mining for marketing and customer analytics.',methods:['Text Analytics','Machine Learning'],groups:['analytics']},
  {id:'r',title:'R for Marketing Analytics',description:'Applied analytics, machine learning, clustering, association analysis, and text mining using R.',methods:['Text Analytics','Machine Learning'],groups:['analytics']},
  {id:'international',title:'International Teaching',description:'Courses and workshops in analytics, simulation, quality engineering, and applied AI at international partner institutions.',methods:['Simulation','Quality Engineering'],groups:['analytics','systems']},
];
export const stages = [
 ['Problem-Centered Learning','Start with realistic operational and organizational problems before introducing the analytical methods used to address them.'],
 ['Hands-On Methods & Tools','Build and test models using Python, Excel, optimization, simulation, and other analytical tools.'],
 ['Research-Connected Learning','Connect coursework with current research methods, literature, and open-ended analytical problems.'],
 ['Collaborative Problem Solving','Use cases, projects, teamwork, and technical communication to examine assumptions, tradeoffs, and decisions.'],
];
export const programs = [
 ['NSF REU','Undergraduate Research','Mentored research connecting analytics, optimization, AI, and operational systems.','https://www.nsf.gov/awardsearch/showAward?AWD_ID=2243589'],
 ['NSF IRES','International Research','Structured research training combining technical work, international collaboration, and professional development.','https://engineering.missouri.edu/2025/mizzou-engineering-faculty-to-lead-global-research-on-human-robot-collaboration/'],
 ['NSF I-Corps','Translational Research','Training in stakeholder discovery, problem definition, and translation of engineering research toward real-world use.','https://engineering.missouri.edu/2026/optimizing-warehouse-execution-through-human-robot-collaboration/'],
 ['NSF CyberTraining','Cloud & Engineering Workflows','Training that connects cloud computing and DevOps with application-inspired engineering analytics and decision systems.','https://www.nsf.gov/awardsearch/showAward?AWD_ID=2417826'],
];
export const regions = [
 {id:'missouri',title:'Missouri',institutions:['University of Missouri · Columbia, Missouri'],tags:['Teaching','Research Training','Program Development'],description:'The home base for teaching, research training, and curriculum development in industrial and systems engineering.'},
 {id:'germany',title:'Germany',institutions:['University of Passau','TUM Heilbronn'],tags:['Courses','NSF IRES','Research Training','Student Collaboration'],description:'Course engagement and international research training connect students with German academic partners. Current NSF IRES activity focuses on collaborative human-mobile robot operations.'},
 {id:'india',title:'India',institutions:['IIT Madras','NIT Tiruchirappalli','IIM Tiruchirappalli'],tags:['International Research','Workshops','Courses','Faculty/Student Development'],description:'Academic connections encompass analytics, quality engineering, applied AI, and decision-focused analytical methods through research, workshops, and courses.'},
];
export const recognition = [
 ['2023','Junior Excellence in Teaching Award','University of Missouri College of Engineering','https://engineering.missouri.edu/2023/faculty-staff-students-recognized-for-outstanding-contributions-performance/'],
 ['2023–2026','Outstanding Professor','Student-voted recognition',''],
 ['2026','Outstanding Senior Faculty Teaching Award','University of Missouri','https://engineering.missouri.edu/2026/mizzou-engineering-honors-outstanding-faculty-staff-students-and-alumni-2/'],
 ['2026','John L. Imhoff Global Excellence Award for Industrial Engineering Education','ASEE','https://www.asee.org/membership-and-communities/AWARDS-HONORS/Award-List/John-L-Imhoff-Global-Excellence-Award-for-Industri'],
 ['2026–27','AI Fellow','University of Missouri Teaching for Learning Center','https://tlc.missouri.edu/welcome-our-new-faculty-fellows/'],
];
