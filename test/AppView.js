suite('AppView', function () {

	setup(function () {
		app = new App.AppView({
			el: document.createElement('body')
		});
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.AppView, 'as global var');
			assert.typeOf(App.AppView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(app.el.tagName.toLowerCase(), 'body', 'tagName');
			assert.typeOf(app.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			testTemplate = tmpl.AppTemplate();
			app.render();
		});

		test('should render', function () {
			assert.equal(app.el.innerHTML, testTemplate, 'right HTML');
		});

		test('should return', function () {
			assert.equal(app.render(), app, 'AppView object');
		});

	});

});