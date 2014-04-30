var Movie = new Mongoose.Schema({
  title:{
    type: String,
    required: true,
    validate: [
      function(v){ return v.length > 0 },
      "The title has to be at least 1 letter or number long."
    ]
  },
  imageURL:{
    type: String,
    validate: [
      function(v){ return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(v) },
      "The URL is invalid."
    ]
  },
  year:{
    type: Number,
    validate: [
      function(v){ return v >= 1896 && v <= new Date().getFullYear() },
      "The year must be between 1896 and this year."
    ]
  },
  length:{
    type: Number,
    validate: [
      function(v){ return v > 0 },
      "The length can't be negative."
    ]
  }
});
var Movies = new Mongoose.Schema({
  movies: [Movie]
});