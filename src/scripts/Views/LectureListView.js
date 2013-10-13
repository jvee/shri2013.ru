App.LectureListView = Backbone.View.extend({

	tagName: 'section',

	className: 'b-lecture-list',

	render: function () {
		this.collection.each(this.addLecture, this);

		return this;
	},

	addLecture: function (model) {
		var personView = new App.LectureView({ model: model});

		this.el.innerHTML += personView.render().el.innerHTML;

		return this;
	}

});