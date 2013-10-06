suite('PersonModel', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(PersonModel, 'as global var');
			assert.typeOf(PersonModel, 'function', 'as constructor');
		});

	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			var person = new PersonModel();

			assert.equal(person.get('name'), '', 'name');
			assert.equal(person.get('photo'), '', 'photo');
			assert.equal(person.get('about'), '', 'about');
			assert.deepEqual(person.get('profiles'), {}, 'profiles');
		});

		test('should accept right data', function () {
			var fixture = {
				name: 'Ivan',
				photo: 'http://url.ru/me.jpg',
				about: 'Some words',
				profiles: {
					github: 'https://github.com/ivan',
					vkontakte: 'http://vk.com/ivan',
					facebook: 'http://facebook.com/ivan'
				}
			};

			var person = new PersonModel(fixture);

			assert.equal(person.get('name'), fixture.name, 'name');
			assert.equal(person.get('photo'), fixture.photo, 'photo');
			assert.equal(person.get('about'), fixture.about, 'about');
			assert.deepEqual(person.get('profiles'), fixture.profiles, 'profiles');

		});	

	});

});