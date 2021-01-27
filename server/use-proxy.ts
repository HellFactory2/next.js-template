import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { Express } from 'express';

const { API_URL, API_URLs } = process.env;

interface UseProxyConfig {
  [path: string]: Options;
}

const config: UseProxyConfig = {
  '/api': {
    target: API_URL || '',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
};

if (API_URLs) {
  const urls = JSON.parse(API_URLs || '');
  for (const path of Object.keys(urls)) {
    const target = urls[path];
    config[path] = {
      target,
      pathRewrite: { [`^${path}`]: '' },
      changeOrigin: true,
    };
  }
}

export default function (server: Express) {
  for (const path of Object.keys(config)) {
    if (!config[path].target) continue;
    const proxy = createProxyMiddleware(path, config[path]);
    server.use(path, proxy);
  }
}
