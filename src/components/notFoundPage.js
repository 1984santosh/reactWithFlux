"use strict";

var React = require('react');
var Link = require('react-router').Link;


var NotFoundPage = React.createClass({
	render: function(){

		return (
				<div>
					<h1>Page Not Found</h1>
					<p>Right Time Wrong Place!!!</p>
					<p><Link to="app">Back</Link></p>
				</div>
			);
	}

});

module.exports = NotFoundPage;