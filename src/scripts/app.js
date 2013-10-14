;(function (window, $, App) {

	App.Router = Backbone.Router.extend({

		routes: {
			'': 'index',
			'students/': 'students',
			'lectures/': 'lectures'
		},

		initialize: function () {
			App.vents.on('app.navigate', this.navigate, this);
		},

		index: function () {
			App.vents.trigger('app.route', '/');
		},

		students: function () {
			App.vents.trigger('app.route', '/students/');
		},

		lectures: function () {
			App.vents.trigger('app.route', '/lectures/');
		}

	});

	

	App.vents = _.extend({}, Backbone.Events);

	App.app = new App.AppView({
		data : App.data,
		el: document.getElementById('app')
	});

	App.router = new App.Router();
	Backbone.history.start({pushState: false});

})(this, jQuery, App = window.App || {}, undefined);