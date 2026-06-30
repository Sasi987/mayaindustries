const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// ------------------------------------------------------------
// Sitemap generator for the React website
// ------------------------------------------------------------
// This script creates a production-ready sitemap.xml file in the
// public folder so search engines can discover important pages.
// ------------------------------------------------------------

const siteUrl = process.env.SITE_URL || 'https://mayaindustriess.com';
const today = new Date().toISOString().slice(0, 10);

const pages = [
  // Single-page homepage only: all sections are on the same page
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: today },
];

(async () => {
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  const sitemapStream = new SitemapStream({ hostname: siteUrl });

  pages.forEach((page) => {
    sitemapStream.write({
      url: page.url,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: page.lastmod,
    });
  });

  sitemapStream.end();

  const sitemapXml = await streamToPromise(sitemapStream);
  fs.writeFileSync(outputPath, sitemapXml.toString(), 'utf8');

  console.log(`Sitemap generated successfully at ${outputPath}`);
})();
