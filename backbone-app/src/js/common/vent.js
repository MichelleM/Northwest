define([
    'backbone',
    'marionette'
], function (Backbone) {
    'use strict';

    var vent = new Backbone.Wreqr.EventAggregator();

    vent.Events = {
        Navigate: 'navigate'
    };

    return vent;
}); 