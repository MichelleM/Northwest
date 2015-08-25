define([
    'underscore',
    'backbone',
    'marionette',
    'hbs!tpl/appLayout',
    'bs.collapse'
], function (
    _,
    Backbone,
    Marionette,
    Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template,

        regions: {
            mainContent: '#main-region'
        },
        
        show: function (view) {
            this.mainContent.show(view);
        }
    });
});
