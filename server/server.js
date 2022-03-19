const express = require('express');
const cors = require('cors');
const { handleLike, findLiked } = require('../database/index.js')
const path = require('path');
require('dotenv').config();
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
const catApiKey = process.env.CATAPIKEY

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/home-pics', (req, res) => {
  let allData = []
  axios.get('https://dog.ceo/api/breeds/image/random/20')
    .then(response => allData.push(...response.data.message))
    .then(() => {
      let authObject = { 
        headers: { 
          'X-Api-Key': catApiKey
        } 
      }
      return axios.get('https://api.thecatapi.com/v1/images/search?limit=20', authObject)
        .then((response) => {
          for (const cat of response.data) {
            allData.push(cat.url);
          }
        })
    })
    .then(() => {
      let promises = [];
      for (let i = 0; i < 40; i++) {
        promises.push(
          axios.get('https://randomfox.ca/floof/')
        )
      }
      return Promise.all(promises)
        .then(data => data.map(fox => fox.data.image))
        .then(data => {
          for (const fox of data) {
            allData.push(fox);
          }
        })
    })
    .then(() => {
      for (var i = allData.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = allData[i];
        allData[i] = allData[j];
        allData[j] = temp;
      }
      res.send(allData);
    })
    .catch((err) => res.sendStatus(500))
})

app.post('/like', (req, res) => {
  handleLike(req.body.url, req.body.action)
})

app.get('/dog-pics', (req, res) => {
  axios.get('https://dog.ceo/api/breeds/image/random/40')
    .then(response => res.send(response.data.message))
    .catch(err => res.sendStatus(500))
})

app.get('/cat-pics', (req, res) => {
  let authObject = { 
    headers: { 
      'X-Api-Key': catApiKey
    } 
  }

  let catPicData = []
  axios.get('https://api.thecatapi.com/v1/images/search?limit=40', authObject)
    .then((response) => {
      for (const cat of response.data) {
        catPicData.push(cat.url)
      }
      res.send(catPicData)
    })
    .catch(err => res.sendStatus(500))
})

app.get('/fox-pics', (req, res) => {
  let promises = [];
  for (let i = 0; i < 40; i++) {
    promises.push(
      axios.get('https://randomfox.ca/floof/')
    )
  }
  Promise.all(promises)
    .then(data => data.map(fox => fox.data.image))
    .then(data => res.send(data))
})

app.get('/most-liked', (req, res) => {
  findLiked()
    .then(data => res.send(data))
})

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`APP Listening on port: ${port}`);
});