import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import proxy from 'fastify-http-proxy';

const rules = [
  {
    upstream: '',
    prefix: '/api',
    rewritePrefix: '',
    http2: false,
  },
];

export const fastifyProxy = function (
  fastify: FastifyInstance,
  _opts: FastifyPluginOptions & {},
  done: (err?: Error) => void
) {
  for (const rule of rules) {
    if (!rule.upstream) continue;
    fastify.register(proxy, rule);
  }
  done();
};
