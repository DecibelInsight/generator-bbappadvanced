/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define([ 'marionette', 'handlebars', '<%= _.capitalize(appName) %>.templates'],

    function (Marionette, Handlebars, Templates) {

        'use strict';

        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({

            template: Templates.home,

            el: $('#app'),

            ui : {
            },

            events : {
                'click #btn' : 'clickHandler'
            },

            clickHandler: function(event) {
                event.preventDefault();
                alert('You clicked It!');
            }

        });

    }

);