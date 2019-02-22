const express = require('express');
const app = express();

const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const target = process.env.TARGET || 'http://localhost:8080';
const port = process.env.PORT || 80;

app.all('/*', (req, res) => {
  console.log(`Proxying to ${target}`);
  apiProxy.web(req, res, { target });
});

app.listen(port);

