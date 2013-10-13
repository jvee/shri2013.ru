;(function (window, $, App) {

	'use strict';

	App.AppView = Backbone.View.extend({

		el: document.body,

		template: App.templates['AppTemplate'],

		initialize: function (options) {
			this.menu = new App.MenuCollection(options.data.menu || []);
			this.menuView = new App.MenuView({ collection: this.menu });

			this.pages = {};

			this.parsePages(options.data.pages);
			this.bindEvents();
			this.render();

			this.$headerEl = this.$('.b-header');
			this.headerEl = this.$headerEl[0];
			this.headerEl.appendChild(this.menuView.render().el);

			this.$pageEl = this.$('.b-page');
			this.pageEl = this.$pageEl[0];

			this.renderPage(this.menu.where({active: true})[0]);
		},

		bindEvents: function () {
			if (App.vents) {
				App.vents.on('app.memnu-item-activated', this.renderPage ,this);
			}
		},

		parsePages: function (pages) {
			var x;

			for (x = 0; x < pages.length; x++) {
				this.pages[pages[x].url] = new App[pages[x].type](pages[x].data);
			}
		},

		render: function () {
			this.el.innerHTML = this.template();

			return this;
		},

		renderPage: function (activeMenuItem) {
			var url = activeMenuItem.get('url'),
				viewType = activeMenuItem.get('type'),
				pageView = new App[viewType](),
				page = this.pages[url];

			if (this.currentPageView) this.currentPageView.remove();
			if (page instanceof Backbone.Model)	pageView.model = page;
			if (page instanceof Backbone.Collection) pageView.collection = page;

			this.currentPageView = pageView;

			this.pageEl.appendChild(pageView.render().el);
		}
	});

})(this, jQuery, App = window.App || {}, undefined);