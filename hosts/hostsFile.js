// # Hosts File
// Manages manipulation of the hosts file.

var fs = require('fs');

var config = require('../config');

var hostmanTag = '// hostman managed';

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

                var line = '\n' + address + '\t' + host + ' ' + hostmanTag;

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

            // Read file.
            fs.readFile(path, function (err, data) {

                // Error?
                if (err) {
                    callback(err);
                    return;
                }

                // Read old file and create new file data.
                var newFileData = '';
                var fileData = data.toString().split('\n');

                fileData.forEach(function(line) {

                    // Does the line match the host we're removing?
                    if (line.indexOf('\t' + host + ' ' + hostmanTag) === -1) {

                        // No.
                        newFileData = newFileData + line + '\n';
                    }
                });

                // Remove trailing new lines.
                while (newFileData.lastIndexOf('\n') === newFileData.length - 1) {
                    newFileData = newFileData.substring(0, newFileData.length - 1);
                }

                // Write out file.
                fs.writeFile(path, newFileData, function (err) {

                    // Error?
                    if (err) {
                        callback(err);
                        return;
                    }
                });
            });
        });
    }
};
