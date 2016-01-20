"use strict";

var React = require('react');

var About = React.createClass({


	render: function(){
		return (
			<div>
				<h1>Learn</h1>
				<p> Technologies used in this sample project:
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Browserify</li>
					<li>Bootstrap</li>
				</ul>
				To Learn more please visit this<a href="http://www.3pillarglobal.com/insights/getting-started-flux-react" target="_blank"> blog </a>
				</p>
				</div>
			);
	}
});

module.exports = About;