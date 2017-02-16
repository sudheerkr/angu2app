'use strict';
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on localhost :${port}`);
});
