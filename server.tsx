import http from 'http';
import express, { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchPath } from 'react-router-dom';
import App from './src/pages/index';

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

app.get('*', (req: Request, res: Response) => {
  const match = matchPath(req.url ?? '/', '/');

  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  if (match) {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>BountyApp</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="./styles/tailwind.css" rel="stylesheet">
        </head>
        <body>
          <div id="root">${markup}</div>
          <script src="./dist/bundle.js" defer></script>
        </body>
      </html>
    `);
  } else {
    res.redirect('/');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
