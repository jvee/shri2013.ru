suite('MenuCollection', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.MenuCollection, 'as "App" namespace var');
			assert.typeOf(App.MenuCollection, 'function', 'as constructor');
		});

	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				var menu = new App.MenuCollection();
			});

			test('should have right sorting', function () {
				var menu = new App.MenuCollection(fixtures.menu);

				var menuItemModels = menu.toJSON();

				assert.deepEqual(menuItemModels[0], fixtures.menuItem1);
				assert.deepEqual(menuItemModels[1], fixtures.menuItem2);
				assert.deepEqual(menuItemModels[2], fixtures.menuItem3);
			});

		});

	});

});