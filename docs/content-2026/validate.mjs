import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const raw = readFileSync(new URL('./cv-records.json', import.meta.url), 'utf8');
const data = JSON.parse(raw);
const unique = (rows) => assert.equal(new Set(rows.map(r => r.id)).size, rows.length);
for (const key of ['journals', 'books', 'projects', 'people', 'newsCandidates', 'metrics', 'researchAreas']) unique(data[key]);
assert.equal(data.journals.length, 50);
assert.equal(data.books.filter(b => b.type === 'edited-book').length, 1);
assert.equal(data.books.filter(b => b.type === 'book-chapter').length, 4);
assert.equal(data.projects.length, 23);
assert.equal(data.people.length, 23);
const relationships = data.people.flatMap(p => p.relationships);
assert.equal(relationships.filter(r => r.type === 'current-advisee').length, 12);
assert.equal(relationships.filter(r => r.type === 'completed-degree' && r.degree.includes('PhD')).length, 5);
assert.equal(relationships.filter(r => r.type === 'completed-degree' && r.degree.includes('MS')).length, 10);
assert.equal(data.teaching.length, 11);
assert.equal(data.cohorts.length, 6);
assert.equal(data.newsCandidates.length, 15);
assert.equal(data.researchAreas.length, 4);
assert(data.researchAreas.every(a => a.active));
assert(data.metrics.filter(m => m.showOnHome).length <= 5);
assert.equal(data.metrics.filter(m => m.showOnHome).length, 4);
assert.equal(data.metrics.find(m => m.id === 'external-funding').value, '$4M+');
assert.equal(data.metrics.find(m => m.id === 'citations').value, '3,000+');
assert.equal(data.projects.filter(p => p.featuredOnProjectsPage).length, 7);
assert.equal(data.projects.filter(p => p.status === 'active-by-listed-award-period').length, 7);
assert.equal(data.projects.filter(p => p.status === 'listed-award-period-ended').length, 15);
assert.equal(data.projects.filter(p => p.status === 'dates-unknown').length, 1);
const areas = new Set(data.researchAreas.map(a => a.id));
for (const record of [...data.projects, ...data.journals]) {
  for (const id of record.areaIds) assert(areas.has(id), 'Unknown area: ' + id);
}
for (const paper of data.journals) {
  assert(paper.title && paper.venue && paper.citation && paper.authors);
  assert(Number.isInteger(paper.year));
}
for (const project of data.projects) {
  assert(project.title && project.displayTitle && project.sponsor && project.role);
  assert.equal(project.funding.showAmount, false);
  assert.equal(project.funding.amount, null);
  for (const id of project.relatedPublicationIds) assert(data.journals.some(p => p.id === id));
}
for (const item of data.newsCandidates) {
  if (item.projectId) assert(data.projects.some(p => p.id === item.projectId));
  if (item.publicationId) assert(data.journals.some(p => p.id === item.publicationId));
}
assert.equal(data.identity.cvDirectUrl, null);
assert.equal(data.sourcePolicy.privateSourceIncluded, false);
assert(!/573.?882.?7409|E3437|65211|My Share|SBIR\/STTR|CV_SharanSrinivas\.docx/i.test(raw), 'Private source field found');
assert(data.teaching.every(c => !('evaluation' in c) && !('score' in c)));
console.log('Validated content: 50 journals, 23 projects (7 featured candidates), 12 current graduate advisees, 15 completed-degree relationships, 11 courses, 15 news candidates, 4 homepage metrics. Privacy and reference checks passed.');
