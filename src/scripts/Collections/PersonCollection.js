App.PersonCollection = Backbone.Collection.extend({

	model: App.PersonModel,

	comparator: 'name'

});