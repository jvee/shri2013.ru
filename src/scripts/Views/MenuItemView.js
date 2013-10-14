;(function (window, $, App) {

	'use strict';

	App.MenuItemView = Backbone.View.extend({

		tagName: 'li',

		className: 'b-menu-item',

		template: App.templates['MenuItemTemplate'],

		events: {
			'click .b-menu-item__link': 'setActive'
		},

		initialize: function () {
			this.model.on('change', this.render, this);
			if (App.vents) {
				App.vents.on('app.route', this.toggleActive, this);
			}
		},

		render: function () {
			this.el.innerHTML = this.template(this.model.toJSON());

			return this;
		},

		toggleActive: function (url) {
			if (this.model.get('url') === url) {
				this.model.set('active', true);
			} else {
				this.model.set('active', false);
			}
		},

		setActive: function (event) {
			if (event) event.preventDefault();

			var isActive = this.model.get('active');

			if (isActive) return;
		
			if (App.vents) {
				App.vents.trigger('app.navigate', this.model.get('url'),  {trigger: true});
			}

			this.model.set('active', true);
		}


	});

})(this, jQuery, App = window.App || {}, undefined);