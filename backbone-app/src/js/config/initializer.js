define([
    'jquery'
], function ($) {
    'use strict';

    return function () {
        this.addRegions({
            body: 'body'
        });

        $.ajaxSetup({
            cache: false,
            crossDomain: true,
            dataType: 'jsonp'
        });
    };
});