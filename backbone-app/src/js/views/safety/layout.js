define([
    'marionette',
    'hbs!tpl/safety/layout'
], function (Marionette, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template
    });
});