var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),  
    Mongoose = require('mongoose'),
    db = Mongoose.connect('mongodb://localhost/fastforward'),
    Movie = Mongoose.model("Movie",require('./models/movies').Movie);

app.use('/assets', express.static(__dirname + '/public/assets'));
app.use(bodyParser());
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
  // http://node-fast-forward-107599.use1-2.nitrousbox.com/movies/5361c5d8a04b7f5c062c07c2
  Movie.findOne({id:req.id},function(err,obj){
      res.send(obj);
  });
});

app.post('/movies',function(req,res){
  Movie.findOne({title:req.body.title},function(err,obj){
    if(obj === null){
      req.body.status = "Pending"; 
      new Movie(req.body).save(function(err){
        if(err) res.send(400,err);
        else res.send(200);
      });
    }
    else res.send(400,req.body.title+" already exists. Use PUT to update.");
  });
});

app.listen(3000,'0.0.0.0',function(){
  console.log("FASTforward Started.");
});