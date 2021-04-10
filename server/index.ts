import './load-env';
import fastify from 'fastify';
import { fatalErrorHandler, onStartHandler } from './event-handlers';
import { fastifyNextjs } from './fastify-nextjs';
import { fastifyProxy } from './fastify-proxy';

const second = 1000;

export const port = parseInt(process.env.PORT || '3000', 10);
export const env = process.env.NODE_ENV || 'development';
export const dev = env !== 'production';

export const server = fastify({
  pluginTimeout: 60 * second,
});

async function bootstrap() {
  try {
    server.register(fastifyNextjs, { dev });
    server.register(fastifyProxy);
    server.listen(port, '0.0.0.0', onStartHandler);
  } catch (err) {
    fatalErrorHandler(err);
  }
}
bootstrap();
