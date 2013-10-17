;(function (window, $, App) {

	'use strict';

	App.LectureCollection = Backbone.Collection.extend({

		model: App.LectureModel,

		comparator: 'title',

		initialize: function (data, options) {
			this.localStorage = options && options.localStorage;
		}

	});

})(this, jQuery, App = window.App || {}, undefined);