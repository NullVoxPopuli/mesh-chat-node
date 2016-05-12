'use strict';

//npm modules
var express = require('express');
// var http = require('http');
// var jsonfile = require('jsonfile');

//app modules
var encryption = require('./encryption/encryption.module.js');
var api = require('./api/api.module.js');
var ui = require('./ui/ui.module.js');

var app = express();

api.start(app);
ui.load(app);

app.listen(8080, function() {
    console.log('Express server listening on port 8080');
    //pk.generatePublicKey();
    //encryption.publicKey.generatePublicKey();
});
