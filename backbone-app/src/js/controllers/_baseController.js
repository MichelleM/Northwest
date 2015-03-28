define([
    'marionette',
    'vent'
], function (Marionette, vent) {
    'use strict';

    return Marionette.AppRouter.extend({
        initialize: function (options) {
            this.layout = options.layout;
            this.on('route', this._emitRoute);
        },

        _emitRoute: function (route, params) {
            vent.trigger(vent.Events.Navigate, {
                route: route,
                params: params
            });
        }
    });
});