"use strict";

var React = require('react');
var Router = require('react-router');
var UserForm = require('./userForm');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var toastr = require('toastr');

var ManageUserPage = React.createClass({
	mixins: [
		Router.Navigation
	],
	getInitialState: function()
	{
		return {
			user: { id: '', firstName: '', lastName: '' },
			errors: {}
			};
	},

	componentWillMount: function()
	{
		var userId = this.props.params.id;
		if(userId)
		{
			this.setState({user: UserStore.getUserById(userId)});
		}
	},

	setUserState: function(event)
	{
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field] = value;
		return this.setState({user: this.state.user});
	},

	userFormIsValid: function()
	{

		var formIsValid = true;
		this.state.errors = {};

		if (this.state.user.firstName.length < 3)
		{
			this.state.errors.firstName = "First name must be of atleast 3 characters.";
			formIsValid = false;
		}
		if (this.state.user.lastName.length < 3)
		{
			this.state.errors.lastName = "Last name must be of atleast 3 characters.";
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveUser: function(event)
	{
		event.preventDefault();
		if (!this.userFormIsValid())
		{
			return;
		}
		if(this.state.user.id)
		{
			UserActions.updateUser(this.state.user);
		}
		else
		{
			UserActions.createUser(this.state.user);
		}
		toastr.success('User Saved.');
		this.transitionTo('users');
	},

	render: function() {

		return (
			<UserForm user = {this.state.user} onChange = {this.setUserState} onSave = {this.saveUser} errors = {this.state.errors}> </UserForm>
			);
	}
});

module.exports = ManageUserPage;