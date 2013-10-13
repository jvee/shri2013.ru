;(function (window, $, App) {

	'use strict';

	App.PersonView = Backbone.View.extend({

		tagName: 'article',

		className: 'b-person',

		template: App.templates['PersonTemplate'],

		render: function () {
			this.el.innerHTML = this.template(this.model.toJSON());

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);