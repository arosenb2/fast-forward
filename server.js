var express = require('express'),
  app = express(),
  Mongoose = require('mongoose'),
  db = Mongoose.connect('mongodb://localhost/fastforward'),
  Movie = Mongoose.model("Movie",require('./models/movies').Movie);

app.use('/assets', express.static(__dirname + '/public/assets'));
app.get('/',function(req,res){
  res.send("FASTforward>>");
});
app.get('/movies',function(req,res){
  // http://node-fast-forward-107599.use1-2.nitrousbox.com/movies
  Movie.find({},function(err,obj){
      res.send(obj);
  });
});
app.get('/movies/:id',function(req,res){
  // http://node-fast-forward-107599.use1-2.nitrousbox.com/movie/5361c5d8a04b7f5c062c07c2
  Movie.findOne({id:req.id},function(err,obj){
      res.send(obj);
  });
});

app.post('/movies',function(req,res){
  /*
  How to add Back to the Future
  =============================
  var bttf = new Movie();
  bttf.title = "Back to the Future";
  bttf.year = 1985;
  bttf.imageURL = "http://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg";
  bttf.length = 116;
  bttf.save(function(err){
    console.log(err);
  });
  */
  
  /* Logging the request for initial debugging */
  console.log(req);
});

app.listen(3000,'0.0.0.0',function(){
  console.log("FASTforward Started.");
});