// # Config
// This module handles everything to do with configuration.

var access = require('./access');

function notSet (config, callback) {
    callback('"' + config + '" is not set.');
}

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

module.exports = {

    // Get or set the path to the hosts file.
    hostsFilePath: function (path, callback) {
        checkArguments(hostsFilePath, arguments);
    }
};
