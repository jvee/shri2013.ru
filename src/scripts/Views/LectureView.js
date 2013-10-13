App.LectureView = Backbone.View.extend({

	tagName: 'article',

	className: 'b-lecture',

	template: tmpl['LectureTemplate'],

	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());

		return this;
	}
});