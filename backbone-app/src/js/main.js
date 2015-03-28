require([
    'requireConfig'
], function (config) {
    'use strict';

    require.config(config);
    require([
        'marionette',
        'config/initializer',
        'config/controllerInitializer',
        'hbs'
    ],
        function (Marionette, Initializer, ControllerInitializer) {
            var app = new Marionette.Application();
            app.addInitializer(Initializer);
            app.addInitializer(ControllerInitializer);
            app.start();
        });
});