"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var UserList = require('./userList');
var Router = require('react-router');
var Link = require('react-router').Link;

var UserPage = React.createClass({

	getInitialState: function()
	{

		return {
			users: UserStore.getAllUsers()
		};
	},

	componentWillMount: function()
	{
		UserStore.addChangeListener(this._onChange);
	},

	componentWillUnMount: function()
	{
		UserStore.removeChangeListener(this._onChange);
	},

	_onChange: function()
	{
		this.setState({ users: UserStore.getAllUsers() });
	},

	render: function()
	{

		return (
				<div>
					<h1>Users</h1>
					<Link to="adduser"> Add User</Link> 
					<UserList users={this.state.users} />				
				</div>
			);
	}
});

module.exports = UserPage;