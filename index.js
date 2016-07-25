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
        console.log('hostman add <domain>');
        console.log('Adds the given <domain> to the hosts file using the saved dev machine ' +
            'address');
        process.exit();
    }

    // Add.
    hosts.addHost(args[1]);
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
        console.log('hostman remove <domain>');
        console.log('Removes the given <domain> from the hosts file if it exists.');
        process.exit();
    }

    // Add.
    hosts.removeHost(args[1]);
}

// Process for 'dev' command.
if (args[0] === 'dev') {

    // Is there a second argument?
    if (typeof args[1] === 'undefined') {
        help('dev');
        process.exit();
    }

    // Asking for help?
    if (args[1] === '--help') {
        console.log('hostman dev <address>');
        console.log('Changes the development machine IP and updates related hosts file entries.');
        process.exit();
    }

    // Add.
    hosts.updateDev(args[1]);
}

// Provide help.
if (args[0] === '--help') {
    console.log('usage: hostman <command> [<args>]');
    console.log();
    console.log('commands:\t add <domain>');
    process.exit();
}

// Print usage information.
function usage () {
    console.log('usage: hostman <command> [<args>]');
    console.log('"hostman --help" for help');
}

// Print help for passed command.
function help (command) {
    console.log('"hostman ' + command + ' --help" for help');
}
