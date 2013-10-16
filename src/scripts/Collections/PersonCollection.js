;(function (window, $, App) {

	'use strict';

	App.PersonCollection = Backbone.Collection.extend({

		model: App.PersonModel,

		comparator: 'name',

		initialize: function (data, options) {
			this.localStorage = options.localStorage;
		}

	});

})(this, jQuery, App = window.App || {}, undefined);