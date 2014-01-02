/*!
 * <%= _.capitalize(appName) %>
 * Author: 
 
 */

define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],

    function ($, Backbone, Marionette, _, Handlebars) {

        'use strict';

        var <%= _.capitalize(appName) %> = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        <%= _.capitalize(appName) %>.addRegions({
            mainRegion: '#app'
        });

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        <%= _.capitalize(appName) %>.mobile = isMobile();

        <%= _.capitalize(appName) %>.addInitializer(function (options) {
            Backbone.history.start();
        });

        return <%= _.capitalize(appName) %>;
    }
);