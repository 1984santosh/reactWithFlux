"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name = "app" path = "/" handler = {require('./components/app')} >
		<DefaultRoute handler = {require('./components/homePage')} />
		<Route name = "users" handler = {require('./components/users/user')} />
		<Route name = "adduser" path="user" handler = {require('./components/users/manageUsers')} />
		<Route name = "manageUser" path="user/:id" handler = {require('./components/users/manageUsers')} />
		<NotFoundRoute handler = {require('./components/notFoundPage')} />
		<Route name = "learn" handler = {require('./components/Learn/learnPage')} />
	</Route>
	);

module.exports = routes;