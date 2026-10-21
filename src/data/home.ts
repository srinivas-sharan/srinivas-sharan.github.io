import records from "../../docs/content-2026/cv-records.json";
import type { NewsItem } from "./content";
import { researchAreas, currentProjects } from "./research";

// Build-time allowlist: never serialize the source dataset into client-side code.
export const identity = {...records.identity,intro:"My research integrates operations research, simulation, and AI for complex operational decisions. Current applications span logistics and mobility, human-robot operations, and intelligent production and service systems."};
export const metrics = records.metrics.filter(metric => metric.showOnHome);
export const citationSnapshot = records.metrics.find(metric => metric.id === "citations")!;
export const snapshotDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(records.asOf));
export const snapshotMonth = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(records.asOf));
export const methods = records.methods;
export const areas = researchAreas;
export const featuredProjects = currentProjects.map(project=>({id:project.id,title:project.title,sponsor:project.sponsor,period:project.dates,role:project.role,area:researchAreas.find(a=>a.id===project.primaryAreaId)!.title}));
export const currentResearchers = records.people.filter(person =>
  person.relationships.some(relationship => relationship.type === "current-advisee")
).map(person => ({
  name: person.name,
  degree: person.relationships.find(relationship => relationship.type === "current-advisee")!.degree.join(" & "),
}));
export const daisAchievement = records.newsCandidates.find(item => item.id === "news-2026-dais")!.title;
export const recentNews: NewsItem[] = ["news-2026-dais", "news-2026-asee", "news-2026-teaching"].map(id => {
  const item = records.newsCandidates.find(candidate => candidate.id === id)!;
  return { date: "", year: item.date, category: "Award", title: id === "news-2026-asee" ? `${item.title} · ASEE` : id === "news-2026-teaching" ? "Outstanding Senior Faculty Teaching Award · University of Missouri" : item.title };
});
export const projectScope: Record<string, string> = {
  "project-12": "Route management for last-mile logistics using electric trucks and drones.",
  "project-02": "Predictive and decision analytics for steel procurement under price uncertainty.",
  "project-01": "Simulation and optimization of freight routes, fleets, and infrastructure to improve Anchorage’s network reliability, safety, and resilience.",
  "project-03": "International research experiences focused on optimizing human–mobile robot collaboration in manufacturing and service systems.",
  "project-04": "Route management for last-mile logistics using electric trucks and drones.",
  "project-05": "Integrating large language models into steel-market analytics and decision-making.",
};
export const areaScope: Record<string, string> = Object.fromEntries(researchAreas.map(area=>[area.id,area.summary]));
