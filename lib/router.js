Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
})


Router.map(function () {
	this.route('items', {path:'/items'})
});

Router.route('/items/:_id', {
	name: 'itemDetail', 
	data: function() {return Items.findOne(this.params._id)}
});