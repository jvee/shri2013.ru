;(function (window, $, App) {

	App.vents = _.extend({}, Backbone.Events);

	App.app = new App.AppView({
		data : App.data,
		el: document.getElementById('app')
	});

	App.router = new App.Router();
	Backbone.history.start({pushState: false});

})(this, jQuery, App = window.App || {}, undefined);