const express = require('express');
const cors = require('cors');
const { handleLike } = require('../database/index.js')

require('dotenv').config();
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
// app.use(express.urlencoded());

app.get('/random', (req, res) => {
  axios.get('https://dog.ceo/api/breeds/image/random/40')
    .then(response => res.send(response.data.message))
    .catch(err => res.sendStatus(500))
})

app.post('/like', (req, res) => {
  console.log(req.body)
  handleLike(req.body.url, req.body.action)
})

app.listen(port, () => {
  console.log(`APP Listening on port: ${port}`);
});