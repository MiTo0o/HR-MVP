const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to database');
});


const pictureSchema = mongoose.Schema({
  link: String,
  likes: Number
});

const Picture = mongoose.model('picture', pictureSchema);

const handleLike = (url, action) => {

  let amount = action === 'increase' ? 1 : -1;

  Picture.findOneAndUpdate(
    {link: url},
    {$inc : {likes : amount}},
    {upsert: true},
    (err, doc) => {
      if (err) {
        console.log(err)
      } else {
        console.log(doc)
      }
    }
  )
}

module.exports.handleLike = handleLike;
