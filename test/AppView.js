suite('AppView', function () {

	setup(function () {
		this.renderSpy = sinon.spy(App.AppView.prototype, 'render');
		this.parsePagesSpy = sinon.spy(App.AppView.prototype, 'parsePages');

		this.app = new App.AppView({
			el: document.createElement('body'),
			data: App.data
		});
	});

	teardown(function () {
		this.renderSpy.restore();
		this.parsePagesSpy.restore();
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.AppView, 'as global var');
			assert.typeOf(App.AppView, 'function', 'as constructor');
		});
	});

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
			assert.typeOf(this.app.pages, 'array');
		});

		test('should call methods', function () {
			assert.ok(this.renderSpy.calledOnce, '#render()');
			assert.ok(this.parsePagesSpy.calledOnce, '#parsePages()');
		});

		test('should add content', function () {
			assert.notEqual(this.app.headerEl.innerHTML, 'to #headerEl');
		});

	});

	suite('#parsePages', function () {

		setup(function () {
			console.log(this.app.pages);
		});

		test('should update #pages.length', function () {
			assert.notEqual(this.app.pages.length, 0);
		});

	});

	suite('#render()', function () {

		setup(function () {
			this.app.render();
		});

		test('should render', function () {
			assert.equal(this.app.el.innerHTML, tmpl.AppTemplate(), 'right HTML');
		});

		test('should return', function () {
			assert.equal(this.app.render(), this.app, 'AppView object');
		});

	});

});