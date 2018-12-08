"use strict";

var React = require('react');
var routes = require('./route');
var Router = require('react-router');
var App = require('./components/app');
var InitializeActions = require('./actions/initializeActions');


InitializeActions.initialize();

Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});
