const fs = require("fs");
const os = require("os");
const path = require("path");
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const certsPath = path.resolve(__dirname, "certs");
const keyFilePath = path.join(certsPath, "key.pem");
const certFilePath = path.join(certsPath, "cert.pem");

const options = {
  key: fs.readFileSync(keyFilePath),
  cert: fs.readFileSync(certFilePath)
};

// Determine local IPv4 address
const networkInterfaces = os.networkInterfaces();
const localIPv4 = Object.values(networkInterfaces)
  .flatMap((interfaceArray) => interfaceArray)
  .find((interface) => interface.family === "IPv4" && !interface.internal).address;

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://${localIPv4}:3000`);
  });
});
