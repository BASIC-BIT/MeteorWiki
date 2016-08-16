import { Template } from 'meteor/templating';

import { Entries } from '../api/entries.js';

import { Session } from 'meteor/session';

import './addEntry.html';

Template.addEntry.helpers({
});

Template.addEntry.events({
	'submit .add_entry': function(event) {
		event.preventDefault();

	    const target = event.target;
		var title = target.title.value
		var body = target.body.value
	    var result = Entries.insert(
	     {'title' : title, 'body' : body, 'createdAt' : new Date(), 'modifiedAt' : new Date()}
	    );

	    FlowRouter.go('/entry/:postId', {postId : result});
	}
})

FlowRouter.route('/add', {
  action: function(params){
    BlazeLayout.render('wikiLayout', {content: 'addEntry'})
  },
  name: "Add"
});
