import {Template} from 'meteor/templating';

import {Entries} from '../api/entries.js';

import {Session} from 'meteor/session';

import './entriesList.html';

Template.wikiLinkList.onCreated(function () {
    Meteor.subscribe('entries');
    Session.set("newest", false);

});

Template.wikiLinkList.helpers({
    newest() {
        return Session.get("newest");
    }
});

Template.wikiLinkList.events({
    // 'click #toggleSort': function (event) {
    //     event.preventDefault();
    //     var newest = Session.get("newest");
    //     if (newest) {
    //         Session.set("newest", false);
    //     } else {
    //         Session.set("newest", true);
    //     }
    //     BlazeLayout.setRoot('#wikiLinkList');
    //     BlazeLayout.render('wikiLinkList');
    // }
});

Template.wikiLinkList_newest.helpers({
    entries() {
        return Entries.find({}, {sort: {modifiedAt: -1}});
    }
});

Template.wikiLinkList_alphabetical.helpers({
    entries() {
        return Entries.find({}, {sort: {title: 1}});
    }
});

Template.wikiLinkEntryWithDate.helpers({
    dateNice() {
        var date = this.modifiedAt.toISOString().slice(0, 10);
        return date.toString();
    },
});

