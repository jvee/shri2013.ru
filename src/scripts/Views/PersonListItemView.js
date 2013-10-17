;(function (window, $, App) {

	'use strict';

	App.PersonListItemView = Backbone.View.extend({

		tagName: 'div',

		className: 'b-person-li b-block',

		template: App.templates['PersonListItemTemplate'],

		render: function () {
			var data = $.extend({id: this.model.id}, this.model.toJSON());

			this.el.innerHTML = this.template(data);

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);