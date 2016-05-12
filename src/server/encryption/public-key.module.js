(function() {
    var cryptico = require('cryptico');
    var jsonfile = require('jsonfile');


    var publicKey = {
        writeFile: writeFile
        //generatePublicKey: generatePublicKey
    };

    function generatePublicKey() {
        var rsaKey = cryptico.generateRSAKey(Math.random().toString(), 2048);
        var publicKeyString = cryptico.publicKeyString(rsaKey);
        console.log(publicKeyString);
        return publicKeyString;
    }

    function writeFile(name) {
        var fileName = name.alias.replace(/[|&;$%@"<>()+,]/g, '');
        var file = './userPublicKey.json';
        var obj = {
            //TODO get location
            location: '192.168.1.1:8080',
            //TODO get uid
            uid: '000000000000000',
            alias: name.alias,
            publickey: '-----BEGIN PUBLIC KEY-----\n' + generatePublicKey() + '\n-----END PUBLIC KEY-----'
        }

        jsonfile.writeFile(file, obj)
    }

    module.exports = publicKey;
})();
