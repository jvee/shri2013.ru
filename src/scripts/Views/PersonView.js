;(function (window, $, App) {

	'use strict';

	App.PersonView = Backbone.View.extend({

		tagName: 'article',

		className: 'b-person b-block',

		template: App.templates['PersonTemplate'],

		render: function () {
			var data = $.extend({id: this.model.id}, this.model.toJSON());

			this.el.innerHTML = this.template(data);

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);