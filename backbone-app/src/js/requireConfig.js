define(function() {
    'use strict';

    return {
        baseUrl: '/js',
        inlineText: true,
        paths: {
            //Folders
            'tpl': '../templates',

            //Libraries
            'jquery': [
                '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery',
                '../components/jquery/jquery'
            ],
            'underscore': [
                '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore',
                '../components/underscore/underscore'
            ],
            'backbone': [
                '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone',
                '../components/backbone/backbone'
            ],
            'marionette': [
                '//cdnjs.cloudflare.com/ajax/libs/backbone.marionette/2.4.1/backbone.marionette.min',
                '../components/backbone.marionette/backbone.marionette'
            ],
            'handlebars': [
                '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.2/handlebars',
                '../components/handlebars/handlebars'
            ],
            'log4javascript': [
                '//cdnjs.cloudflare.com/ajax/libs/log4javascript/1.4.3/log4javascript',
                '../components/log4javascript/log4javascript'
            ],

            'masonry':'../components/masonry/masonry.pkgd.min',
            'plusone': 'https://apis.google.com/js/plusone',
            'jquery-validation': '../components/jquery-bootstrap-validation/jqBootstrapValidation',

            //Libraries with no CDN
            'hbs': '../components/require-handlebars-plugin/hbs',
            'i18nprecompile': '../components/require-handlebars-plugin/hbs/i18nprecompile',
            'json2': '../components/require-handlebars-plugin/hbs/json2',

            //Bootstrap plugins
            'bs.affix': '../components/sass-bootstrap/assets/javascripts/bootstrap/affix',
            'bs.alert': '../components/sass-bootstrap/assets/javascripts/bootstrap/alert',
            'bs.button': '../components/sass-bootstrap/assets/javascripts/bootstrap/button',
            'bs.carousel': '../ccomponents/sass-bootstrap/assets/javascripts/bootstrap/carousel',
            'bs.collapse': '../components/sass-bootstrap/assets/javascripts/bootstrap/collapse',
            'bs.dropdown': '../components/sass-bootstrap/assets/javascripts/bootstrap/dropdown',
            'bs.modal': '../components/sass-bootstrap/assets/javascripts/bootstrap/modal',
            'bs.popover': '../components/sass-bootstrap/assets/javascripts/bootstrap/popover',
            'bs.scrollspy': '../components/sass-bootstrap/assets/javascripts/bootstrap/scrollspy',
            'bs.tab': '../components/sass-bootstrap/assets/javascripts/bootstrap/tab',
            'bs.tooltip': '../components/sass-bootstrap/assets/javascripts/bootstrap/tooltip',
            'bs.transition': '../components/sass-bootstrap/assets/javascripts/bootstrap/transition',
            'bs.typeahead': '../components/sass-bootstrap/assets/javascripts/bootstrap/typeahead',

            //Common
            'vent': 'common/vent',
            'endpoints': 'common/endpoints'
        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'underscore': {
                deps: ['jquery'],
                exports: '_'
            },
            'backbone': {
                deps: ['underscore'],
                exports: 'Backbone'
            },
            'marionette': {
                deps: ['backbone'],
                exports: 'Backbone.Marionette'
            },
            'handlebars': {
                exports: 'Handlebars'
            },
            'hbs': {
                deps: ['handlebars']
            },
            'jquery-validation': {
                deps: ['jquery']
            },
            'masonry': {
                deps: ['jquery']
            },
            'bs.transition': ['jquery'],
            'bs.affix': ['jquery', 'bs.transition'],
            'bs.alert': ['jquery', 'bs.transition'],
            'bs.button': ['jquery', 'bs.transition'],
            'bs.carousel': ['jquery', 'bs.transition'],
            'bs.collapse': ['jquery', 'bs.transition'],
            'bs.dropdown': ['jquery', 'bs.transition'],
            'bs.modal': ['jquery', 'bs.transition'],
            'bs.popover': ['jquery', 'bs.transition'],
            'bs.scrollspy': ['jquery', 'bs.transition'],
            'bs.tab': ['jquery', 'bs.transition'],
            'bs.tooltip': ['jquery', 'bs.transition'],
            'bs.typeahead': ['jquery', 'bs.transition']
        },

        hbs: {
            disableI18n: true
        }
    };
});
