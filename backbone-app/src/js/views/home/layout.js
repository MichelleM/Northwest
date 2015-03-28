define([
    'marionette',
    'hbs!tpl/home/layout'
], function (Marionette, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template
    });
});