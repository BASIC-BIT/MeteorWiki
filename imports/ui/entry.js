import { Template } from 'meteor/templating';

import { Entries } from '../api/entries.js';

import { Session } from 'meteor/session';

import './entry.html';

Template.wikiEntry.onCreated(function() {
  Meteor.subscribe('entry', Session.get('postId'));
});

Template.wikiEntry.helpers({
  entry() {
    var postId = Session.get('postId');
    var entry = Entries.findOne(postId);
    return entry
  }

});


FlowRouter.route('/entry/:postId/', {
  action: function(params){
    Session.set('postId', params.postId)
    BlazeLayout.render('wikiLayout', {content: 'wikiEntry'})
  },
  name:"Entry"
});
