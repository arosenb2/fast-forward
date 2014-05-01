var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    Mongoose = require('mongoose'),
    db = Mongoose.connect('mongodb://localhost/fastforward'),
    Movie = Mongoose.model("Movie",require('./models/movies').Movie);

app.use('/assets', express.static(__dirname + '/public/assets'));
app.use(bodyParser());
app.use(methodOverride());

app.get('/',function(req,res){
  res.send("FASTforward>>");
});
app.get('/movies',function(req,res){
  // http://node-fast-forward-107599.use1-2.nitrousbox.com/movies
  Movie.find({},function(err,obj){
      res.send(200,obj);
  });
});
app.get('/movies/:id',function(req,res){
  // http://node-fast-forward-107599.use1-2.nitrousbox.com/movies/5362a2261a4611550e2ab094
  Movie.findOne({id:req.id},function(err,obj){
      res.send(200,obj);
  });
});

app.post('/movies',function(req,res){
  Movie.findOne({title:req.body.title},function(err,obj){
    if(obj === null){
      req.body.status = "Pending"; 
      new Movie(req.body).save(function(err){
        if(err) res.send(400,err);
        else res.send(200,obj);
      });
    }
    else res.send(400,req.body.title+" already exists. Use PUT to update.");
  });
});

app.put('/movies/:id',function(req,res){
  Movie.findByIdAndUpdate(req.params.id,req.body,function(err,obj){
    if(!err){
      res.send(200,obj);
    }
    else res.send(400,err);
  });
});

app.listen(3000,'0.0.0.0',function(){
  console.log("FASTforward Started.");
});