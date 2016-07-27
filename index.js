var hosts = require('./hosts');

var args = process.argv.slice(2);

// Do we have any arguments?
if (args.length < 1) {
    usage();
    process.exit();
}

// Process for 'add' command.
if (args[0] === 'add') {

    // Is there a second argument?
    if (typeof args[1] === 'undefined') {
        help('add');
        process.exit();
    }

    // Asking for help?
    if (args[1] === '--help') {
        console.log('hostsman add <domain>');
        console.log('Adds the given <domain> to the hosts file using the saved dev machine ' +
            'address');
        process.exit();
    }

    // Add.
    hosts.addHost(args[1], function (err) {

        // Get an error?
        if (err) {
            handleError(err);
        }
    });
}

// Process for 'remove' command.
if (args[0] === 'remove') {

    // Is there a second argument?
    if (typeof args[1] === 'undefined') {
        help('remove');
        process.exit();
    }

    // Asking for help?
    if (args[1] === '--help') {
        console.log('hostsman remove <domain>');
        console.log('Removes the given <domain> from the hosts file if it exists.');
        process.exit();
    }

    // Remove.
    hosts.removeHost(args[1], function (err) {

        // Get an error?
        if (err) {
            handleError(err);
        }
    });
}

// Process for 'setdev' command.
if (args[0] === 'setdev') {

    // Is there a second argument?
    if (typeof args[1] === 'undefined') {
        help('setdev');
        process.exit();
    }

    // Asking for help?
    if (args[1] === '--help') {
        console.log('hostsman setdev <address>');
        console.log('Changes the development machine IP and updates related hosts file entries.');
        process.exit();
    }

    // Update.
    hosts.updateDev(args[1], function (err) {

        // Get an error?
        if (err) {
            handleError(err);
        }
    });
}

// Provide help.
if (args[0] === '--help') {
    console.log('usage: hostsman <command> [<args>]');
    console.log();
    console.log('commands:');
    console.log('\tadd <domain>');
    console.log('\tremove <domain>');
    console.log('\tsetdev <address>');
    process.exit();
}

// Print usage information.
function usage () {
    console.log('usage: hostsman <command> [<args>]');
    console.log('"hostsman --help" for help');
}

// Print help for passed command.
function help (command) {
    console.log('"hostsman ' + command + ' --help" for help');
}

// Handle errors.
function handleError (err) {

    // Permissions?
    if (err.code === 'EACCES') {
        console.log('Unable to write to ' + err.path + '. Do you need to use sudo?');
    }
}
