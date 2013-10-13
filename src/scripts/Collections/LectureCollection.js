App.LectureCollection = Backbone.Collection.extend({

	model: App.LectureModel,

	comparator: 'title'

});