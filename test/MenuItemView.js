suite('MenuItemView', function () {

	setup(function () {
		model = new Backbone.Model(fixtures.menuItem1);
		menuItem = new App.MenuItemView({ model: model });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.MenuItemView, 'as global var');
			assert.typeOf(App.MenuItemView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(menuItem.el.tagName.toLowerCase(), 'li', 'tagName');
			assert.equal(menuItem.el.className, 'b-menu-item', 'className');
			assert.typeOf(menuItem.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			testTemplate = tmpl.MenuItemTemplate(fixtures.menuItem1);
			menuItem.render();
		});

		test('should render', function () {
			assert.equal(menuItem.el.innerHTML, testTemplate, 'right HTML');
		});

		test('should return', function () {
			assert.equal(menuItem.render(), menuItem, 'MenuItemView object');
		});

	});

	suite('#setActive', function () {

		setup(function () {
			this.notActiveMenuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem2)});
		});

		test('should set', function () {
			this.notActiveMenuItem.setActive();
			menuItem.setActive();

			assert.equal(this.notActiveMenuItem.model.get('active'), true, 'not active model to true');
			assert.equal(menuItem.model.get('active'), true, 'active model to true');
		});

		test('should emmit app event', function () {
			// temporary there is no app.vents
		});

	});

	suite('Events', function () {


		test('should start #setActive on click event', function () {
			this.setActiveSpy = sinon.spy(App.MenuItemView.prototype, 'setActive');

			this.menuItemTemp = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem2)}).render();
			this.menuItemTemp.$el.find('.b-menu-item__link').click();
			
			assert.ok(this.menuItemTemp.setActive.calledOnce);

			this.setActiveSpy.restore();

		});

		test('shoud #render when is\'s models changed', function () {
			this.renderSpy = sinon.spy(App.MenuItemView.prototype, 'render');
			this.menuItemTemp = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem1)});
			this.menuItemTemp.model.set('active', false);

			assert.ok(this.menuItemTemp.render.calledOnce);

			this.renderSpy.restore();
			
		});

	});

});