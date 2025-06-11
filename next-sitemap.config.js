/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kimskage.com/', // Replace with your actual site URL
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: '',
  priority: 0.7,
  trailingSlash: true,
  exclude: [],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
