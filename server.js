const path = require('path');
const express = require('express');

const app = express();
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  next();
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(
  express.static(PUBLIC_DIR, {
    extensions: ['html'],
    setHeaders(res, filePath) {
      res.setHeader(
        'Cache-Control',
        filePath.endsWith('.html') ? 'no-cache' : 'public, max-age=86400'
      );
    },
  })
);

app.use((req, res) => {
  res.status(404).type('text').send('404 — Page not found');
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
}

module.exports = app;
