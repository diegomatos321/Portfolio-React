const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require('stream')
const path = require("path")
const fs = require("fs")

const routes = require('./routes.js');
const hostname = 'https://devdiegomatos.com.br';
const output = path.resolve("./public", "sitemap.xml")

const stream = new SitemapStream({
    hostname
});

streamToPromise(Readable.from(routes).pipe(stream)).then((sitemap) =>
    fs.writeFileSync(output, sitemap.toString())
)