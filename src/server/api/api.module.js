(function() {
    var exports = {
        start: start
    }

    var express = require('express');
    var bodyParser = require('body-parser');
    var encryption = require('../encryption/encryption.module.js');

    function start(app) {
        //format api responses in json
        app.use(bodyParser.json());

        app.post('/createPublicKey', function(req, res) {

            console.log('POST /');
            console.dir(req.body);
            var status = encryption.publicKey.writeFile(req.body);
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end('success');
        });

        app.post('/sendMessage', function(req, res) {
            console.log('POST /');
            console.dir(req);
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end('thanks');
        });

        app.get('/receiveMessage', function(req, res) {
            //TODO
        });
    }

    module.exports = exports;
})();
