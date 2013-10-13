suite('LectureCollection', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.LectureCollection, 'as "App" namespace var');
			assert.typeOf(App.LectureCollection, 'function', 'as constructor');
		});

	});

	suite('#initialize()', function () {

		test('should have right defaults', function () {
			var lectures = new App.LectureCollection();
		});

		test('should have right sorting', function () {
			var lectures = new App.LectureCollection(fixtures.lectures);

			var lectureModels = lectures.toJSON();

			console.log(lectureModels);

			assert.deepEqual(lectureModels[0], fixtures.lecture3);
			assert.deepEqual(lectureModels[1], fixtures.lecture1);
			assert.deepEqual(lectureModels[2], fixtures.lecture2);
		});

	});

});