const path = require( 'path' );

module.exports = {
    resolve:   {
        alias: {
            '@': path.resolve( 'resources/js' ),
        },
    },
    // devServer: {
    //     proxy:        {
    //         host: '0.0.0.0',  // host machine ip
    //         port: 8080,
    //     },
    //     watchOptions: {
    //         aggregateTimeout: 200,
    //         poll:             5000
    //     },
    //
    // }
};
