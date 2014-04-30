var express = require('express');
var app = express();
var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'fastforward');

app.use('/assets', express.static(__dirname + '/public'));
app.get('/',function(req,res){
  res.send("FASTforward>>");
});

app.listen(3000,'0.0.0.0',function(){
  console.log("FASTforward Started.");
});