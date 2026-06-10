import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const page = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Express App on Azure</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, "Segoe UI", "Microsoft JhengHei", sans-serif;
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #0078d4 0%, #5c2d91 100%); color: #fff;
    }
    main { text-align: center; padding: 2rem; }
    h1 { font-size: 2.6rem; margin-bottom: 1rem; }
    p { font-size: 1.15rem; margin: 0.4rem 0; opacity: 0.95; }
    .by { margin-top: 1.5rem; font-size: 0.9rem; opacity: 0.7; }
  </style>
</head>
<body>
  <main>
    <h1>🚀 Hello from Azure!</h1>
    <p>這個 Express 網站已成功部署到 Azure App Service。</p>
    <p class="by">Deployed via GitHub Actions</p>
  </main>
</body>
</html>`;

app.get('/', (req, res) => res.send(page));
app.get('/users', (req, res) => res.send('respond with a resource'));

app.listen(port, () => console.log(`Listening on port ${port}`));
