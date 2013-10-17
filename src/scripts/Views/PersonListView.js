;(function (window, $, App) {

	'use strict';

	App.PersonListView = Backbone.View.extend({

		tagName: 'section',

		className: 'b-person-list',

		render: function (id, url) {

			this.collection.each(this.addOne, this);

			if (id) this.showOne(id, url);

			return this;
		},

		addOne: function (model) {
			var personView = new App.PersonView({ model: model });

			this.el.appendChild(personView.render().el);

			return this;
		},

		showOne: function (id, url) {
			var view = new App.PersonView({model: this.collection.get(id)});

			if (App.vents) {
				App.vents.trigger('app.popup', view, url);
			}

		}

	});

})(this, jQuery, App = window.App || {}, undefined);