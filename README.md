# Viren Wankhade — Portfolio

A small Node.js (Express) app that serves the portfolio site.

## Structure

```
viren-portfolio/
├── public/
│   └── index.html     # the whole site (HTML, CSS, JS)
├── server.js          # Express server
├── package.json
└── vercel.json        # Vercel deployment config
```

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm run dev        # auto-restart on changes (Node 18.11+)
```

Set a different port with `PORT=4000 npm start`.

## Add your resume

Drop `resume.pdf` into `public/` and it will be served at `/resume.pdf`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel (no build command needed; `vercel.json` handles it).
3. Deploy. Or from the terminal: `npx vercel --prod`.

Any Node host (Render, Railway, Fly.io) also works: build command `npm install`, start command `npm start`.
