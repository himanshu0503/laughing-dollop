#!/bin/sh

cd /api
npm install
npm install -g nodemon
nodemon app.js
