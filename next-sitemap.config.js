/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://coretz.kk-web.link/",
  generateRobotsTxt: true,
};

module.exports = config;
