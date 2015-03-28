define([
    'marionette',
    'hbs!tpl/about/layout',
    'plusone'
], function (Marionette, Template) {
    'use strict';

    return Marionette.LayoutView.extend({
        template: Template,

        onShow: function() {
        	gapi.post.render("widget-div", {'href' : 'https://plus.google.com/108385852680441972538/posts/fGa9dfBpk8H'} );
        }
    });
});