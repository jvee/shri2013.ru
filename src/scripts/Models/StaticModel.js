;(function (window, $, App) {

	'use strict';

	App.StaticModel = Backbone.Model.extend({

		initialize: function (data, options) {
			this.localStorage = options.localStorage;
			this.id = this.localStorage.name;
			if (!data) {
				this.set('content', $.parseJSON(localStorage[this.id + '-' + this.id]));
			} else {
				this.save();
			}
		}

	});

})(this, jQuery, App = window.App || {}, undefined);