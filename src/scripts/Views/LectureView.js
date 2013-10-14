;(function (window, $, App) {

	'use strict';

	App.LectureView = Backbone.View.extend({

		tagName: 'article',

		className: 'b-lecture b-block',

		template: App.templates['LectureTemplate'],

		render: function () {
			this.el.innerHTML = this.template(this.model.toJSON());

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);