"use strict";

var React = require('react');
var Router	= require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function(){
		return (
				<div className="thumbnail">
					<h1> Learn React and Flux</h1>
					<p>React is a component library which is light weight. It focus just on templeting <br/>
						Flux is a pattern used for unidirectional data flow. Flux makes javascript application easy to grow and debug.
					</p>
					<a href="http://www.3pillarglobal.com/insights/getting-started-flux-react" target="_blank">Learn More </a>
				</div>
			);
	}

});

module.exports = Home;