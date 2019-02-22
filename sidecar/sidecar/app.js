const express = require('express');
const app = express();

const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const SRV_NAME = process.env.SRV_NAME;
const Logger = require('./lib/really-cool-logger');
const logger = new Logger(SRV_NAME);

const {
  TARGET = 'http://localhost:8080',
  PORT = 80
} = process.env;

app.all('/*', (req, res) => {
  logger.send(TARGET, req.url, Date.now());
  apiProxy.web(req, res, { target: TARGET });
});

app.listen(PORT);

