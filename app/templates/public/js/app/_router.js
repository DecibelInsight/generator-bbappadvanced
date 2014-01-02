/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(['marionette', 'Controllers/Controller'],

    function(Marionette, Controller) {

        'use strict';

        return Marionette.AppRouter.extend({
            //"index" must be a method in AppRouter's controller
            appRoutes: {
                '': 'index'
            }
        });
    }
);