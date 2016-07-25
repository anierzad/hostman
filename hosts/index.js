// # Host
// This provides functions to manipulate the hosts file.

var config = require('../config');
var prompts = require('../prompts');
var hosts = require('./hostsFile');

module.exports = {

    // Add a host to the hostfile.
    addHost: function (host) {

        // Start by checking hosts file path.
        checkHostsFilePath();

        function checkHostsFilePath () {
            console.log('checkHostsFilePath');
            // Have host file path?
            config.hostsFilePath(function (err, path) {

                // Get an error?
                if (err) {

                    // Prompt.
                    prompts.hostsFilePath(function (err, path) {

                        // Write host file path.
                        config.hostsFilePath(path, function (result) {

                            // Move on.
                            checkDevMachineAddress();
                        });
                    });

                    return;
                }

                // Move on.
                checkDevMachineAddress();
            });
        }

        function checkDevMachineAddress () {
            console.log('checkDevMachineAddress');
            // Have a dev machine address?
            config.devMachineAddress(function (err, address) {

                // Get an error?
                if (err) {

                    // Prompt.
                    prompts.devMachineAddress(function (err, address) {

                        // Write dev machine address.
                        config.devMachineAddress(address, function (err, address) {

                            // Move on.
                            proceed();
                        });
                    });

                    return;
                }

                // Move on.
                proceed();
            });
        }

        function proceed () {
            console.log('Proceeding.');
            hosts.addHost(host);
        }
    }
};
