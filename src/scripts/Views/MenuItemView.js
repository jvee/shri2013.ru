;(function (window, $, App) {

	'use strict';

	App.MenuItemView = Backbone.View.extend({

		tagName: 'li',

		className: 'b-menu-item',

		template: tmpl['MenuItemTemplate'],

		events: {
			'click .b-menu-item__link': 'setActive'
		},

		initialize: function () {
			this.model.on('change', this.render, this);
			if (App.vents) {
				App.vents.on('app.memnu-item-activated', this.deactivate ,this);
			}
		},

		render: function () {
			this.el.innerHTML = this.template(this.model.toJSON());

			return this;
		},

		setActive: function (event) {
			if (event) event.preventDefault();

			var isActive = this.model.get('active');

			if (isActive) return;

			if (App.vents) App.vents.trigger('app.memnu-item-activated', this.model);
			this.model.set('active', true);
		},

		deactivate: function (activeMenuItemModel) {
			if (activeMenuItemModel && activeMenuItemModel === this.model) return;

			this.model.set('active', false);
		}


	});

})(this, jQuery, App = window.App || {}, undefined);