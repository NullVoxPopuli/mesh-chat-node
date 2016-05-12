'use strict';

(function() {
    var exports = {
        load: load
    };

    var express = require('express');
    var fs = require('fs');
    var open = require('open');

    function load(app, env) {
        env = 'dev';

        switch (env) {

            case 'build':
                //TODO create build logic
                break;

            default:
                var path = './src/client';
                var key = path + '/userPublicKey.json';
                app.use(express.static('./src/client'));
                app.use('/setup', express.static('./src/client/app/setup/setup.html'));
                app.use('/home', express.static('./src/client/app/index.html'));
                //app.use('/*', express.static('./src/client/app/index.html'));

                //look for public key
                fs.access(key, fs.F_OK, function(err) {
                    if (!err) {
                        //if public key exists, go to app
                        open('http://localhost:8080/home');
                    }
                    else {

                        //if public key does not exist, go to setup
                        open('http://localhost:8080/setup');
                    }
                });

                break;
        }
    }

    module.exports = exports;
})();
