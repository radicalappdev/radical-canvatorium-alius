# Radical Canvatorium Alius

This is the codebase for the React-Three-Fiber version of the Radical Canvatorium.

- Labs are used to explore concepts for Spatial Computing, VR, AR, WebXR, etc. Labs will nearly always be intended to be viewed in VR or AR
- Benches are used to explore simple 3D concepts that may be used in the labs. Benches will not have VR or AR support.

Labs and benches are numbered by the 3D Framework they use.

| Lab Numbers | 3D Framework      |
| ----------- | ----------------- |
| 0000 – 0999 | Babylon JS        |
| 1000 – 1999 | Three JS          |
| 2000 – 2999 | React-Three-Fiber |
| 3000 – 3999 | A-Frame           |
| 4000 – 4999 | PlayCanvas        |

- Learn more about Canvatorium [here](https://vrhermit.com/canvatorium/)
- The main Canvatorium repo is [here](https://github.com/radicalappdev/radical-canvatorium)

## Local development

I created this project with Vite, but I reconfigured it to use some self-signed certs for local development.

1. Install mkcert

2. Use mkcert to create the certs at the project root

```
mkcert -key-file key.pem -cert-file cert.pem "localhost"
```

3. Create a folder named certs and move the key.pem and cert.pem files into it

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You should see the IP and port that the server is running on listed in the console.
