express = require 'express'
app = express()
bodyParser = require 'body-parser'
compress = require 'compression'
methodOverride = require 'method-override'
Mongoose = require 'mongoose'
db = Mongoose.connect 'mongodb://localhost/fastforward'
Movie = Mongoose.model 'Movie',(require './models/movies').Movie

app.use compress()
app.use bodyParser()
app.use methodOverride()
app.set "views", __dirname+"/public"
app.use '/',express.static __dirname+"/public"
app.use '/assets', express.static __dirname + '/public/assets'

app.get '/',(req,res)->
  res.sendfile "/assets/index.html"

app.get '/movies',(req,res)->
  # http://node-fast-forward-107599.use1-2.nitrousbox.com/movies
  Movie.find {},(err,obj)->
      res.send 200,obj

app.get '/movies/:id', (req,res)->
  # http://node-fast-forward-107599.use1-2.nitrousbox.com/movies/5362a2261a4611550e2ab094
  Movie.findOne {id:req.id},(err,obj)->
      res.send 200,obj

app.post '/movies',(req,res)->
  Movie.findOne {title:req.body.title},(err,obj)->
    if obj is null
      req.body.status = "Pending"
      movie = new Movie()
      movie.title = req.body.title
      movie.imgURL = req.body.imgURL
      movie.year = req.body.year
      movie.length = req.body.length
      movie.status = req.body.status

      movie.save (err)->
        res.send 400,err if err
        else res.send 200,obj
    else res.json 400,{"error":req.body.title+" already exists. Use PUT to update."}

app.put '/movies/:id',(req,res)->
  Movie.findByIdAndUpdate req.params.id,req.body,(err,obj)->
    res.send 200,obj if !err
    else res.send 400,err

app.listen 3000,'0.0.0.0',->
  console.log "FASTforward Started."
