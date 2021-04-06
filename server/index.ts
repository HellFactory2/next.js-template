import fastify from 'fastify';
import { fastifyNextjs } from './fastify-nextjs';
import { fatalErrorHandler, onStartHandler } from './logger';
import useProxy from './use-proxy';

export const port = parseInt(process.env.PORT || '3000', 10);
export const env = process.env.NODE_ENV || 'development';
export const dev = env !== 'production';

export const server = fastify({
  pluginTimeout: 20000,
});

async function bootstrap() {
  try {
    await server.register(fastifyNextjs, { dev });
    useProxy(server);
    server.listen(port, onStartHandler);
  } catch (err) {
    fatalErrorHandler(err);
  }
}
bootstrap();
