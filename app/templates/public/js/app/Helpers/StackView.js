define(['marionette'],

	function (Marionette) {

		'use strict';

		return Marionette.View.extend({
				
			hasRootView: false,
			
			// Define options for transitioning views in and out
			defaults: {
				inTransitionClass: 'slideInFromRight',
				outTransitionClass: 'slideOutToRight',
				animationClass: 'animated',
				transitionDelay: 1000,
				'class': 'stacks',
				itemClass: 'stack-item'
			},
			
			initialize: function(options) {
				this.views = [];
				options = options || {};
				this.options = _.defaults({}, this.defaults, options);
			},
			
			setRootView: function(view) {
				this.hasRootView = true;
				this.views.push(view);
				view.render();
				view.$el.addClass(this.options.itemClass);
				this.$el.append(view.$el);
			},

			render: function() {
				this.$el.addClass(this.options['class']);
				return this;
			},
			
			// Pop the top-most view off of the stack.
			pop: function() {
				var self = this;
				if(this.views.length > (this.hasRootView ? 1 : 0)) {
					var view = this.views.pop();
					this.transitionViewOut(view);
				}
			},
			
			// Push a new view onto the stack.
			// The itemClass will be auto-added to the parent element.
			push: function(view) {
				this.views.push(view);
				view.render();
				view.$el.addClass(this.options.itemClass);
				this.transitionViewIn(view);
				console.log(this.views);
			},
			
			// Transition the new view in.
			// This is broken out as a method for convenient overriding of
			// the default transition behavior. If you only want to change the 
			// animation use the trasition class options instead.
			transitionViewIn: function(view) {
				console.log('in', this.options);
				this.trigger('before:transitionIn', this, view);
				view.$el.addClass(this.options.inTransitionClass);
				this.$el.append(view.$el);
				
				// Wait a brief moment so it triggers the css transactions
				// If we don't delay, at least in my minimal testing, Chrome
				// does not animate the content but instead snaps-to-position.
				_.delay(function() {
					view.$el.addClass(this.options.animationClass);
					_.delay(function() {
						this.trigger('transitionIn', this, view);
					}.bind(this), this.options.transitionDelay);
				}.bind(this), 1);
			},
			
			// Trastition a view out.
			// This is broken out as a method for convenient overriding of
			// the default transition behavior. If you only want to change the 
			// animation use the trasition class options instead.
			transitionViewOut: function(view) {
				this.trigger('before:transitionOut', this, view);
				view.$el.addClass(this.options.outTransitionClass);
				_.delay(function() {
					view.close();
					this.trigger('transitionOut', this, view);
					console.log(this.views);
				}.bind(this), this.options.transitionDelay);
			}
			
		});
	}
);