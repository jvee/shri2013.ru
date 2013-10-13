;(function (window, $, App) {

	'use strict';

	App.LectureModel = Backbone.Model.extend({

		defaults: {
			title : '',
			lecturer: '',
			description: '',
			presentationUrl: '',
			videoUrl: ''
		}

	});

})(this, jQuery, App = window.App || {}, undefined);