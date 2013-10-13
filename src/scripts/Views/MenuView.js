App.MenuView = Backbone.View.extend({

	tagName: 'ul',

	className: 'b-menu',

	render: function () {
		this.collection.each(this.addItem, this);

		return this;
	},

	addItem: function (model) {
		var menuItemView = new App.MenuItemView({ model: model});

		this.el.appendChild(menuItemView.render().el);

		return this;
	}

});