/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

require.config({

    baseUrl: './js/app',

    paths: {
        // Core Libraries
        'jquery'                : '../bower_components/jquery/jquery',
        'underscore'            : '../bower_components/lodash/lodash',
        'backbone'              : '../bower_components/backbone/backbone',
        'marionette'            : '../bower_components/backbone.marionette/lib/backbone.marionette',
        'handlebars'            : '../bower_components/hbs/Handlebars',
        'hbs'                   : '../bower_components/hbs/hbs',
        'json2'                 : '../bower_components/hbs/hbs/json2',
        'i18nprecompile'        : '../bower_components/hbs/hbs/i18nprecompile',
        'jasmine'               : '../bower_components/jasmine/lib/jasmine-core/jasmin',
        'jasmine-html'          : '../bower_components/jasmine/lib/jasmine-core/jasmin-html',
        
        'prefixfree'            : '../libs/prefixfree',

        // Plugins
        'bootstrap'     : '../bower_components/bootstrap/dist/js/bootstrap',
    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {
        'backbone' : {
            'deps' : ['underscore'],
            'exports' : 'Backbone' // Exports the global window.Backbone object
        },
        'marionette' : {
            'deps' : ['underscore', 'backbone', 'jquery'],
            'exports' : 'Marionette' // Exports the global window.Marionette object
        },
        'bootstrap' : {
            'deps' : ['jquery']
        }
    },
    // hbs config - must duplicate in Gruntfile.js Require build
    hbs: {
        disableI18n         : true,
        templateExtension   : 'html',
        helperDirectory     : 'Helpers/Handlebars/',
        i18nDirectory       : 'Helpers/i18n/',
        compileOptions      : {}                          // options object which is passed to Handlebars compiler
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['<%= _.capitalize(appName) %>', '<%= _.capitalize(appName) %>.router', 'Controllers/Controller', 'jquery', 'backbone', 'marionette', 'bootstrap'],
    
    function (App, AppRouter, Controller) {

        'use strict';

        App.appRouter = new AppRouter({
            controller: new Controller()
        });

        App.start();

    }
);