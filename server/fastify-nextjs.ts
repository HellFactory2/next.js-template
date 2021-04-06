import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import next from 'next';

export const fastifyNextjs = async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions & { dev: boolean },
  done: (err?: Error) => void
) => {
  const { dev } = opts;
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get('/_next/*', async (req, reply) => {
          await handle(req.raw, reply.raw);
          reply.sent = true;
        });
      }

      fastify.all('/*', async (req, reply) => {
        await handle(req.raw, reply.raw);
        reply.sent = true;
      });

      fastify.setNotFoundHandler(async (req, reply) => {
        await app.render404(req.raw, reply.raw);
        reply.sent = true;
      });
      done();
    })
    .catch(err => {
      done(err);
    });
};
