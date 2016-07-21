// # Acess
// Provides read and write access to the config file.

var nconf = require('nconf');

const configFilePath = __dirname + '/../configuration.json';

nconf.use('file', { file: configFilePath });

module.exports = {

    // Read a configuration setting.
    readConfig: function (config, callback) {

        if (typeof config !== 'string') {
            throw new TypeError('"config" must be a string.');
        }

        if (typeof callback !== 'function') {
            throw new TypeError('"callback" must be a function.');
        }

        nconf.load();

        callback(null, nconf.get(config));
    },

    // Write a configuration setting.
    writeConfig: function (config, value, callback) {

        if (typeof config !== 'string') {
            throw new TypeError('"config" must be a string.');
        }

        if (typeof callback !== 'function') {
            throw new TypeError('"callback" must be a function.');
        }

        if (typeof value === 'function' || typeof value === 'undefined') {
            throw new TypeError('"value" must be passed.');
        }

        nconf.set(config, value);
        
        callback(null, nconf.save());
    }
};
