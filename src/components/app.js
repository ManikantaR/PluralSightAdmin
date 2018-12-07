/*eslint-disable strict*/
$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./commons/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function(){
        return (
            <div>       
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;