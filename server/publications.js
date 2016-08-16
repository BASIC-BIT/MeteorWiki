import {Meteor} from 'meteor/meteor';

import { Entries } from '../imports/api/entries.js';

Meteor.publish('entry', function(_id) {
	return Entries.find(_id);
});

Meteor.publish('entries', function() {
	return Entries.find();
});