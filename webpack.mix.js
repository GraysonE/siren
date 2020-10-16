const mix = require( 'laravel-mix' );

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js( 'resources/js/app.js', 'public/js' );
mix.copy( 'quasarapp/dist/spa/index.html', 'resources/views/app.blade.php' );
mix.copyDirectory( 'quasarapp/dist/spa', 'public' ); // change 'spa' to whatever you want (eg. ssr, pwa, spa).
mix.postCss( 'resources/css/app.css', 'public/css', [
    //
] );
