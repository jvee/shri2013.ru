;(function (window, $, App) {

	'use strict';

	App.PersonCollection = Backbone.Collection.extend({

		model: App.PersonModel,

		comparator: 'name'

	});

})(this, jQuery, App = window.App || {}, undefined);