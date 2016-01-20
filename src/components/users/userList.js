"use strict";

var React = require('react');
var Link = require('react-router').Link;
var UserActions = require('../../actions/userActions');
var toastr = require('toastr');

var UserList = React.createClass({

	propTypes: {

		users: React.PropTypes.array.isRequired
	},

	deleteUser: function(id, event)
	{
		event.preventDefault();
		UserActions.deleteUser(id);
		toastr.success('Deleted User');
	},

	render: function()
	{
		var createUserRow = function(user){
			return (
					<tr key={user.id}>						
						<td>{user.id}</td>
						<td>{user.firstName} {user.lastName}</td>
						<td><Link to="manageUser" params={{id: user.id}}> Edit </Link> &nbsp; <a href="#" onClick={this.deleteUser.bind(this, user.id)} > Delete </a> </td>
					</tr>
				);
		};

		return (
				<div>
					<table className="table table-bordered">
						<thead>
							<th>Id</th>
							<th>Name</th>
							<th>Action</th>
						</thead>
						<tbody>
							{this.props.users.map(createUserRow, this)}
						</tbody>
					</table>
				</div>
			);
	}
});

module.exports = UserList;