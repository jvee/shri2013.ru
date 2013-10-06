suite('PersonModel', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.PersonModel, 'as App namespace var');
			assert.typeOf(App.PersonModel, 'function', 'as constructor');
		});

	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			var person = new App.PersonModel();

			assert.equal(person.get('name'), '', 'name');
			assert.equal(person.get('photo'), '', 'photo');
			assert.equal(person.get('about'), '', 'about');
			assert.deepEqual(person.get('profiles'), {}, 'profiles');
		});

		test('should accept right data', function () {
			var fixture = fixtures.person1,
				person = new App.PersonModel(fixture);

			assert.equal(person.get('name'), fixture.name, 'name');
			assert.equal(person.get('photo'), fixture.photo, 'photo');
			assert.equal(person.get('about'), fixture.about, 'about');
			assert.deepEqual(person.get('profiles'), fixture.profiles, 'profiles');

		});

	});

});