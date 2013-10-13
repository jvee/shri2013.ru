App.PersonListView = Backbone.View.extend({

	tagName: 'section',

	className: 'b-person-list',

	render: function () {
		this.collection.each(this.addPerson, this);

		return this;
	},

	addPerson: function (model) {
		var personView = new App.PersonView({ model: model });

		this.el.appendChild(personView.render().el);

		return this;
	}

});