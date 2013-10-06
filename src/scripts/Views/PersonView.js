App.PersonView = Backbone.View.extend({

	tagName: 'article',

	className: 'b-person',

	template: tmpl['PersonTemplate'],

	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());

		return this;
	}
});