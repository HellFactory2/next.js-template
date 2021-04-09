import fastify from 'fastify';
import { fastifyNextjs } from './fastify-nextjs';
import { fatalErrorHandler, onStartHandler } from './logger';
import useProxy from './use-proxy';

export const port = parseInt(process.env.PORT || '3000', 10);
export const env = process.env.NODE_ENV || 'development';
export const dev = env !== 'production';
export const hostname = process.env.HOST_NAME || 'http://localhost/';

export const server = fastify({
  pluginTimeout: 30000,
});

async function bootstrap() {
  try {
    await server.register(fastifyNextjs, { dev, hostname });
    useProxy(server);
    server.listen(port, '0.0.0.0', onStartHandler);
  } catch (err) {
    fatalErrorHandler(err);
  }
}
bootstrap();
