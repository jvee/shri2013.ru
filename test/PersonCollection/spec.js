suite('PersonCollection', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(PersonCollection, 'as global var');
			assert.typeOf(PersonCollection, 'function', 'as constructor');
		});

	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			var person = new PersonCollection();
		});

		test('should have right sorting', function () {
			var person = new PersonCollection([
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