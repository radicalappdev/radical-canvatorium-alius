const fs = require("fs");
const path = require("path");
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const certsPath = path.resolve(__dirname, "certs"); // Path to your certificates folder
const keyFilePath = path.join(certsPath, "key.pem");
const certFilePath = path.join(certsPath, "cert.pem");

const options = {
  key: fs.readFileSync(keyFilePath),
  cert: fs.readFileSync(certFilePath)
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://192.168.1.12:3000`);
  });
});
