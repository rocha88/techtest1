(function() {
    'use strict';

    // Helper for compatibility with RequireJS
    // Based on http://stackoverflow.com/questions/19240302/does-jasmine-2-0-really-not-work-with-require-js

    // Configure RequireJS to shim Jasmine
    require.config({
        baseUrl: 'spec',
        paths: {
            'jasmine': '../js/lib/jasmine-2.1.3/jasmine',
            'jasmine-html': '../js/lib/jasmine-2.1.3/jasmine-html',
            'boot': '../js/lib/jasmine-2.1.3/boot',
            'app': '../js/app',
        },
        shim: {
            'jasmine': {
                exports: 'window.jasmineRequire'
            },
            'jasmine-html': {
                deps: ['jasmine'],
                exports: 'window.jasmineRequire'
            },
            'boot': {
                deps: ['jasmine', 'jasmine-html'],
                exports: 'window.jasmineRequire'
            }
        }
    });

    // Define all of your specs here. These are RequireJS modules.
    var specs = [
        'parserSpec'
    ];

    // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
    // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
    // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
    // initialize the HTML Reporter and execute the environment.
    require(['boot'], function () {
        // Load the specs
        require(specs, function () {
            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
        });
    });
})();
