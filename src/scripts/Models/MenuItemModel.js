;(function (window, $, App) {

	'use strict';

	App.MenuItemModel = Backbone.Model.extend({

		defaults: {
			index : 0,
			title: '',
			url: '/',
			type: 'StaticView',
			active: false
		}

	});

})(this, jQuery, App = window.App || {}, undefined);