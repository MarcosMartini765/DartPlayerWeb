import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { RESPONSE } from '@nguniversal/express-engine/tokens';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/dartplayer-web/browser');

  const locales = ["pt-BR", "en-US"];

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    const preferredLanguage = Intl.DateTimeFormat().resolvedOptions().locale;

    let locale = "pt-BR"

    if (preferredLanguage.includes("pt")) {
      locale = "pt-BR"
    } else {
      locale = "en-US"
    }

    res.render(`${locale}/index.html`, {
      req, providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: RESPONSE, useValue: (res) }
      ]
    });
  });

  locales.forEach((locale) => {
    const indexHtml = `${locale}/index.html`
    server.get(`/${locale}`, (req, res) => {
      res.render(indexHtml, {
        req, providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl },
          { provide: RESPONSE, useValue: (res) }
        ]
      });
    });
  })

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
