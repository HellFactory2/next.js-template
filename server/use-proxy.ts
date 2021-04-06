import { FastifyInstance } from 'fastify';
import proxy from 'fastify-http-proxy';

const rules = [
  {
    upstream: '',
    prefix: '/api',
    rewritePrefix: '',
    http2: false,
  },
];

export default function (server: FastifyInstance) {
  for (const rule of rules) {
    if (!rule.upstream) continue;
    server.register(proxy, rule);
  }
}
