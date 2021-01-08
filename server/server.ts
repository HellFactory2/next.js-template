import { handler } from '.';
import express from 'express';
import useProxy from './use-proxy';

const server = express();

useProxy(server);

server.all('*', (req, res) => handler(req, res));

export default server;
