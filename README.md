# FASTforward

## MongoDB

=> mongodb 2.4.9
To start the server:
  $ parts start mongodb

To stop the server:
  $ parts stop mongodb

To open MongoDB shell:
  $ mongo

## Redis

=> redis 2.6.16
To start the server:
  $ parts start redis

To stop the server:
  $ parts stop redis

To connect to the server:
  $ redis-cli


## Architecture
### Front End
- Angular.js

### Back End
- Express.js (API)

#### Authentication
- Passport.js

#### ORM
- Mongoose.js

### Database
- MongoDB
- Redis (tracking users)

## DB Schema
*All meta data will be gathered through scraping entries from Wikipedia*
### Movies
- ID
- Title
- Image URL
- Release Year
- Length

### Shows
- ID
- Title
- Image URL
- Release Year
- Season Count
- Episode Count

### Episodes
- ID
- Show ID
- Season Number
- Episode Number
- Episode Title
- Episode Length
- Episode Description

### Incidents
- ID
- Episode ID
- Movie ID
- Incident Category (enum: Alcohol, Drugs, Nudity, Sexual Content, Violence)
- Start Time
- End Time
- Length
- Description
- Spoiler
