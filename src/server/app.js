'use strict';

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('./build'));

app.listen(8080, function() {
    console.log('Express server listening on port 8080');
    //console.log()
});

app.get('/test', function() {
    console.log('hey you hit my test');
});

app.post('/sendMessage', function(req, res) {
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('thanks');
    //console.log(req.body)
});
