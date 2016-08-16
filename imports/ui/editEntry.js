import { Template } from 'meteor/templating';

import { Entries } from '../api/entries.js';

import { Session } from 'meteor/session';

import './editEntry.html';

Template.editEntry.onCreated(function() {
    Meteor.subscribe('entry', Session.get('postId'));
});

Template.editEntry.helpers({
  entry() {
    var postId = Session.get('postId');
    var entry = Entries.findOne(postId);
    return entry
  },
});

Template.editEntry.events({
	'submit .edit_entry': function(event) {
		event.preventDefault();
	    // Get value from form element
	    const target = event.target;
		var postId = Session.get('postId');
		var title = target.title.value
		var body = target.body.value
	    Entries.update(postId,
	     {$set: {'title' : title, 'body' : body, 'modifiedAt' : new Date()}},
	     {upsert: true}
	    	);
	    FlowRouter.go('/entry/:postId', {postId: postId});
	},
    'click .delete_button': function(event) {
        event.preventDefault();
        // Get value from form element
        const target = event.target;
        var postId = Session.get('postId');
        Entries.remove(postId);
        FlowRouter.go('/');
    }
})

FlowRouter.route('/entry/:postId/edit/', {
  action: function(params){
    Session.set('postId', params.postId)
    BlazeLayout.render('wikiLayout', {content: 'editEntry'})
  },
  name: "Edit"
});