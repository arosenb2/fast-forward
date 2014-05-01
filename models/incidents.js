var Incident = new Mongoose.Schema({
  episode:{
    type : Mongoose.Schema.ObjectId,
    ref : 'Episode'
  },
  movie:{
    type : Mongoose.Schema.ObjectId,
    ref : 'Movie'
  },
  title:{
    type: String,
    required: true,
    validate: [
      function(v){ return v.length > 0 },
      "The title has to be at least 1 letter or number long."
    ]
  },
  category:{
    type: String,
    required: true,
    enum: {
      values: ["Alcohol","Drugs","Nudity","Sexual Content","Violence"],
      message: "'`{VALUE}`' is not a valid category."
    }
  },
  start:{
    type: Number,
    validate: [
      function(v){ return v > 0 },
      "The start time can't be negative."
    ]
  },
  end:{
    type: Number,
    mvalidate: [
      function(v){ return v > 0 },
      "The end time can't be negative."
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
      "The incident description has to be at least 1 letter or number long."
    ]
  },
  spoiler:{
    type: Boolean,
    default: false
  },
  status:{
    type: String,
    required: true,
    enum: {
      values: ["Rejected","Approved","Pending"],
      message: "'`{VALUE}`' is not a valid status."
    }
  }
});
var Incidents = new Mongoose.Schema({
  incidents:[Incident]
});