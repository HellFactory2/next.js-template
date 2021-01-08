import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { Express } from 'express';

interface UseProxyConfig {
  [path: string]: Options;
}

const config: UseProxyConfig = {
  '/api': {
    target: process.env.API_URL || '',
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
  },
};

export default function (server: Express) {
  for (const path of Object.keys(config)) {
    if (!config[path].target) continue;
    const proxy = createProxyMiddleware(path, config[path]);
    server.use(path, proxy);
  }
}
