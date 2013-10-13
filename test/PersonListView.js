suite('PersonListView', function () {

	setup(function () {
		models = new Backbone.Collection(fixtures.persons);
		persons = new App.PersonListView({ collection: models });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.PersonListView, 'as global var');
			assert.typeOf(App.PersonListView, 'function', 'as constructor');
		});
	});

	suite('Methods', function () {

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
					this.testTemplate += '<article class="b-person">';
					this.testTemplate += App.templates.PersonTemplate(fixtures.persons[x]);
					this.testTemplate += '</article>';
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

});