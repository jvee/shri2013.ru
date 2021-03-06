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
					this.testTemplate += '<div class="b-person-li b-block">';
					this.testTemplate += App.templates.PersonListItemTemplate(fixtures.persons[x]);
					this.testTemplate += '</div>';
				}

				persons.render();

			});

			test('should render layout', function () {
				assert.equal(persons.el.innerHTML, this.testTemplate, 'right HTML');
			});

			test('should return this', function () {
				assert.equal(persons.render(), persons, 'PersonListView object');
			});

			test('should call method #addOne()', function () {

				persons.addOne = sinon.stub();
				persons.render();

				assert.ok(persons.addOne.calledThrice);

			});

		});

		suite('#addOne', function () {

			test('should return this', function () {
				assert.equal(persons.addOne(models.first()), persons, 'PersonListView object');
			});

		});

	});

});