# FASTforward
Guide for avoiding mature and adult content in television and movies.

## Getting Started
### [Nitrous.io](http://nitrous.io)
#### [MongoDB](http://mongodb.org)
- => mongodb 2.4.9
- To start the server:
  - $ parts start mongodb
- To stop the server:
  - $ parts stop mongodb
- To open MongoDB shell:
  - $ mongo

#### [Redis](http://redis.io)
- => redis 2.6.16
- To start the server:
  - $ parts start redis
- To stop the server:
  - $ parts stop redis
- To connect to the server:
  - $ redis-cli

## Architecture
### Front End
- [Angular.js](http://angularjs.org/)

### Back End
- [Express.js](http://expressjs.com/)
  - API

#### Authentication
- [Passport.js](http://passportjs.org/)

#### ORM
- [Mongoose.js](http://mongoosejs.com)

### Database
- [MongoDB](http://mongodb.org)
- [Redis](http://redis.io)
  - Tracking Active Users

## DB Schema
*All meta data will be gathered through scraping entries from Wikipedia*
### Movies
- **ID**
- Title
- Image URL
- Release Year
- Length

### Shows
- **ID**
- Title
- Image URL
- Release Year
- Season Count
- Episode Count

### Episodes
- **ID**
- ***Show ID***
- Season Number
- Episode Number
- Episode Title
- Episode Length
- Episode Description

### Incidents
- **ID**
- ***Episode ID***
- ***Movie ID***
- Incident Category
  - Enum: *Alcohol, Drugs, Nudity, Sexual Content, Violence*
- Start Time
- End Time
- Length
- Description
- Spoiler
- Status
  - Enum: *Pending, Rejected, Approved*
  
## General Notes
### Wikipedia
- For Wikipedia preview image detection, the thumbnail ( $("td a.image img").attr("src") ) will need to be changed from *//upload.wikimedia.org/wikipedia/en/thumb/4/4e/Back_to_the_Future_Part_III.jpg/220px-Back_to_the_Future_Part_III.jpg* to *//upload.wikimedia.org/wikipedia/en/4/4e/Back_to_the_Future_Part_III.jpg*
### Test Data
- {"title":"Back to the Future","imageURL":"//upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg","year":1985,"length":116}
- {"title":"Back to the Future Part II","imageURL":"//upload.wikimedia.org/wikipedia/en/c/c2/Back_to_the_Future_Part_II.jpg","year":1989,"length":108}
- {"title":"Back to the Future Part III","imageURL":"http://upload.wikimedia.org/wikipedia/en/4/4e/Back_to_the_Future_Part_III.jpg","year":1990,"length":118}