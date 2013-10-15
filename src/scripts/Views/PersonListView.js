;(function (window, $, App) {

	'use strict';

	App.PersonListView = Backbone.View.extend({

		tagName: 'section',

		className: 'b-person-list',

		render: function (id) {
			if (id) return this.addOne(this.collection.get(id));

			this.collection.each(this.addOne, this);

			return this;
		},

		addOne: function (model) {
			var personView = new App.PersonView({ model: model });

			this.el.appendChild(personView.render().el);

			return this;
		}

	});

})(this, jQuery, App = window.App || {}, undefined);