suite('PersonCollection', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.PersonCollection, 'as "App" namespace var');
			assert.typeOf(App.PersonCollection, 'function', 'as constructor');
		});

	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				var person = new App.PersonCollection();
			});

			test('should have right sorting', function () {
				var person = new App.PersonCollection([
						fixtures.person1,
						fixtures.person2,
						fixtures.person3
					]);

				var personModels = person.toJSON();

				assert.deepEqual(personModels[0], fixtures.person3);
				assert.deepEqual(personModels[1], fixtures.person1);
				assert.deepEqual(personModels[2], fixtures.person2);
			});

		});

	});

});