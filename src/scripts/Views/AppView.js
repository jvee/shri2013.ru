;(function (window, $, App) {

	'use strict';

	App.AppView = Backbone.View.extend({

		el: document.body,

		template: App.templates['AppTemplate'],

		initialize: function (options) {
			this.menu = new App.MenuCollection(options.data.menu || []);
			this.menuView = new App.MenuView({ collection: this.menu });
			this.popup = new App.PopupView();

			this.pages = {};

			this.parsePages(options.data.pages);
			this.bindEvents();
			this.render();

			this.$headerEl = this.$('.b-header');
			this.headerEl = this.$headerEl[0];
			this.headerEl.appendChild(this.menuView.render().el);

			this.$pageEl = this.$('.b-page');
			this.pageEl = this.$pageEl[0];
		},

		bindEvents: function () {
			if (App.vents) {
				App.vents.on('app.route', this.renderPage, this);
				App.vents.on('app.popup:show', function () {
					this.$el.addClass('is-popupped');
				}, this);
				App.vents.on('app.popup:close', function () {
					this.$el.removeClass('is-popupped');
				}, this);
			}
		},

		parsePages: function (pages) {
			var x, page;

			for (x = 0; x < pages.length; x++) {
				page = new App[pages[x].type](pages[x].data, {
					localStorage: new Backbone.LocalStorage(pages[x].url)
				});

				this.pages[pages[x].url] = page;

				page.fetch();
			}
		},

		render: function () {
			this.el.innerHTML = this.template();

			return this;
		},

		renderPage: function (activeMenuItem, subItemId) {
			var url, viewType, pageView, page, query = {}, model, index;

			if (typeof activeMenuItem === 'string') {
				activeMenuItem = this.menu.where({'url': activeMenuItem})[0];
			}

			url = activeMenuItem.get('url');
			viewType = activeMenuItem.get('type');
			pageView = new App[viewType]();
			page = this.pages[url];
			
			if (page instanceof Backbone.Model)	pageView.model = page;
			if (page instanceof Backbone.Collection) pageView.collection = page;

			if (this.currentPageView) this.currentPageView.remove();
			this.currentPageView = pageView;
			this.pageEl.appendChild(pageView.render(subItemId, url).el);
		}
	});

})(this, jQuery, App = window.App || {}, undefined);