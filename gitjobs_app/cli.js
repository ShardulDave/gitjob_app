const
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'searches jobs from the given keyword',
        builder: (yargs) => {
            return yargs.option('k', {
                alias: 'keyword',
                describe: 'searches from the keyword'
            })
        },
        handler: (argv) => { app.search(argv.keyword) }
    })
    .help('help')
    .argv