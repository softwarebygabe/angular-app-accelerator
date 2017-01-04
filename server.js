'use strict';

var http = require('http');
var express = require('express');

var application = express();
application.use(express.static('dist'));

var server = http.Server(application);

// Start the server
server.listen(8080);

console.log("sever listening on port 8080")
