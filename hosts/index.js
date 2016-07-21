// # Host
// This provides functions to manipulate the hosts file.

var config = require('../config');

module.exports = {

    // Add a host to the hostfile.
    addHost: function (host) {

        // Have host file path?
        config.hostsFilePath(function (err, path) {

            // Get an error?
            if (err) {

                // Prompt.
            }
        });
    }
};
