// # Config
// This module handles everything to do with configuration.

var access = require('./access');

// Get or set the path to the hosts file.
function hostsFilePath (path, callback) {

    const config = 'hostsFilePath';

    // Path defined?
    if(!path) {

        // Get the hostfile path.
        access.readConfig(config, function (err, path) {

            if (err) {
                callback(err);
                return;
            }

            if (typeof path === 'undefined') {
                notSet(config, callback);
                return;
            }

            callback(null, path);
        });


    } else {

        // Set the hostfile path.
        access.writeConfig(config, path, function (err, result) {

            if (err) {
                callback(err);
                return;
            }

            callback(null, result);
        });
    }
}

// Get or set the dev machine address.
function devMachineAddress(address, callback) {

    const config = 'devMachineAddress';

    // Path defined?
    if(!address) {

        // Get the dev machine address.
        access.readConfig(config, function (err, address) {

            if (err) {
                callback(err);
                return;
            }

            if (typeof address === 'undefined') {
                notSet(config, callback);
                return;
            }

            callback(null, path);
        });


    } else {

        // Set the dev machine address.
        access.writeConfig(config, address, function (err, result) {

            if (err) {
                callback(err);
                return;
            }

            callback(null, result);
        });
    }
}

// Standard setting not set function.
function notSet (config, callback) {
    callback('"' + config + '" is not set.');
}

// Tests the passed arguments and then passes them on to the passed function.
function checkArguments (func, args) {

    // Is the first argument actually our callback?
    if (typeof args[0] === 'function') {
        args[1] = args[0];
        args[0] = undefined;
    }

    // Check we have a callback.
    if (typeof args[1] !== 'function') {
        throw new TypeError('"callback" must be a function.');
    }

    func(args[0], args[1]);
}

module.exports = {
    hostsFilePath: function (path, callback) {
        checkArguments(hostsFilePath, arguments);
    },
    devMachineAddress: function (address, callback) {
        checkArguments(devMachineAddress, arguments);
    }
};
