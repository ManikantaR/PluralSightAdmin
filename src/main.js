"use strict";

var React = require('react');
var routes = require('./route');
var Router = require('react-router');
var App = require('./components/app');
Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler/>, document.getElementById('app'));
});
