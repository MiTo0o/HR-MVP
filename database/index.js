const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to database');
});

// add password later
const userSchema = mongoose.Schema({
  picLinks: [String],
  username: String,
});
