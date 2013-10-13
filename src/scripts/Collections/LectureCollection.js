;(function (window, $, App) {

	'use strict';

	App.LectureCollection = Backbone.Collection.extend({

		model: App.LectureModel,

		comparator: 'title'

	});

})(this, jQuery, App = window.App || {}, undefined);