import fs from 'fs';
import path from 'path';

const productsPath = path.resolve('src/data/products.ts');
const sitemapPath = path.resolve('public/sitemap.xml');

try {
  const content = fs.readFileSync(productsPath, 'utf8');

  // Match: slug: 'fireglow-mandala-keychain' or slug: "..."
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }

  // Deduplicate
  const uniqueSlugs = [...new Set(slugs)];
  console.log(`Found ${uniqueSlugs.length} product slugs in products.ts.`);

  const baseUrl = 'https://themandalablend.in';
  const today = new Date().toISOString().split('T')[0];

  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/collections`, priority: '0.9', changefreq: 'daily' },
    { loc: `${baseUrl}/gallery`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/about`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
  ];

  uniqueSlugs.forEach((slug) => {
    urls.push({
      loc: `${baseUrl}/collections/${slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    });
  });

  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  urls.forEach((url) => {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${url.loc}</loc>`);
    xmlLines.push(`    <lastmod>${today}</lastmod>`);
    xmlLines.push(`    <changefreq>${url.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${url.priority}</priority>`);
    xmlLines.push('  </url>');
  });

  xmlLines.push('</urlset>');

  fs.writeFileSync(sitemapPath, xmlLines.join('\n'), 'utf8');
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
} catch (err) {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
}
