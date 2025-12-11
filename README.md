
  # Access Project Link

  This is a code bundle for Access Project Link. The original project is available at https://www.figma.com/design/0Sp72xDIh3yCcxwwUCzTdJ/Access-Project-Link.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Viewing and sharing

- Do not open `index.html` directly with `file://`; it will not load the app because Vite must resolve modules and bundle the TSX.  
- For local viewing:  
  1. `npm install`  
  2. `npm run dev -- --host --port 5173`  
  3. Open `http://localhost:5173` in the browser.  
- For a preview build:  
  1. `npm run build`  
  2. `npx vite preview --host --port 4173`  
  3. Open `http://localhost:4173`.  
- For sharing with others: deploy the `dist` output (e.g., Vercel/Netlify/Cloudflare Pages/GitHub Pages/S3+CloudFront). Most hosts can build from the repo automatically, then you share the deployed URL.
  