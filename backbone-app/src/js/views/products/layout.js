define([
    'marionette',
    'collections/products',
    'views/products/products',
    'hbs!tpl/products/layout',
    'bs.tab'
], function (Marionette, ProductCollection, ProductCollectionView, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template,

        regions: {
        	'lennoxRegion': '.lennox-products-region',
        	'yorkRegion': '.york-products-region',
        	'goodmanRegion': '.goodman-products-region',
        	'amanaRegion': '.amana-products-region'
        },

        onShow: function() {
        	$('#myTab a:first').tab('show');

        	this.lennoxCollection = new ProductCollection();
        	this.lennoxCollection.brand = 'lennox';

        	var self = this;
        	this.lennoxCollection.fetch({
        		success: function(collection) {
        			self.lennoxRegion.show(new ProductCollectionView({ collection: collection }));
        		}
        	});

        	this.yorkCollection = new ProductCollection();
        	this.yorkCollection.brand = 'york';

        	this.yorkCollection.fetch({
        		success: function(collection) {
        			self.yorkRegion.show(new ProductCollectionView({ collection: collection }));
        		}
        	});

        	this.goodmanCollection = new ProductCollection();
        	this.goodmanCollection.brand = 'goodman';

        	this.goodmanCollection.fetch({
        		success: function(collection) {
        			self.goodmanRegion.show(new ProductCollectionView({ collection: collection }));
        		}
        	});

        	this.amanaCollection = new ProductCollection();
        	this.amanaCollection.brand = 'amana';

        	this.amanaCollection.fetch({
        		success: function(collection) {
        			self.amanaRegion.show(new ProductCollectionView({ collection: collection }));
        		}
        	});
        }
    });
});