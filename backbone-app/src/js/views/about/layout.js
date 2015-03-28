define([
    'marionette',
    'hbs!tpl/about/layout',
    'plusone'
], function (Marionette, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template
    });
});