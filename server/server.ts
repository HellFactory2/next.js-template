import { handler } from '.';
import express from 'express';
import useProxy from './use-proxy';

const server = express();

useProxy(server);

server.all('/api', (_, res) => {
  res.redirect(307, '/api/');
});

server.all('*', (req, res) => handler(req, res));

export default server;
