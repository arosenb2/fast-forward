var Show = new Mongoose.Schema({
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
    default: new Date().getFullYear(),
    validate: [
      function(v){ return v >= 1896 && v <= new Date().getFullYear() },
      "The year must be between 1896 and this year."
    ]
  },
  seasons:{
    type: Number,
    default: 1,
    validate: [
      function(v){ return v > 0 },
      "The number of seasons can't be negative."
    ]
  },
  episodes:{
    type: Number,
    default: 1,
    validate: [
      function(v){ return v > 0 },
      "The number of episodes can't be negative."
    ]
  }
});
  
var Episode = new Mongoose.Schema({
  show:{
    type : Mongoose.Schema.ObjectId,
    ref : 'Show'
  },
  title:{
    type: String,
    required: true,
    validate: [
      function(v){ return v.length > 0 },
      "The title has to be at least 1 letter or number long."
    ]
  },
  season:{
    type: Number,
    validate: [
      function(v){ return v >= 1 },
      "The season number has to be a positive number."
    ]
  },
  episode:{
    type: Number,
    validate: [
      function(v){ return v >= 1 },
      "The episode number has to be a positive number."
    ]
  },
  length:{
    type: Number,
    validate: [
      function(v){ return v > 0 },
      "The length can't be negative."
    ]
  },
  description:{
    type: String,
    validate: [
      function(v){ return v.length > 0 },
      "The episode description has to be at least 1 letter or number long."
    ]
  }
});
var Episodes = new Mongoose.Schema({
  episodes: [Episode]
});