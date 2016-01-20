"use strict";

var React = require('react');
var Input = require('../common/textInput');

var UserForm = React.createClass({

	propTypes: {
		user: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {

		return (
				<form>
					<h1>Manage User</h1>
					<Input name="firstName" label="First Name" value={this.props.user.firstName}
						onChange={this.props.onChange} placeholder="Fist Name" error={this.props.errors.firstName} />
					<Input name="lastName" label="Last Name" value={this.props.user.lastName}
						onChange={this.props.onChange} placeholder="Last Name" error={this.props.errors.lastName} />
					<input type="submit" value="save" className="btn btn-primary btn-lg" onClick={this.props.onSave} />
				</form>
			);
	}
});

module.exports = UserForm;