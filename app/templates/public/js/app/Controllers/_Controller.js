/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(['<%= _.capitalize(appName) %>', 'backbone', 'marionette', 'Modules/General/Views/HomeView', 'Modules/General/Views/HeaderView'],

    function (App, Backbone, Marionette, HomeView, HeaderView) {

        'use strict';

        return Backbone.Marionette.Controller.extend({

            initialize: function (options) {
                // App.headerRegion.show(new HeaderView());
            },

            //gets mapped to in AppRouter's appRoutes
            index: function () {
                var homeView = new HomeView();

                App.mainRegion.attachView(homeView);
                App.mainRegion.show(homeView);
            }
            
        });

    }
);