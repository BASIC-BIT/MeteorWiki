import {Template} from 'meteor/templating';

import {Entries} from '../api/entries.js';

import {Session} from 'meteor/session';

import './body.html';

FlowRouter.route('/', {
    action: function (params) {
        BlazeLayout.render('wikiLayout', {content: 'wikiLinkList', sortOrder: 'wikiLinkList_alphabetical'});
    },
    name: "Home"
});

FlowRouter.route('/sort/alpha', {
    action: function (params) {
        BlazeLayout.render('wikiLayout', {content: 'wikiLinkList', sortOrder: 'wikiLinkList_alphabetical'});
    },
    name: "Home"
});

FlowRouter.route('/sort/newest', {
    action: function (params) {
        BlazeLayout.render('wikiLayout', {content: 'wikiLinkList', sortOrder: 'wikiLinkList_newest'});
    },
    name: "Home"
});