App.MenuCollection = Backbone.Collection.extend({

	model: App.MenuItemModel,

	comparator: 'index'

});