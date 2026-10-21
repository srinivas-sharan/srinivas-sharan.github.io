// Canonical methodology taxonomy. Relationships are curated, not inferred at runtime.
// Emerging methods require substantive AI/learning integration with an OR decision model,
// or quantum/QUBO/hybrid methods; standalone ML, LLMs, or adjacent AI and OR do not qualify.
export const technicalCapabilities = [
 {id:'optimization',cue:'Optimization',title:'Optimization & Decision Intelligence',methods:['MILP','Stochastic & Robust Optimization','Multi-Objective Optimization','Decomposition & Relaxation','Matheuristics']},
 {id:'algorithms',cue:'Algorithms',title:'Learning-Augmented & Adaptive Algorithms',methods:['Learning-Guided Search','Adaptive Metaheuristics','Surrogate-Assisted Optimization','Hybrid Exact-Heuristic Methods','Learning-Augmented Optimization']},
 {id:'ai',cue:'AI',title:'AI, Analytics & Explainable Decisions',methods:['Machine Learning','Explainable AI','Forecasting','GenAI & Text Analytics','Explainable Optimization','Interpretable Decision Models']},
 {id:'simulation',cue:'Simulation',title:'Simulation & Digital Decision Support',methods:['Discrete-Event Simulation','Scenario Analysis','Computational Experimentation','Digital Decision-Support Platforms']},
 {id:'autonomy',cue:'Autonomy',title:'Autonomous & Multi-Agent Decision Systems',methods:['Multi-Agent Coordination','Human-Robot Systems','Dynamic Assignment','Reinforcement Learning','Autonomous Decision-Making']},
 {id:'emerging',cue:'Emerging',title:'Emerging Computational Methods',methods:['AI–OR Integration','Learning-Augmented Optimization','Quantum-Assisted Optimization','Hybrid Quantum-Classical Methods','QUBO Formulations']},
];
export const capabilityName=(id:string)=>technicalCapabilities.find(c=>c.id===id)?.title??id;
export const areaCapabilities:Record<string,string[]>={
 logistics:['optimization','algorithms','ai','simulation'],
 aviation:['optimization','algorithms','ai','simulation','autonomy'],
 autonomy:['optimization','algorithms','simulation','autonomy'],
 'service-healthcare':['optimization','ai','simulation'],
};
// User-specified relationships plus explicit methods in existing project descriptions.
export const projectCapabilities:Record<string,string[]>={
 '01':['optimization','simulation'],'02':['ai','simulation'],'03':['optimization','algorithms','autonomy','simulation','emerging'],
 '04':['optimization','algorithms','autonomy','emerging'],'05':['ai'],'06':['optimization','algorithms','autonomy'],
 '07':['optimization','autonomy'],'09':['optimization','algorithms','autonomy'],'10':['ai','simulation'],'11':['ai','optimization','simulation'],
 '12':['optimization','algorithms','autonomy','emerging'],'13':['optimization','simulation','ai'],
 '14':['optimization','ai','algorithms','emerging'],'15':['optimization','ai','simulation','emerging'],'16':['optimization','simulation'],'17':['optimization','ai','simulation'],
 '20':['ai'],'18':['ai','simulation'],'19':['optimization','simulation'],'21':['optimization','ai'],'23':['ai','optimization','emerging'],
};
export const researcherCapabilities:Record<string,string[]>={
 'negar-jahanbakhsh-javid':['optimization','algorithms'],'pyam-oveys':['ai','simulation'],'mahima-naznin':['ai'],
 'yusuf-salik':['ai','autonomy'],'soham-basu':['optimization','algorithms','autonomy','emerging'],
 'celiker-busra':['optimization','algorithms'],'fatemeh-pourdehghan':['optimization','algorithms'],
 'arghadeep-mitra':['optimization','ai','autonomy'],'shitao-yu':['optimization','autonomy'],
 'mohamed-salama':['optimization'],'haya-salah':['ai','optimization'],
 'dustin-smith':['simulation'],'arash-alizadeh':['optimization'],
};
