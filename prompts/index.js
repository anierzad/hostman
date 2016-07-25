// # Prompts
// This module will provide prompts to get information from the user.
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = {

    hostsFilePath: function (callback) {

        rl.question('Where is your hosts file located?\n', function (response) {
            rl.close();
            
            callback(null, response);
        });
    },

    devMachineAddress: function (callback) {

        rl.question('What is the IP address of your development machine?\n', function (response) {
            rl.close();

            callback(null, response);
        });
    }
};
