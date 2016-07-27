// # Host
// This provides functions to manipulate the hosts file.

var config = require('../config');
var prompts = require('../prompts');
var hosts = require('./hostsFile');

module.exports = {

    // Add a host to the hostfile.
    addHost: function (host, callback) {

        // Start by checking hosts file path.
        checkHostsFilePath();

        function checkHostsFilePath () {

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
            hosts.addHost(host, callback);
        }
    },

    // Remove a host from the hostfile.
    removeHost: function (host, callback) {

        // Start by checking hosts file path.
        checkHostsFilePath();

        function checkHostsFilePath () {

            // Have host file path?
            config.hostsFilePath(function (err, path) {

                // Get an error?
                if (err) {

                    // Prompt.
                    prompts.hostsFilePath(function (err, path) {

                        // Write host file path.
                        config.hostsFilePath(path, function (result) {

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
            hosts.removeHost(host, callback);
        }
    },

    // Update the dev machine address.
    updateDev: function (address, callback) {

        var oldAddress;

        // Start by getting old address.
        getOldAddress();

        function getOldAddress () {
            config.devMachineAddress(function (err, address) {

                // Error?
                if (err) {
                    config.devMachineAddress(address, function (err, address) {

                        // Error?
                        if (err) {
                            callback(err);
                            return;
                        }

                        callback(null);
                        return;
                    })
                    return;
                }

                oldAddress = address;

                updateConfig();
            });
        }

        function updateConfig () {
            config.devMachineAddress(address, function (err, address) {

                // Error?
                if (err) {
                    callback(err);
                    return;
                }

                checkHostsFilePath();
            });
        }

        function checkHostsFilePath () {

            // Have host file path?
            config.hostsFilePath(function (err, path) {

                // Get an error?
                if (err) {

                    // Prompt.
                    prompts.hostsFilePath(function (err, path) {

                        // Write host file path.
                        config.hostsFilePath(path, function (result) {

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
            hosts.updateDev(oldAddress, callback);
        }
    }
};
