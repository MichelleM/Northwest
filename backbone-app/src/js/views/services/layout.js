define([
    'marionette',
    'hbs!tpl/services/layout'
], function (Marionette, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template
    });
});