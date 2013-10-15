;(function (window, $, App) {

	App.Router = Backbone.Router.extend({

		routes: {
			'': 'index',
			'students/': 'students',
			'students/:name': 'students',
			'lectures/': 'lectures'
		},

		initialize: function () {
			App.vents.on('app.navigate', this.navigate, this);
		},

		index: function () {
			App.vents.trigger('app.route', '/');
		},

		students: function (name) {
			App.vents.trigger('app.route', '/students/', name);
		},

		lectures: function () {
			App.vents.trigger('app.route', '/lectures/');
		}

	});

})(this, jQuery, App = window.App || {}, undefined);