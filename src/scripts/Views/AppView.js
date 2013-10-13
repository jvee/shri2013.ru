;(function (window, $, App) {

	'use strict';

	App.AppView = Backbone.View.extend({

		el: document.body,

		template: tmpl['AppTemplate'],

		initialize: function (options) {
			this.menu = new App.MenuCollection(options.data.menu || []);
			this.menuView = new App.MenuView({ collection: this.menu });

			this.pages = [];
			this.parsePages(options.data.pages);

			this.render();

			this.$headerEl = this.$('.b-header');
			this.headerEl = this.$headerEl[0];
			this.headerEl.appendChild(this.menuView.render().el);

			this.$pageEl = this.$('.b-page');
			this.pageEl = this.$pageEl[0];
		},

		parsePages: function (pages) {
			var x, page;

			for (x = 0; x < pages.length; x++) {
				page = {};
				page[pages[x].url] = new App[pages[x].type](pages[x].data);
				this.pages.push(page);
			}
		},

		render: function () {
			this.el.innerHTML = this.template();

			return this;
		}
	});

})(this, jQuery, App = window.App || {}, undefined);