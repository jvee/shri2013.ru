;(function (window, $, App) {

	'use strict';

	App.LectureModel = Backbone.Model.extend({

		defaults: {
			title : '',
			lecturer: '',
			description: '',
			presentationUrl: '',
			videoUrl: ''
		},

		idAttribute: 'title',

		initialize: function (data, options) {
			if (!options.merge) this.save();
		}

	});

})(this, jQuery, App = window.App || {}, undefined);