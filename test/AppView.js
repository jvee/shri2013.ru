suite('AppView', function () {

	setup(function () {
		this.renderSpy = sinon.spy(App.AppView.prototype, 'render');
		this.parsePagesSpy = sinon.spy(App.AppView.prototype, 'parsePages');
		this.renderPageSpy = sinon.spy(App.AppView.prototype, 'renderPage');
		this.bindEventsSpy = sinon.spy(App.AppView.prototype, 'bindEvents');

		App.vents = _.extend({}, Backbone.Events);

		this.app = new App.AppView({
			el: document.createElement('body'),
			data: App.data
		});
	});

	teardown(function () {
		this.renderSpy.restore();
		this.parsePagesSpy.restore();
		this.bindEventsSpy.restore();
		this.renderPageSpy.restore();

		delete App.vents;
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.AppView, 'as global var');
			assert.typeOf(App.AppView, 'function', 'as constructor');
		});
	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				assert.equal(this.app.el.tagName.toLowerCase(), 'body', 'tagName');
				assert.typeOf(this.app.template, 'function', 'template must be precompiled');
			});

			test('should create attributes', function () {
				assert.ok(this.app.menu, '#menu');
				assert.ok(this.app.menu instanceof App.MenuCollection, '#menu as App.MenuCollection instance');
				assert.ok(this.app.menuView, '#menuView');
				assert.ok(this.app.menuView instanceof App.MenuView, '#menuView as App.MenuView instance');
				assert.ok(this.app.$pageEl, '#$pageEl');
				assert.ok(this.app.pageEl, '#pageEl');
				assert.ok(this.app.$headerEl, '#$headerEl');
				assert.ok(this.app.headerEl, '#headerEl');
				assert.ok(this.app.pages, '#pages');
				assert.typeOf(this.app.pages, 'object');
			});

			test('should call methods', function () {
				assert.ok(this.renderSpy.calledOnce, '#render()');
				assert.ok(this.parsePagesSpy.calledOnce, '#parsePages()');
				assert.ok(this.bindEventsSpy.calledOnce, '#bindEvents()');
			});

			test('should add content', function () {
				assert.notEqual(this.app.headerEl.innerHTML, '', 'to #headerEl');
			});

		});

		suite('#bindEvents()', function () {

			test('should call methods', function () {
				var spy = sinon.spy(App.vents, 'on');
				this.app.bindEvents();

				assert.equal(spy.calledOnce, true);

				spy.restore();
			});

		});

		suite('#parsePages()', function () {

			test('should update #pages.length', function () {
				assert.notEqual(this.app.pages.length, 0);
			});

		});

		suite('#renderPage()', function () {

			test('should set attributes', function () {
				assert.isNotNull(this.app.currentPageView, '#currentPageView');
			});

			test('should add content', function () {
				assert.notEqual(this.app.pageEl.innerHTML, '', 'to #headerEl');
			});

			test('should call methods', function () {
				var spy = sinon.spy(this.app.currentPageView, 'remove');
				this.app.renderPage(this.app.menu.models[2]);

				assert.equal(spy.calledOnce, true);

				spy.restore();
			});

		});

		suite('#render()', function () {

			setup(function () {
				this.app.render();
			});

			test('should render', function () {
				assert.equal(this.app.el.innerHTML, App.templates.AppTemplate(), 'right HTML');
			});

			test('should return', function () {
				assert.equal(this.app.render(), this.app, 'AppView object');
			});

		});

	});

	suite('Events', function () {
		
		test('should #renderPage on App.vent\'s "app.memnu-item-activated" event', function () {
			App.vents.trigger('app.memnu-item-activated', this.app.menu.models[2]);
			assert.ok(this.renderPageSpy.calledTwice);
		});

	});

});