/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(['jquery', 'backbone'],

    function ($, Backbone) {

        'use strict';

        // Creates a new Backbone Model class object
        var Model = Backbone.Model.extend({

            initialize: function () {

            },

            // Default values for all of the Model attributes
            defaults: {

            },

            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function (attrs) {

            }

        });

        return Model;
    }
);