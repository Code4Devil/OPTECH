/**
 * Utility functions for generating a sitemap dynamically
 */

// Base URL of your website
const BASE_URL = 'https://optrya.in';

// Main routes from your application
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/career', priority: 0.6, changefreq: 'monthly' },
  { path: '/consultation', priority: 0.8, changefreq: 'monthly' },
  { path: '/testimonials', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/get-started', priority: 0.9, changefreq: 'monthly' },
];

/**
 * Generate XML sitemap content
 * @returns {string} XML sitemap content
 */
export function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

/**
 * Add dynamic routes to the sitemap
 * @param {Array} dynamicRoutes - Array of dynamic route objects with path, priority, and changefreq
 */
export function addDynamicRoutes(dynamicRoutes) {
  dynamicRoutes.forEach(route => {
    if (!routes.some(r => r.path === route.path)) {
      routes.push(route);
    }
  });
}

export default {
  generateSitemap,
  addDynamicRoutes,
};
