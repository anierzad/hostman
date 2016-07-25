// # Hosts File
// Manages manipulation of the hosts file.

var fs = require('fs');

var config = require('../config');

module.exports = {

    addHost: function (host, callback) {
        
        config.hostsFilePath(function (err, path) {

            config.devMachineAddress(function (err, address) {

                fs.open(path, 'r+', function (err, fd) {

                    fs.write(fd, '\n' + address + '\t' + host + ' // hostman managed');
                });
            });
        });
    }
};
