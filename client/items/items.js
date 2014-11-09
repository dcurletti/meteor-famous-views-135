Template.items.helpers({
	items: function () {
		return Items.find();
	}
});


Template.item.events({
	'click': function () {
		console.log(this._id)
		Router.go('itemDetail', {_id: this._id})
	}
});
