// # Hosts File
// Manages manipulation of the hosts file.

var fs = require('fs');
var readline = require('readline');

var config = require('../config');

module.exports = {

    // Add a host to the hosts file.
    addHost: function (host, callback) {

        // Get the hosts file path.
        config.hostsFilePath(function (err, path) {

            // Is there an error?
            if (err) {
                callback(err);
                return;
            }

            // Get the dev machine address.
            config.devMachineAddress(function (err, address) {

                // Is there an error?
                if (err) {
                    callback(err);
                    return;
                }

                var line = '\n' + address + '\t' + host + ' // hostman managed';

                fs.appendFile(path, line, function (err) {

                    // Was there an error?
                    if (err) {
                        callback(err);
                        return;
                    }
                });
            });
        });
    },

    // Remove a host from the hosts file.
    removeHost: function (host, callback) {

        // Get the hosts file path.
        config.hostsFilePath(function (err, path) {

            // Create line reader.
            var lineReader = readline.createInterface({
                input: fs.createReadStream(path)
            });

            rl.on('line', function (line) {
                console.log(line);
            });
        });
    }
};
