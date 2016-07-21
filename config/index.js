// # Config
// This module handles everything to do with configuration.

modules.exports = {

    // Get or set the path to the host file.
    hostfilePath: function (path, callback) {

        // Is the path argument actually our callback?
        if (typeof path === 'function') {
            callback = path;
            path = undefined;
        }

        // Path defined?
        if(!path) {

            // Get the hostfile path.
            

        } else {

        }
    }
};
