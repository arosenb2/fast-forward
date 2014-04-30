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
