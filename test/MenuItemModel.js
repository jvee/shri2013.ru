suite('MenuItemModel', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.MenuItemModel, 'as App namespace var');
			assert.typeOf(App.MenuItemModel, 'function', 'as constructor');
		});

	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				var menuItem = new App.MenuItemModel();

				assert.equal(menuItem.get('index'), 0, 'index');
				assert.equal(menuItem.get('title'), '', 'title');
				assert.equal(menuItem.get('url'), '/', 'url');
				assert.equal(menuItem.get('type'), 'StaticView', 'profiles');
				assert.equal(menuItem.get('active'), false, 'active');
			});

			test('should accept right data', function () {
				var fixture = fixtures.menuItem1,
					menuItem = new App.MenuItemModel(fixture);

				assert.equal(menuItem.get('index'), fixture.index, 'index');
				assert.equal(menuItem.get('title'), fixture.title, 'title');
				assert.equal(menuItem.get('url'), fixture.url, 'url');
				assert.equal(menuItem.get('type'), fixture.type, 'type');
				assert.equal(menuItem.get('active'), fixture.active, 'active');

			});

		});

	});

});