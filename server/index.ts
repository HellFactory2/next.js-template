import './env';
import { onStartSuccess, onStartError } from './logger';
import server from './server';
import next from 'next';

const port = parseInt(process.env.SERVER_PORT || '3000', 10);
const env = process.env.NODE_ENV || 'development';
const dev = env !== 'production';
const app = next({
  dir: '.',
  dev,
});

export const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => server.listen(port, onStartSuccess))
  .catch(onStartError);
