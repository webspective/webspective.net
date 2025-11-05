import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://webspective.net";

const routes = ["/", "/contact", "/plans", "/services"];

const generateSitemap = async () => {
	const sitemap = new SitemapStream({ hostname: SITE_URL });
	const distPath = path.resolve(__dirname, "../dist", "sitemap.xml"); // adjust if your script is in src/
	const writeStream = createWriteStream(distPath);

	// Pipe sitemap to the file
	sitemap.pipe(writeStream);

	// Write routes
	routes.forEach((url) => {
		const now = new Date();
		if (url == "/") {
			sitemap.write({
				url,
				lastmod: now,
				changefreq: "weekly",
				priority: 1.0,
			});
		} else {
			sitemap.write({
				url,
				lastmod: now,
				changefreq: "weekly",
				priority: 0.8,
			});
		}
	});

	sitemap.end();

	// Wait until the stream finishes
	await new Promise((resolve, reject) => {
		writeStream.on("finish", resolve);
		writeStream.on("error", reject);
	});

	console.log(`Sitemap generated at ${distPath}`);
};

generateSitemap();

// Path to _redirects in dist
const redirectsPath = path.resolve(__dirname, "../dist/_redirects"); // adjust if your script is in src/

// SPA redirect content
const redirectsContent = `/* /index.html 200
`;

// Write the file
fs.writeFileSync(redirectsPath, redirectsContent, "utf8");

console.log(`_redirects file created at ${redirectsPath}`);

const robotsPath = path.resolve(__dirname, "../dist/robots.txt");

const robotsContent = `User-agent: *
Disallow:

Sitemap: https://webspective.net/sitemap.xml
`;

fs.writeFileSync(robotsPath, robotsContent, "utf8");

console.log(`robots.txt generated at ${robotsPath}`);
