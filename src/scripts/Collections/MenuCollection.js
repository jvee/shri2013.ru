;(function (window, $, App) {

	'use strict';

	App.MenuCollection = Backbone.Collection.extend({

		model: App.MenuItemModel,

		comparator: 'index'

	});

})(this, jQuery, App = window.App || {}, undefined);