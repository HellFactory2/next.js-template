import { FastifyInstance } from 'fastify';
import proxy from 'fastify-http-proxy';

const rules = [
  {
    upstream: 'https://invez.ai/api',
    prefix: '/api',
    rewritePrefix: '',
    http2: false,
  },
];

export default function (server: FastifyInstance) {
  for (const rule of rules) {
    server.register(proxy, rule);
  }
}
