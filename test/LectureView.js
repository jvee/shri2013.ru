suite('LectureView', function () {

	setup(function () {
		model = new Backbone.Model(fixtures.lecture1);
		lecture = new App.LectureView({ model: model });
	});

	suite('Common', function () {
		test('should exist', function () {
			assert.isNotNull(App.LectureView, 'as global var');
			assert.typeOf(App.LectureView, 'function', 'as constructor');
		});
	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			assert.equal(lecture.el.tagName.toLowerCase(), 'article', 'tagName');
			assert.equal(lecture.el.className, 'b-lecture', 'className');
			assert.typeOf(lecture.template, 'function', 'template must be precompiled');
		});

	});

	suite('#render()', function () {

		setup(function () {			
			testTemplate = tmpl.LectureTemplate(fixtures.lecture1);
			lecture.render();
		});

		test('should render', function () {
			assert.equal(lecture.el.innerHTML, testTemplate, 'right HTML');
		});

		test('should return', function () {
			assert.equal(lecture.render(), lecture, 'LectureView object');
		});

	});

});