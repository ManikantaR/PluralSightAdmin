"use strict";

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFNotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
        <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/hompepage')}/>
        <Route name="authors" handler={require('./components/authors/authorpage')}/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about')}/>
        <NotFNotFoundRoute handler={require('./components/notFoundPage')}></NotFNotFoundRoute>
        <Redirect from="about-us" to="about"/>
    </Route>
);

module.exports = routes;