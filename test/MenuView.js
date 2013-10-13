suite('MenuView', function () {

	setup(function () {
		models = new Backbone.Collection(fixtures.menu);
		menu = new App.MenuView({ collection: models });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.MenuView, 'as global var');
			assert.typeOf(App.MenuView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(menu.el.tagName.toLowerCase(), 'ul', 'tagName');
			assert.equal(menu.el.className, 'b-menu', 'className');
			// assert.typeOf(person.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			this.testTemplate = '';

			for (var x = 0; x < fixtures.menu.length; x++) {
				this.testTemplate += '<li class="b-menu-item">';
				this.testTemplate += App.templates.MenuItemTemplate(fixtures.menu[x]);
				this.testTemplate += '</li>';
			}

			menu.render();

		});

		test('should render layout', function () {
			assert.equal(menu.el.innerHTML, this.testTemplate, 'right HTML');
		});

		test('should return this', function () {
			assert.equal(menu.render(), menu, 'MenuView object');
		});

		test('should call method #addItem()', function () {

			menu.addItem = sinon.stub();
			menu.render();

			assert.ok(menu.addItem.calledThrice);

		});

	});

	suite('#addItem', function () {

		test('should return this', function () {
			assert.equal(menu.addItem(models.first()), menu, 'MenuView object');
		});

	});

});