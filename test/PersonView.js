suite('PersonView', function () {

	setup(function () {
		model = new Backbone.Model(fixtures.person1);
		person = new App.PersonView({ model: model });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.PersonView, 'as global var');
			assert.typeOf(App.PersonView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(person.el.tagName.toLowerCase(), 'article', 'tagName');
			assert.equal(person.el.className, 'b-person', 'className');
			assert.typeOf(person.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			testTemplate = tmpl.PersonTemplate(fixtures.person1);
			person.render();
		});

		test('should render', function () {
			assert.equal(person.el.innerHTML, testTemplate, 'right HTML');
		});

		test('should return', function () {
			assert.equal(person.render(), person, 'PersonView object');
		});

	});

});