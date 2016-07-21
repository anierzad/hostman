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
