let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
            'resources/assets/js/vue-2.3.4.js',
            'resources/assets/js/axios-v0.16.2.js',
            'resources/assets/js/app.js',
        ],
        'public/js/app.js')
    // mix.js('resources/assets/js/app.js', 'public/js')
    // .sass('resources/assets/sass/app.scss', 'public/css');