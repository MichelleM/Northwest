define([
    'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.Collection.extend({
		url: function() {
			return "json/" + this.brand + ".json";
		}
	});
});