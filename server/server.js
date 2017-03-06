'use strict';
const express = require('express');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();
dotenv.config({encoding: 'base64'});
dotenv.load();
const port = process.env.APP_PORT || 3000;
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status({err.status || 500});
//     res.render('error', {
//       message : err.message,
//       error : err
//     });
//   });
// }
//
// app.use((err, req, res, next) => {
//   res.status({err.status || 500});
//   res.render('error', {
//     message : err.message,
//     error : err
//   });
// });

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on localhost :${port}`);
});
