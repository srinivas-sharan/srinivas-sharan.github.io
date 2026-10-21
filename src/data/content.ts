export type ResearchArea = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  methods: string[];
  image?: string;
  imageAlt?: string;
};

// Application-area taxonomy is maintained in research.ts and area-framing.ts.

export type Project = {
  title: string;
  period: string;
  sponsor?: string;
  role?: string;
  summary: string;
  tags: string[];
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Optimizing collaborative human–robot operations",
    period: "Awarded January 2025 · status to be confirmed",
    sponsor: "NSF I-Corps · Award 2447357",
    role: "Principal Investigator",
    summary:
      "Exploring the translation potential of a software platform for optimizing collaborative human–robot operations.",
    tags: ["Human–robot teaming", "Software translation", "Warehousing"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2447357",
    featured: true,
  },
  {
    title: "Electric truck and drone route-management platform",
    period: "Awarded August 2023 · status to be confirmed",
    sponsor: "NSF PFI-TT · Award 2313887",
    role: "Principal Investigator",
    summary:
      "A cloud-based platform for optimizing last-mile logistics involving electric trucks and drone operations.",
    tags: ["Route optimization", "Cloud platform", "Last-mile logistics"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2313887",
    featured: true,
  },
  {
    title: "Intelligent truck transport management",
    period: "Awarded September 2023 · status to be confirmed",
    sponsor: "Alaska Department of Transportation",
    role: "Principal Investigator",
    summary:
      "Developing a freight and fuel transport-management application using route optimization, scenario analysis, and incident management.",
    tags: ["Freight", "Routing", "Decision support"],
  },
  {
    title: "Cloud DevOps training platform",
    period: "Awarded August 2024 · status to be confirmed",
    sponsor: "NSF CyberTraining · Award 2417826",
    role: "Co-Principal Investigator",
    summary:
      "Application-inspired cloud DevOps training delivered through an online self-service learning platform.",
    tags: ["CyberTraining", "Cloud DevOps", "Education"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2417826",
  },
  {
    title: "Air-taxi and drone decision analytics",
    period: "Awarded April 2023 · 2023 and 2024 cohorts represented",
    sponsor: "NSF IRES · Award 2245469",
    role: "Co-Principal Investigator",
    summary:
      "International research experiences focused on AI-enabled decision analytics for air-taxi and drone operations.",
    tags: ["Student research", "Advanced air mobility", "International education"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2245469",
  },
  {
    title: "Prescriptive analytics for AI-enabled operations",
    period: "Awarded February 2023 · 2023 and 2024 cohorts represented",
    sponsor: "NSF REU · Award 2243589",
    role: "Co-Principal Investigator",
    summary:
      "Undergraduate research experiences centered on prescriptive analytics for AI-enabled operations engineering.",
    tags: ["Undergraduate research", "Prescriptive analytics", "AI-enabled operations"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2243589",
  },
  {
    title: "Aerial and road logistics software",
    period: "Awarded August 2022",
    sponsor: "NSF I-Corps · Award 2240977",
    role: "Principal Investigator",
    summary:
      "Investigating a scalable cloud-based route-optimization platform for efficient aerial and road logistics.",
    tags: ["Technology translation", "Aerial logistics", "Routing"],
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2240977",
  },
  {
    title: "Analysis capabilities for competition, crisis, and combat",
    period: "Awarded September 2023 · status to be confirmed",
    sponsor: "Department of Defense flow-through award",
    role: "Co-Principal Investigator",
    summary:
      "The repository identifies this AC4 sponsored project but does not yet provide a public project abstract or outcomes.",
    tags: ["Sponsored research", "Decision analytics"],
  },
  {
    title: "Healthcare operations and engineering analytics consortium",
    period: "Dates and current status to be confirmed",
    summary:
      "An MU initiative established to improve healthcare operations through industry–academic collaboration and analytics research.",
    tags: ["Healthcare operations", "Industry collaboration", "Analytics"],
    url: "https://engineering.missouri.edu/research/research-initiatives/home-consortium/",
  },
];

export type Publication = {
  year: string;
  title: string;
  venue: string;
  citation?: string;
  url?: string;
  kind?: string;
};

export const publications: Publication[] = [
  { year: "2025", title: "Collaborative Human–Robot Teaming for Dynamic Order Picking: Interventionist Strategies for Improving Warehouse Intralogistics Operations", venue: "Transportation Research Part E", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554525001231" },
  { year: "2025", title: "Order Acceptance and Scheduling on Non-Identical Parallel Machines with Dependent Setup Times: New Mixed Integer Programming Formulations", venue: "Flexible Services and Manufacturing Journal", url: "https://link.springer.com/article/10.1007/s10696-025-09602-z" },
  { year: "2025", title: "A Clustering-Metaheuristic-Simulation Approach to Determine Air Taxi Operating Site Location", venue: "Transportation Research Interdisciplinary Perspectives", url: "https://www.sciencedirect.com/science/article/pii/S2590198225000090" },
  { year: "2023", title: "Collaborative Truck Multi-Drone Delivery System Considering Drone Scheduling and En Route Operations", venue: "Annals of Operations Research", url: "https://link.springer.com/article/10.1007/s10479-023-05418-y" },
  { year: "2022", title: "Passenger Intelligence as a Competitive Opportunity: Unsupervised Text Analytics for Discovering Airline-Specific Insights from Online Reviews", venue: "Annals of Operations Research", url: "https://link.springer.com/article/10.1007/s10479-022-05162-9" },
  { year: "2022", title: "It Is About Inclusion! Mining Online Reviews to Understand the Needs of Adaptive Clothing Customers", venue: "International Journal of Consumer Studies", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ijcs.12895" },
  { year: "2022", title: "Explainable Machine Learning Framework for Predicting Long-Term Cardiovascular Disease Risk Among Adolescents", venue: "Scientific Reports", url: "https://www.nature.com/articles/s41598-022-25933-5" },
  { year: "2022", title: "Collaborative Order Picking with Multiple Pickers and Robots: Integrated Approach for Order Batching, Sequencing and Picker-Robot Routing", venue: "International Journal of Production Economics", url: "https://www.sciencedirect.com/science/article/abs/pii/S092552732200216X" },
  { year: "2022", title: "Autonomous Robot-Driven Deliveries: A Review of Recent Developments and Future Directions", venue: "Transportation Research Part E", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554522002150" },
  { year: "2022", title: "Collaborative Truck Multi-Drone Routing and Scheduling Problem: Package Delivery with Flexible Launch and Recovery Sites", venue: "Transportation Research Part E", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554522001776" },
  { year: "2021", title: "Predicting Demand for Air Taxi Urban Aviation Services Using Machine Learning Algorithms", venue: "Journal of Air Transport Management", url: "https://doi.org/10.1016/j.jairtraman.2021.102043" },
  { year: "2020", title: "Air Taxi Service for Urban Mobility: A Critical Review of Recent Developments, Future Challenges, and Opportunities", venue: "Transportation Research Part E", url: "https://doi.org/10.1016/j.tre.2020.102090" },
  { year: "2020", title: "Modeling and Analysis of Business Process Reengineering Strategies for Improving Emergency Department Efficiency", venue: "Simulation: Transactions of the Society for Modeling and Simulation International" },
  { year: "2020", title: "Designing Schedule Configuration of a Hybrid Appointment System for a Two-Stage Outpatient Clinic with Multiple Servers", venue: "Health Care Management Science", citation: "Srinivas, S. & Ravindran, A. R. · 23, 360–386", url: "https://link.springer.com/article/10.1007/s10729-019-09501-4" },
  { year: "2020", title: "Hybrid Ordering Policies for Platelet Inventory Management Under Demand Uncertainty", venue: "IISE Transactions on Healthcare Systems Engineering", citation: "Rajendran, S. & Srinivas, S. · 10(2), 113–126", url: "https://www.tandfonline.com/doi/abs/10.1080/24725579.2019.1686718" },
  { year: "2018", title: "Optimizing Outpatient Appointment System Using Machine Learning Algorithms and Scheduling Rules: A Prescriptive Analytics Framework", venue: "Expert Systems with Applications", citation: "Srinivas, S. & Ravindran, A. R. · 102, 245–261", url: "https://www.sciencedirect.com/science/article/abs/pii/S0957417418300988" },
  { year: "2020", title: "Longitudinal Association Between Adolescent Negative Emotions and Adulthood Cardiovascular Disease Risk: An Opportunity for Healthcare Quality Improvement", venue: "Benchmarking: An International Journal", citation: "Srinivas, S., Anand, K. & Chockalingam, A.", url: "https://www.emerald.com/insight/content/doi/10.1108/BIJ-01-2020-0028/full/html" },
  { year: "2018", title: "Self-Reported Depressive Symptoms in Adolescence Increase the Risk for Obesity and High BP in Adulthood", venue: "International Journal of Cardiology", citation: "Srinivas, S., Rajendran, S., Anand, K. & Chockalingam, A. · 269, 339–342" },
  { year: "2020", title: "Improving Campus Dining Operations Using Capacity and Queue Management: A Simulation-Based Case Study", venue: "Journal of Hospitality and Tourism Management", citation: "Kambli, A., Sinha, A. A. & Srinivas, S. · 43, 62–70", url: "https://www.sciencedirect.com/science/article/pii/S1447677019303274" },
  { year: "2019", title: "Topic-Based Knowledge Mining of Online Student Reviews for Strategic Planning in Universities", venue: "Computers & Industrial Engineering", citation: "Srinivas, S. & Rajendran, S. · 128, 974–984", url: "https://www.sciencedirect.com/science/article/pii/S0360835218303127" },
  { year: "2020", title: "Joint Optimization of Customer Location Clustering and Drone-Based Routing for Last-Mile Deliveries", venue: "Transportation Research Part C", citation: "Salama, M. & Srinivas, S. · 114, 620–642", url: "https://www.sciencedirect.com/science/article/pii/S0968090X19310332" },
  { year: "2019", title: "A Simulation-Based Evaluation of Warehouse Check-In Strategies for Improving Inbound Logistics Operations", venue: "Simulation Modelling Practice and Theory", citation: "Smith, D. & Srinivas, S. · 94, 303–320", url: "https://www.sciencedirect.com/science/article/pii/S1569190X19300280" },
  { year: "2020", title: "Discovering Airline-Specific Business Intelligence from Online Passenger Reviews: An Unsupervised Text Analytics Approach", venue: "INFORMS Data Mining and Decision Analytics Competition · Best Paper Finalist", url: "https://www.informs.org/Recognizing-Excellence/Award-Recipients/Sharan-Srinivas" },
  { year: "2021", title: "Supply Chain Management in Manufacturing and Service Systems: Advanced Analytics for Smarter Decisions", venue: "Springer · Edited book", citation: "Co-edited with Suchithra Rajendran and Hans Ziegler", url: "https://link.springer.com/book/10.1007/978-3-030-69265-0", kind: "Book" },
];

export type NewsItem = {
  date: string;
  year: string;
  category: "Appointment" | "Publication" | "Grant" | "Award" | "Career" | "Recognition" | "Student" | "Leadership";
  title: string;
  url?: string;
};

export const rebundleNews: NewsItem[] = [
  {date:"March 10, 2024",year:"2024",category:"Award",title:"Ray Wood received first place in the IISE South Central Regional Conference Paper Competition for Rebundle manufacturing-optimization research.",url:"https://engineering.missouri.edu/2024/engineering-student-takes-first-at-iise-regional-conference-paper-competition/"},
  {date:"July 25, 2024",year:"2024",category:"Award",title:"Ray Wood received third place in both the IISE Global Undergraduate Student Technical Paper Competition and the IISE Operations Research Undergraduate Research Competition for Rebundle research.",url:"https://engineering.missouri.edu/2024/mizzou-engineering-student-places-third-in-global-research-competitions/"},
];

export const news: NewsItem[] = [
  {"date":"August 2026","year":"2026","category":"Appointment","title":"Selected as an AI Fellow for 2026–27 by the University of Missouri Teaching for Learning Center.","url":"https://tlc.missouri.edu/welcome-our-new-faculty-fellows/"},
  {"date":"August 2026","year":"2026","category":"Leadership","title":"Appointed Program Chair for the 2027 IISE Annual Conference."},
  {"date":"July 2026","year":"2026","category":"Publication","title":"Electric truck–drone routing research with Negar Jahanbakhsh Javid accepted in Transportation Research Part E.","url":"https://www.sciencedirect.com/science/article/pii/S1366554526004874"},
  {"date":"July 2026","year":"2026","category":"Student","title":"PhD student Paul Antonacci completed his doctoral degree."},
  {"date":"June 2026","year":"2026","category":"Award","title":"Received the John L. Imhoff Global Excellence Award for Industrial Engineering Education from ASEE."},
  {"date":"June 2026","year":"2026","category":"Publication","title":"Post-disaster drone-logistics research published in International Journal of Production Research.","url":"https://doi.org/10.1080/00207543.2026.2685180"},
  {"date":"May 2026","year":"2026","category":"Award","title":"1st Place in the 2026 IISE DAIS Mobile/Web App Competition — Pyam Oveys, Sharan Srinivas, and James Noble.","url":"https://www.iise.org/Details.aspx?id=33697"},
  {"date":"May 2026","year":"2026","category":"Award","title":"Received the Distinguished Young Alumnus Award from the College of Engineering, Guindy Alumni Association."},
  {"date":"May 2026","year":"2026","category":"Award","title":"Voted Outstanding Professor in Industrial and Systems Engineering by 2026 graduating seniors.","url":"https://engineering.missouri.edu/2026/celebrating-academic-excellence-with-the-class-of-2026/"},
  {"date":"April 2026","year":"2026","category":"Grant","title":"UNICOIL grant awarded for a risk-aware decision-support platform for commodity pricing under market uncertainty."},
  {"date":"March 2026","year":"2026","category":"Award","title":"Received the Outstanding Senior Faculty Teaching Award from the University of Missouri.","url":"https://engineering.missouri.edu/2026/mizzou-engineering-honors-outstanding-faculty-staff-students-and-alumni-2/"},
  {"date":"March 2026","year":"2026","category":"Publication","title":"iFreightOps research on data-driven freight transportation management in port operations published in IEEE Transactions on Engineering Management."},
  {"date":"March 2026","year":"2026","category":"Grant","title":"Alaska DOT/FHWA grant awarded to advance cost-effective, safe, and resilient freight operations in Anchorage."},
  {"date":"January 2026","year":"2026","category":"Publication","title":"Collaborative truck multi-drone pollution-routing research with Arash Alizadeh accepted in International Journal of Production Research.","url":"https://doi.org/10.1080/00207543.2026.2626537"},
  {"date":"December 2025","year":"2025","category":"Student","title":"PhD student Arash Alizadeh completed his doctoral degree."},
  {"date":"September 2025","year":"2025","category":"Grant","title":"NSF IRES grant awarded for research on optimizing collaborative human-mobile robot operations for next-generation manufacturing and service systems.","url":"https://engineering.missouri.edu/2025/mizzou-engineering-faculty-to-lead-global-research-on-human-robot-collaboration/"},
  {"date":"September 2025","year":"2025","category":"Grant","title":"Mizzou TechHub award received to advance a route-management platform for electric truck-drone last-mile logistics."},
  {"date":"May 2025","year":"2025","category":"Award","title":"Voted Outstanding Professor in Industrial and Systems Engineering by 2025 graduating seniors."},
  { date: "April 2025", year: "2025", category: "Appointment", title: "Appointed to the Editorial Board of Scientific Reports." },
  {"date":"April 2025","year":"2025","category":"Grant","title":"UNICOIL grant awarded to advance steel-market analytics and decision-making through integration of large language models."},
  { date: "March 2025", year: "2025", category: "Publication", title: "Human–robot teaming research accepted in Transportation Research Part E.", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554525001231" },
  { date: "February 2025", year: "2025", category: "Publication", title: "Order-acceptance and parallel-machine scheduling research accepted in Flexible Services and Manufacturing Journal.", url: "https://link.springer.com/article/10.1007/s10696-025-09602-z" },
  { date: "January 2025", year: "2025", category: "Publication", title: "Air-taxi operating-site research accepted in Transportation Research Interdisciplinary Perspectives.", url: "https://www.sciencedirect.com/science/article/pii/S2590198225000090" },
  { date: "January 2025", year: "2025", category: "Grant", title: "NSF I-Corps award received for collaborative human–robot operations software translation.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2447357" },
  { date: "December 2024", year: "2024", category: "Award", title: "Voted Outstanding Professor in Industrial and Systems Engineering by Fall 2024 graduating seniors." },
  { date: "November 2024", year: "2024", category: "Award", title: "Received the Outstanding ISE Faculty Award for research, teaching, and service.", url: "https://engineering.missouri.edu/2024/eight-inducted-into-industrial-and-systems-engineering-hall-of-fame/" },
  { date: "September 2024", year: "2024", category: "Career", title: "Promoted to Associate Professor with tenure at the University of Missouri." },
  { date: "August 2024", year: "2024", category: "Grant", title: "NSF CyberTraining award received for an application-inspired cloud DevOps training platform.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2417826" },
  rebundleNews[1],
  { date: "July 2024", year: "2024", category: "Appointment", title: "Appointed to the Editorial Board of BMC Medical Informatics and Decision Making." },
  rebundleNews[0],
  { date: "February 2024", year: "2024", category: "Appointment", title: "Appointed to the Editorial Board of Transportation Research Part E." },
  { date: "December 2023", year: "2023", category: "Award", title: "Voted Outstanding Professor in Industrial and Systems Engineering by Fall 2023 graduating seniors." },
  { date: "September 2023", year: "2023", category: "Grant", title: "DoD flow-through award received for Analysis Capabilities for Competition, Crisis, and Combat (AC4)." },
  { date: "September 2023", year: "2023", category: "Grant", title: "Alaska DOT research award received for an intelligent truck transport-management application." },
  { date: "August 2023", year: "2023", category: "Grant", title: "NSF PFI-TT award received for a cloud-based electric-truck and drone route-management platform.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2313887" },
  {"date":"July 2023","year":"2023","category":"Student","title":"PhD student Shitao Yu completed his doctoral degree."},
  { date: "May 2023", year: "2023", category: "Publication", title: "Collaborative truck multi-drone delivery research accepted in Annals of Operations Research.", url: "https://link.springer.com/article/10.1007/s10479-023-05418-y" },
  { date: "April 2023", year: "2023", category: "Grant", title: "NSF IRES award received for international research in air-taxi and drone decision analytics.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2245469" },
  { date: "March 2023", year: "2023", category: "Award", title: "Received the Junior Excellence in Teaching Award from the University of Missouri College of Engineering.", url: "https://engineering.missouri.edu/2023/faculty-staff-students-recognized-for-outstanding-contributions-performance/" },
  { date: "February 2023", year: "2023", category: "Grant", title: "NSF REU award received for prescriptive analytics in AI-enabled operations engineering.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2243589" },
  { date: "December 2022", year: "2022", category: "Publication", title: "Passenger-intelligence text-analytics research accepted in Annals of Operations Research.", url: "https://link.springer.com/article/10.1007/s10479-022-05162-9" },
  { date: "December 2022", year: "2022", category: "Publication", title: "Adaptive-clothing customer-review research accepted in International Journal of Consumer Studies.", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ijcs.12895" },
  { date: "December 2022", year: "2022", category: "Publication", title: "Explainable cardiovascular-risk modeling research accepted in Scientific Reports.", url: "https://www.nature.com/articles/s41598-022-25933-5" },
  { date: "October 2022", year: "2022", category: "Award", title: "Received the Outstanding IMSE Faculty Award for research, teaching, and service.", url: "https://engineering.missouri.edu/2022/eleven-inducted-into-industrial-and-manufacturing-systems-hall-of-fame/" },
  { date: "September 2022", year: "2022", category: "Publication", title: "Collaborative picker–robot order-picking research accepted in International Journal of Production Economics.", url: "https://www.sciencedirect.com/science/article/abs/pii/S092552732200216X" },
  { date: "August 2022", year: "2022", category: "Grant", title: "NSF I-Corps award received for cloud-based route optimization for aerial and road logistics.", url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2240977" },
  { date: "July 2022", year: "2022", category: "Publication", title: "Review of autonomous robot-driven deliveries accepted in Transportation Research Part E.", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554522002150" },
  { date: "June 2022", year: "2022", category: "Publication", title: "Collaborative truck multi-drone routing research accepted in Transportation Research Part E.", url: "https://www.sciencedirect.com/science/article/abs/pii/S1366554522001776" },
  {"date":"May 2022","year":"2022","category":"Student","title":"PhD student Mohamed Salama completed his doctoral degree."},
  {"date":"May 2022","year":"2022","category":"Student","title":"PhD student Haya Salah completed her doctoral degree."},
  { date: "December 2021", year: "2021", category: "Recognition", title: "Research featured among the MU College of Engineering's Top 10 Stories of 2021.", url: "https://engineering.missouri.edu/2021/robots-plastics-and-cows-top-10-research-stories-of-2021/" },
  { date: "September 2021", year: "2021", category: "Grant", title: "Boeing grant awarded for CELDi – Optimal Supplier Collaboration; Co-Principal Investigator." },
  { date: "August 2021", year: "2021", category: "Grant", title: "Missouri Department of Higher Education and Workforce Development grant awarded; listed as Principal Investigator." },
  { date: "May 2021", year: "2021", category: "Appointment", title: "Appointed Academic Editor for the Journal of Healthcare Engineering." },
  { date: "March 2021", year: "2021", category: "Appointment", title: "Appointed Core Faculty at the MU Institute of Data Science and Informatics.", url: "https://muidsi.missouri.edu/person/sharan-srinivas/" },
  { date: "February 2021", year: "2021", category: "Publication", title: "Air-taxi demand-prediction research accepted in Journal of Air Transport Management.", url: "https://doi.org/10.1016/j.jairtraman.2021.102043" },
  { date: "November 2020", year: "2020", category: "Recognition", title: "Named Best Paper Finalist in the INFORMS Data Mining and Decision Analytics Competition.", url: "https://www.informs.org/Recognizing-Excellence/Award-Recipients/Sharan-Srinivas" },
  { date: "September 2020", year: "2020", category: "Publication", title: "Critical review of air-taxi service for urban mobility accepted in Transportation Research Part E.", url: "https://doi.org/10.1016/j.tre.2020.102090" },
  { date: "August 2020", year: "2020", category: "Publication", title: "Emergency-department process-reengineering research accepted in Simulation." },
  { date: "July 2020", year: "2020", category: "Grant", title: "Roche Molecular Systems grant awarded with Richard Hammer and Suchithra Rajendran." },
  { date: "May 2020", year: "2020", category: "Leadership", title: "Elected Director of the IISE Operations Research Division.", url: "https://www.iise.org/Details.aspx?id=1132#or" },
];

export const currentStudents = [
  ["Soham Basu", "MS and PhD"], ["Pyam Oveys", "PhD"], ["Paul Antonacci", "PhD"],
  ["Negar Jahanbakhsh Javid", "PhD"], ["Mahima Naznin", "PhD"], ["Arash Alizadeh", "PhD"],
  ["Arghadeep Mitra", "MS and PhD"], ["Celiker Busra", "PhD"], ["Fatemeh Pourdehghan", "PhD"],
  ["Ali Fallah", "MS"], ["Matt Floyd", "MS"],
] as const;

export const alumni = [
  ["Fatemeh Pourdehghan", "MS · Spring 2025"], ["Mahima Naznin", "MS · Spring 2025"],
  ["Arash Alizadeh", "MS · Fall 2024"], ["Parth Jahagirdar", "MS · Summer 2024"],
  ["Sai Kiran Singraj", "MS · Summer 2024"], ["Ray Wood", "MS · Spring 2024"],
  ["Shitao Yu", "PhD · Summer 2023"], ["Mohamed Salama", "PhD · Spring 2022"],
  ["Haya Salah", "PhD · Spring 2022"], ["Dustin Smith", "MS · Spring 2019"],
  ["Alexander Jackson", "MS · Spring 2019"],
] as const;

export const mentoredResearchers = [
  ["Garrett Robison", "PhD ISE · US Army project GRA · 2023–2025"],
  ["Michael Geisecke", "PhD ISE · US Army project GRA · 2023–2025"],
  ["Nima Golghamat Raad", "PhD ISE · AKDOT project GRA · 2023–2024"],
  ["Chandra Bhamidipati", "MS EECS · NSF PFI project GRA · 2024"],
  ["Zack Murray", "BS EECS · NSF REU Supplement · 2024"],
  ["Hemanth Sai Yeddulapalli", "MS EECS · AKDOT project GRA · 2024"],
  ["Alicia Esquivel Morel", "PhD EECS · NSF PFI project GRA · 2024"],
] as const;

export const undergraduateMentees = [
  "Luke Richey · status to be confirmed", "Thomas Willerth · IE honors · status to be confirmed",
  "Stephen Swingle · IE honors · status to be confirmed", "Matt Floyd · IE · 2024",
  "Marc Rosner · Marketing · 2024", "Sienna Schreiber · IE · 2023", "Erik Starrenburg · IE · 2023",
  "Mikey Joyce · EECS · 2022", "Emily Pagel · IE · 2020", "Trenton Grimshaw · IE · 2020",
  "Grace Floyd · IE · 2020", "Jacob Beeth · IE · 2020", "John Tocco · IE · 2019",
  "Alex Stone · IE · 2019", "Dustin Smith · IE · 2018", "Joshua Zack · IE · 2018",
  "Abdulah Sibalo · Economics · 2018",
];

export const cohorts = [
  { label: "NSF REU · 2024", people: ["Neel Shah", "Matt Lamborne", "Joseph Couzens", "John Maxwell", "Ayhum Asfour", "Emily Pham", "Jakob Fick", "Johann Zhang", "Vishnu Arun"] },
  { label: "NSF REU · 2023", people: ["Ben McIntire", "Abdullahi Ayantayo", "Dylan Nojadera", "Brianna Abam", "Lilyan Groat", "Brian Yang", "Emma Lewis", "Daniel Grenier", "Carson Swain", "Aditya Khowal", "Zachary Bazile"] },
  { label: "NSF IRES · 2024", people: ["Ben McIntire", "Siddarth Tummala", "Ryan Brophy", "Abhinav Sairam", "Snowbird Rubio", "Faisal Shaikh", "Rishi Jain"] },
  { label: "NSF IRES · 2023", people: ["Charan Govarthanaraj", "Vishnu Arun", "Prashish Lamsal", "Nikhil Vyas"] },
];

export const courses = [
  { code: "MRKTNG 4910/7910", title: "Data Analytics and Machine Learning for Business", unit: "Marketing / Business", terms: "Spring 2018, Spring 2019, Spring 2020, Fall 2020", summary: "Supervised and unsupervised learning, data preparation, model interpretation, and business applications.", tools: "Excel · Weka" },
  { code: "MRKTNG 8810", title: "Python for Marketing Analytics", unit: "Marketing / Business", terms: "Spring 2020, Spring 2021", summary: "Python-based data cleaning, visualization, predictive modeling, clustering, association analysis, and text mining.", tools: "Python · Jupyter Notebook" },
  { code: "ACCTCY 8401 / MRKTNG 8001", title: "Analytics for Supply Chain Management", unit: "Accounting / Marketing", terms: "Fall 2020", summary: "Operations-research models, cases, and management games for supply-chain design, control, and operations.", tools: "Excel" },
  { code: "IMSE 4410/7410", title: "Data Engineering and Predictive Modeling", unit: "Industrial and Manufacturing Systems Engineering", terms: "Fall 2018, Fall 2019, Fall 2020", summary: "Data preparation, feature engineering, visualization, predictive modeling, unsupervised learning, and association analysis.", tools: "Excel · R" },
  { code: "IMSE 4370/7370", title: "Service Systems Engineering and Management", unit: "Industrial and Manufacturing Systems Engineering", terms: "Fall 2017, Spring 2020", summary: "Quantitative service-system design and management across transportation, healthcare, retail, hospitality, and sourcing.", tools: "Excel · Python" },
  { code: "IMSE 4280/7280", title: "Systems Simulation", unit: "Industrial and Manufacturing Systems Engineering", terms: "Fall 2018, Fall 2019", summary: "Discrete-event modeling, experimental design, statistical testing, alternatives comparison, and output analysis.", tools: "Excel · Simio · Minitab · IBM SPSS" },
];

export const leadershipRoles = [
  ["Immediate Past President", "IISE Operations Research Division · 2024–2025"],
  ["President", "IISE Operations Research Division · 2023–2024"],
  ["President-Elect", "IISE Operations Research Division · 2022–2023"],
  ["Director", "IISE Operations Research Division · 2020–2022"],
  ["Lead Track Chair", "Operations Research Track, IISE Annual Conference · 2022"],
  ["Co-Chair and Co-organizer", "Operations Research Track, IISE Annual Conference · 2021"],
  ["Competition Judge", "IISE OR Division Undergraduate Student Paper Competition · 2020"],
] as const;

export const editorialRoles = [
  ["Editorial Board Member", "Scientific Reports · appointed April 2025"],
  ["Editorial Board Member", "BMC Medical Informatics and Decision Making · appointed July 2024"],
  ["Editorial Board Member", "Transportation Research Part E · appointed February 2024"],
  ["Topic Editor", "Sustainability · dates to be confirmed"],
  ["Academic Editor", "Journal of Healthcare Engineering · appointed May 2021; current status to be confirmed"],
] as const;

export const awards = [
  ["2024", "Outstanding Professor in Industrial and Systems Engineering · graduating seniors"],
  ["2024", "Outstanding ISE Faculty Award · research, teaching, and service"],
  ["2023", "Outstanding Professor in Industrial and Systems Engineering · graduating seniors"],
  ["2023", "Junior Excellence in Teaching Award · University of Missouri College of Engineering"],
  ["2022", "Outstanding IMSE Faculty Award · research, teaching, and service"],
  ["2021", "Research featured among the MU College of Engineering's Top 10 Stories"],
  ["2020", "INFORMS Data Mining and Decision Analytics Competition · Best Paper Finalist"],
] as const;
