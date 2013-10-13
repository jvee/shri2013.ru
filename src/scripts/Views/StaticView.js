;(function (window, $, App) {

	App.StaticView = Backbone.View.extend({

		tagName: 'article',

		className: 'b-static b-text b-block',

		render: function () {
			this.el.innerHTML = this.model.get('content');

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);