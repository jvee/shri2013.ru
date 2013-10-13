suite('MenuItemView', function () {

	setup(function () {

		if (!App.vents) App.vents = _.extend({}, Backbone.Events);

		model = new Backbone.Model(fixtures.menuItem1);
		menuItem = new App.MenuItemView({ model: model });

	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.MenuItemView, 'as global var');
			assert.typeOf(App.MenuItemView, 'function', 'as constructor');
		});
	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				assert.equal(menuItem.el.tagName.toLowerCase(), 'li', 'tagName');
				assert.equal(menuItem.el.className, 'b-menu-item', 'className');
				assert.typeOf(menuItem.template, 'function', 'template must be precompiled');
			});

		});

		suite('#render()', function () {

			setup(function () {
				testTemplate = App.templates.MenuItemTemplate(fixtures.menuItem1);
				menuItem.render();
			});

			test('should render', function () {
				assert.equal(menuItem.el.innerHTML, testTemplate, 'right HTML');
			});

			test('should return', function () {
				assert.equal(menuItem.render(), menuItem, 'MenuItemView object');
			});

		});

		suite('#setActive()', function () {

			setup(function () {
				this.notActiveMenuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem2)});
			});

			test('should set not active model to true', function () {
				this.notActiveMenuItem.setActive();
				assert.equal(this.notActiveMenuItem.model.get('active'), true);
			});

			test('should set active model to true', function () {
				menuItem.setActive();
				assert.equal(menuItem.model.get('active'), true);
			});

			test('should emmit app event', function () {
				var ventsSpy = sinon.spy(App.vents, 'trigger');
				this.notActiveMenuItem.setActive();

				assert.ok(ventsSpy.calledOnce);
				assert.deepEqual(ventsSpy.args[0], ['app.memnu-item-activated', this.notActiveMenuItem.model], 'with right arguments');

				ventsSpy.restore();
			});

		});

		suite('#deactivate()', function () {

			setup(function () {
				this.menuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem1)});
			});

			test('should change model\'s attr active to false', function () {
				this.menuItem.deactivate();
				assert.equal(this.menuItem.model.get('active'), false);
			});

			test('should do nothing if model attr same ass view model', function () {
				this.menuItem.deactivate(this.menuItem.model);
				assert.equal(this.menuItem.model.get('active'), true);
			});

		});

	});

	suite('Events', function () {

		test('should start #setActive on click event', function () {
			this.setActiveSpy = sinon.spy(App.MenuItemView.prototype, 'setActive');
			this.menuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem1)});
			this.menuItem.render().$el.find('.b-menu-item__link').click();
			
			assert.ok(this.setActiveSpy.calledOnce);

			this.setActiveSpy.restore();

		});

		test('shoud #render when is\'s models changed', function () {
			this.renderSpy = sinon.spy(App.MenuItemView.prototype, 'render');
			this.menuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem1)});
			this.menuItem.model.set('active', false);

			assert.ok(this.menuItem.render.calledOnce);

			this.renderSpy.restore();
		});

		test('should #deactivate on App.vent\'s "app.memnu-item-activated" event', function () {
			this.deactivateSpy = sinon.spy(App.MenuItemView.prototype, 'deactivate');
			this.menuItem = new App.MenuItemView({model: new Backbone.Model(fixtures.menuItem1)});
			App.vents.trigger('app.memnu-item-activated');

			assert.ok(this.deactivateSpy.calledOnce);

			this.deactivateSpy.restore();
		});

	});

});