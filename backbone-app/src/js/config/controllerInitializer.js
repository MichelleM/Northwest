define([
    'backbone',
    'controllers/appController',
    'views/appLayout'
], function (
    Backbone,
    AppController,
    Layout) {
    'use strict';

    return function () {
        var layout = new Layout();
        this.body.show(layout);

        new AppController({ layout: layout });

        Backbone.history.start();
    };
});