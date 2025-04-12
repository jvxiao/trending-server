#!/usr/bin/env node

const app = require('../app');
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);



function onError(error) { /*...*/ }
function onListening() { /*...*/ }