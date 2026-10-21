import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const html = readFileSync(new URL("../dist/index.html", import.meta.url), "utf8");
const data = JSON.parse(readFileSync(new URL("./content-2026/cv-records.json", import.meta.url), "utf8"));
const decode = value => value.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
assert(html.includes('My research integrates operations research, simulation, and AI for complex operational decisions.'));
assert(decode(html).includes(data.identity.proposition));
assert.equal((html.match(/class="impact-metric(?: impact-metric--mentoring)?"/g) || []).length, 4);
for (const metric of data.metrics) assert(html.includes(metric.value));
assert.equal((html.match(/class="home-project-card"/g) || []).length, 4);
assert.equal((html.match(/class="home-area-card"/g) || []).length, 4);
assert(!/public link pending/i.test(html));
assert(!html.includes("Mentoring categories may overlap."));
assert(!/Updated September|CV snapshot/.test(html));
assert(html.includes('View research opportunities'));
assert(html.includes('Selected Recognition'));
assert.equal((html.match(/class="home-service-summary"/g) || []).length, 1);
assert(!html.includes('href="/cv/"'));
assert(!/My Share|CV_SharanSrinivas\.docx|573.?882.?7409|E3437/.test(html));
for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
  const url = new URL(decode(match[1]), "http://local/");
  const path = url.pathname.endsWith("/") ? url.pathname + "index.html" : url.pathname;
  assert(existsSync(new URL("../dist" + path, import.meta.url)), "Missing built target: " + path);
}
const group = readFileSync(new URL("../dist/research/group/index.html", import.meta.url), "utf8");
assert(decode(group).includes(data.identity.groupName));
assert(group.includes("James Noble") && group.includes("First place"));
assert.equal((group.match(/data-researcher data-degrees=/g) || []).length, 15);
for (const [route, target] of [["people", "/research/group/"], ["research-group", "/research/group/"], ["about", "/#profile"], ["cv", "/#cv-access"]]) {
  const page = readFileSync(new URL("../dist/" + route + "/index.html", import.meta.url), "utf8");
  assert(page.includes(target), "Missing legacy redirect " + route);
}
console.log("Homepage production checks passed: copy, four metrics/areas/projects, recruitment, local links/assets, privacy defaults, roster and redirects.");
