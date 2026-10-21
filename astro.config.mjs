import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://srinivas-sharan.github.io",
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/research/areas/intelligent-production-service-systems/": "/research/areas/#service-healthcare",
    "/research/areas/service-systems-engineering-management/": "/research/areas/intelligent-production-service-systems/",
    "/research/areas/service-healthcare/": "/research/areas/intelligent-production-service-systems/",
    "/portfolio/": "/research/",
    "/portfolio/portfolio-0/": "/research/",
    "/portfolio/portfolio-1/": "/research/areas/#service-healthcare",
    "/portfolio/portfolio-2/": "/research/areas/#service-healthcare",
    "/portfolio/portfolio-3/": "/research/areas/#service-healthcare",
    "/portfolio/portfolio-4/": "/research/areas/#logistics",
    "/publications/": "/research/publications/",
    "/markdown/": "/leadership-service/",
    "/md/": "/leadership-service/",
    "/teaching/": "/teaching-education/",
    "/resume": "/cv/",
    "/year-archive/": "/news/",
    "/talks/": "/leadership-service/",
  },
});
