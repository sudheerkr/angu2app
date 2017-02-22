'use strict';
const express = require('express');
const router = express.Router();
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const twitter_API = '';

router.get('/', (req, res) => {
  res.send('api working.')
});

router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`).then(data =>{
    res.status(200).json(data.data);
  }).catch(error => {
    res.status(500).send(error);
  });
});

router.post('/auth', (req, res) => {
  axios.post(`${twitter_API}`).then(data => {
    res.status(200).json(data);
  }).catch(error => {
    res.status(500).send(error);
  });
});

module.exports = router;
