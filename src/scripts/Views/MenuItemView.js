App.MenuItemView = Backbone.View.extend({

	tagName: 'li',

	className: 'b-menu-item',

	template: tmpl['MenuItemTemplate'],

	events: {
		'click .b-menu-item__link': 'setActive'
	},

	initialize: function () {
		this.model.on('change', this.render, this);
	},

	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());

		return this;
	},

	setActive: function (event) {
		if (event) event.preventDefault();

		var isActive = this.model.get('active');

		if (isActive) return;

		this.model.set('active', true);

		if (App.vents) App.vents.trigger('app.memnu-item-activated', this);
	}
});