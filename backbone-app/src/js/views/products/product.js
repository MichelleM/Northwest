define([
    'marionette',
    'hbs!tpl/products/product'
], function (Marionette, Template) {
    'use strict';

    return Marionette.ItemView.extend({
    	className: 'item',
        template: Template,

        toggleType: function(type) {
        	if(this.model.get('type') != type){
        		this.$el.hide();
        	} else {
        		this.$el.show();
        	}
        }
    });
});