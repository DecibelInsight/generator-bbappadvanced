/*!
 * <%= _.capitalize(appName) %>
 * Author: <%= _.capitalize(author) %>
 */

define(['jquery', 'backbone', 'Models/Model'],

	function ($, Backbone, Model) {

		'use strict';

		// Creates a new Backbone Collection class object
		var Collection = Backbone.Collection.extend({

			// Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
			model: Model

		});

		return Collection;

	}
);