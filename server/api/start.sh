#!/bin/sh
mkdir -p /data/db
mongod --fork --logpath /var/log/mongod.log --dbpath /data/db
node server.js
