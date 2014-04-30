# Welcome to Nitrous.IO

Nitrous.IO enables you to develop web applications completely in the
cloud. This development "box" helps you write software, collaborate
real-time with friends, show off apps to teammates or clients, and
deploy apps to production hosting sites like Heroku or Google App
Engine.

## Getting Started

This box is a fully functional Linux environment in which you can
develop any Linux-based application. This box comes bundled with gcc,
make, perl and other system-level libraries, enough to get you started
on your application development journey.


## Setting up your SSH Keys

We recommend that you use Github (www.github.com) to manage your
application's code. To interact with your code on Github, you'll need to
add your Nitrous.IO box's SSH keys to Github.  Follow these steps to get
started:

http://help.nitrous.io/github-add-key/

## Installing Databases

Your box comes installed with Autoparts, with which you can install
databases such as MySQL, Redis, Postgres, Memcache and many others.
Look for the "Autoparts" menu in the IDE, or read more here:

http://help.nitrous.io/autoparts/

## Previewing your application

Once you're running a webserver, keep an eye on the port where your
server is running.  Then click the "Preview" menu title in the IDE above
and select the port where your application is running. For more
information, check out this help article:

http://help.nitrous.io/preview/

## Real-Time Collaboration

You can invite friends and teammates into this web IDE session so you
can code collaboratively on the same codebase.  This can be really
helpful when giving tutorials, troubleshooting some code, or just doing
some pair programming.  Click the "Collaborate" menu and then manage
collaborators.

http://help.nitrous.io/collab/

## Deployment

Once you've built your application, you can deploy to various
cloud services such as Heroku, Google App Engine, Nodejitsu, Azure and
others.  You can read more about it here:

http://help.nitrous.io/categories/deployment/

## Node.JS

Node.JS on this box is managed using
[nvm](https://github.com/creationix/nvm). You can read more about how
you can upgrade/downgrade node.js here:

https://github.com/creationix/nvm#usage

You can read more about running a static site here:

http://help.nitrous.io/node-connect-server/

Or deploying to Nodejitsu here:

http://help.nitrous.io/nodejitsu/


## MySQL

New default config file was created as /home/action/.parts/packages/mysql/5.6.13/my.cnf and
will be used by default by the server when you start it.
You may edit this file to change server settings

=> Installed mysql 5.6.13
To start the server:
  $ parts start mysql

To stop the server:
  $ parts stop mysql

To connect to the server:
  $ mysql

## MongoDB

=> Installed mongodb 2.4.9
To start the server:
  $ parts start mongodb

To stop the server:
  $ parts stop mongodb

To open MongoDB shell:
  $ mongo

## Redis

=> Installed redis 2.6.16
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
ID
Title
Image URL
Release Year
Length

### Shows
ID
Title
Image URL
Release Year
Season Count
Episode Count

### Episodes
ID
Show ID
Season Number
Episode Number
Episode Title
Episode Length
Episode Description

### Incidents
ID
Episode ID
Movie ID
Incident Category (enum: Alcohol, Drugs, Nudity, Sexual Content, Violence)
Start Time
End Time
Length
Description
Spoiler