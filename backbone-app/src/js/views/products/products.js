define([
    'marionette',
    'views/products/product',
    'hbs!tpl/products/products'
], function (Marionette, Product, Template) {
    'use strict';

    return Marionette.CompositeView.extend({
        template: Template,
        childView: Product,
        childViewContainer: '.products-container',
        attributes: {
        	'id': 'container'
        }, 

        ui: {
            'furnace': '.furnace',
            'air': '.ac'
        },

        events: {
            'click .furnace': function() { this.toggleType('furnace') },
            'click .ac': function() { this.toggleType('air') }
        },

        toggleType: function(type) {
            if(type == 'furnace'){
                this.ui.furnace.addClass('active');
                this.ui.air.removeClass('active');
            } else {
                this.ui.furnace.removeClass('active');
                this.ui.air.addClass('active');
            }
            this.children.each(function(view) {
                view.toggleType(type);
            });
        },

        onShow: function() {
            this.toggleType('furnace');

            var furnaces = this.collection.where({ type: 'furnace'});
            var ac = this.collection.where({ type: 'air'});

            if(furnaces.length <= 0){
                this.ui.furnace.remove();
                this.toggleType('air');
            }

            if(ac.length <= 0){
                this.ui.air.remove();
            }
        }
    });
});
