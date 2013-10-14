;(function (window, $, App) {

	'use strict';

	App.PersonListView = Backbone.View.extend({

		tagName: 'section',

		className: 'b-person-list',

		initialize: function () {
			if (App.vents) {
				App.vents.on('app.student', this.showOne, this);
			}
		},

		render: function () {
			this.collection.each(this.addPerson, this);

			return this;
		},

		addPerson: function (model) {
			var personView = new App.PersonView({ model: model });

			this.el.appendChild(personView.render().el);

			return this;
		},

		showOne: function (name) {
			var model = this.collection.findWhere({name: name});

			console.log(name, model);
			this.el.innerHTML = '';

			if (!model) return this;

			this.addPerson(model);

			return this;
		}

	});

})(this, jQuery, App = window.App || {}, undefined);