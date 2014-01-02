/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(function (require) {
    
    'use strict';
    
    return {
        home    : require('hbs!Modules/General/Views/Templates/Home'),
        footer  : require('hbs!Modules/General/Views/Templates/Footer'),
        header  : require('hbs!Modules/General/Views/Templates/Header')
    };

});

