import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import contactHandler from '../api/contact.js';
import bridgeHandler from '../api/bridge.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const envLocalPath = path.join(projectRoot, '.env.local');
const port = Number(process.env.LOCAL_API_PORT || 3001);

const loadEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');

  for (const line of fileContents.split(/\r?\n/)) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    let value = trimmedLine.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

loadEnvFile(envLocalPath);

const handlers = {
  '/api/contact': contactHandler,
  '/api/bridge': bridgeHandler,
};

const createResponseAdapter = (res) => {
  let statusCode = 200;
  const headers = {};

  return {
    setHeader(name, value) {
      headers[name] = value;
    },
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      const responseBody = JSON.stringify(payload);
      res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        ...headers,
      });
      res.end(responseBody);
    },
  };
};

const server = http.createServer(async (req, res) => {
  const handler = handlers[req.url];

  if (!handler) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found.' }));
    return;
  }

  const bodyChunks = [];

  req.on('data', (chunk) => {
    bodyChunks.push(chunk);
  });

  req.on('end', async () => {
    const rawBody = Buffer.concat(bodyChunks).toString('utf8');
    const adaptedReq = {
      method: req.method,
      body: rawBody,
      headers: req.headers,
    };
    const adaptedRes = createResponseAdapter(res);

    try {
      await handler(adaptedReq, adaptedRes);
    } catch (error) {
      console.error('Local API server error:', error);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Local server error.' }));
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Local API server running on http://localhost:${port}`);
});
