App.AppView = Backbone.View.extend({

	el: document.body,

	template: tmpl['AppTemplate'],

	render: function () {
		this.el.innerHTML = this.template();

		return this;
	}
});