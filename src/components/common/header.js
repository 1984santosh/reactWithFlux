"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function()
	{
		return (
				<nav className="navbar navbar-inverse">
					<div className="container">
						<ul className="nav navbar-nav">
							<li> <Link to="app">Home</Link> </li>
							<li> <Link to="users">Users</Link> </li>
							<li> <Link to="learn">Learn</Link> </li>
						</ul>
					</div>	
				</nav>
			);

	}
});

module.exports = Header;