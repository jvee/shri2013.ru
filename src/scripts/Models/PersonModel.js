;(function (window, $, App) {

	'use strict';

	App.PersonModel = Backbone.Model.extend({

		defaults: {
			name : '',
			photo: '',
			about: '',
			profiles: {}
		},

		initialize: function (attrs, options) {
			if (attrs && attrs.name) this.id = this.get('name').replace(/\s/g, '_');
		}

	});

})(this, jQuery, App = window.App || {}, undefined);