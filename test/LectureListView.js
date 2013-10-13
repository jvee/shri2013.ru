suite('LectureListView', function () {

	setup(function () {
		models = new Backbone.Collection(fixtures.lectures);
		lectures = new App.LectureListView({ collection: models });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.LectureListView, 'as global var');
			assert.typeOf(App.LectureListView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(lectures.el.tagName.toLowerCase(), 'section', 'tagName');
			assert.equal(lectures.el.className, 'b-lecture-list', 'className');
			// assert.typeOf(person.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {
			this.testTemplate = '';

			for (var x = 0; x < fixtures.lectures.length; x++) {
				this.testTemplate += tmpl.LectureTemplate(fixtures.lectures[x]);
			}

			lectures.render();

		});

		test('should render layout', function () {
			assert.equal(lectures.el.innerHTML, this.testTemplate, 'right HTML');
		});

		test('should return this', function () {
			assert.equal(lectures.render(), lectures, 'LectureListView object');
		});

		test('should call method #addLecture()', function () {

			lectures.addLecture = sinon.stub();
			lectures.render();

			assert.ok(lectures.addLecture.calledThrice);

		});

	});

	suite('#addLecture', function () {

		test('should return this', function () {
			assert.equal(lectures.addLecture(models.first()), lectures, 'LectureListView object');
		});

	});

});