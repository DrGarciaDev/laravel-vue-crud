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
            'resources/assets/js/jquery-3.2.1.js',
            'resources/assets/js/bootstrap-3.3.7.js',
            'resources/assets/js/toastr-2.1.4.js',
            'resources/assets/js/vue-2.3.4.js',
            'resources/assets/js/axios-v0.16.2.js',
            // 'resources/assets/js/app.js',
        ],
        'public/js/libs.js')
    .styles([
        'resources/assets/css/bootstrap-3.3.7.css',
        'resources/assets/css/toastr-2.1.4.css',
    ], 'public/css/app.css');
// mix.js('resources/assets/js/app.js', 'public/js')
// .sass('resources/assets/sass/app.scss', 'public/css');