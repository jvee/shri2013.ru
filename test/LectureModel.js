suite('LectureModel', function () {

	suite('Common', function () {

		test('should exist', function () {
			assert.isNotNull(App.LectureModel, 'as App namespace var');
			assert.typeOf(App.LectureModel, 'function', 'as constructor');
		});

	});

	suite('Methods', function () {

		suite('#initialize()', function () {

			test('should have right defaults', function () {
				var lecture = new App.LectureModel();

				assert.equal(lecture.get('title'), '', 'title');
				assert.equal(lecture.get('description'), '', 'description');
				assert.equal(lecture.get('presentationUrl'), '', 'presentationUrl');
				assert.deepEqual(lecture.get('videoUrl'), '', 'videoUrl');
			});

			test('should accept right data', function () {
				var fixture = fixtures.lecture1,
					lecture = new App.LectureModel(fixture);

				assert.equal(lecture.get('title'), fixture.title, 'title');
				assert.equal(lecture.get('description'), fixture.description, 'description');
				assert.equal(lecture.get('presentationUrl'), fixture.presentationUrl, 'presentationUrl');
				assert.deepEqual(lecture.get('videoUrl'), fixture.videoUrl, 'videoUrl');

			});

		});

	});

});