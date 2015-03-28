define([
    'marionette',
    'hbs!tpl/generic/notFound'
], function (Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
        template: Template
    });
});