suite('PersonListView', function () {

	setup(function () {
		models = new Backbone.Collection(fixtures.persons);
		persons = new PersonListView({ collection: models });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(PersonListView, 'as global var');
			assert.typeOf(PersonListView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(persons.el.tagName.toLowerCase(), 'section', 'tagName');
			assert.equal(persons.el.className, 'b-person-list', 'className');
			// assert.typeOf(person.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			this.testTemplate = '';

			for (var x = 0; x < fixtures.persons.length; x++) {
				this.testTemplate += tmpl.PersonTemplate(fixtures.persons[x]);
			}

			persons.render();

		});

		test('should render layout', function () {
			assert.equal(persons.el.innerHTML, this.testTemplate, 'right HTML');
		});

		test('should return this', function () {
			assert.equal(persons.render(), persons, 'PersonListView object');
		});

		test('should call method #addPerson()', function () {

			persons.addPerson = sinon.stub();
			persons.render();

			assert.ok(persons.addPerson.calledThrice);

		});

	});

	suite('#addPerson', function () {

		test('should return this', function () {
			assert.equal(persons.addPerson(models.first()), persons, 'PersonListView object');
		});

	});

});