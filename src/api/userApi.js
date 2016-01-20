"use strict";

var users = require('./userData').users;
var _ = require('lodash');

var _generateId = function(user) {
	return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); 
};

var UserApi = {
	getAllUsers: function() {
		return _clone(users); 
	},

	getUserById: function(id) {
		var user = _.find(users, {id: id});
		return _clone(user);
	},
	
	saveUser: function(user) {		
		if (user.id) {
			var existingUserIndex = _.indexOf(users, _.find(users, {id: user.id})); 
			users.splice(existingUserIndex, 1, user);
		} else {
			user.id = _generateId(user);
			users.push(user);
		}

		return _clone(user);
	},

	deleteUser: function(id) {
		_.remove(users, { id: id});
	}
};

module.exports = UserApi;