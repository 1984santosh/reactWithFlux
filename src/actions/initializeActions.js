"use strict";


var Dispatcher = require('../dispatcher/appDispatcher');
var UserApi = require('../api/userApi');
var ActionTypes = require('../constants/actionTypes');

var initializeActions = {
	initApp: function(){
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			intialData: {
				users: UserApi.getAllUsers()
			}
		});
	}

};

module.exports = initializeActions;