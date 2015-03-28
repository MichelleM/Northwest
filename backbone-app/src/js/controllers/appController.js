define([
    'controllers/_baseController',
    'views/generic/notFound',
    'views/home/layout',
    'views/about/layout',
    'views/services/layout',
    'views/products/layout',
    'views/quotes/layout',
    'views/safety/layout'
], function (BaseController,
 NotFoundView, 
 HomeView, 
 AboutView,
 ServicesView,
 ProductsView,
 QuotesView,
 SafetyView) {
    'use strict';

    return BaseController.extend({
        routes: {
            '/': 'home',
            '': 'home',
            'about': 'about',
            'services': 'services',
            'products': 'products',
            'quotes': 'quotes',
            'safety': 'safety',
            '*notfound': 'notFound'
        },

        notFound: function () {
            this.layout.show(new NotFoundView());
        },

        home: function() {
            this.layout.show(new HomeView());
        },

        about: function() {
            this.layout.show(new AboutView());
        },

        services: function() {
            this.layout.show(new ServicesView());
        },

        products: function() {
            this.layout.show(new ProductsView());
        },

        quotes: function() {
            this.layout.show(new QuotesView());
        },

        safety: function() {
            this.layout.show(new SafetyView());
        },
    });
});