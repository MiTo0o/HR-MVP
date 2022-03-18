const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded())


app.listen(port, () => {
  console.log(`APP Listening on port: ${port}`);
});