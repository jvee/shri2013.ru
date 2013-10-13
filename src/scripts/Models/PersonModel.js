;(function (window, $, App) {

	'use strict';

	App.PersonModel = Backbone.Model.extend({

		defaults: {
			name : '',
			photo: '',
			about: '',
			profiles: {}
		}

	});

})(this, jQuery, App = window.App || {}, undefined);