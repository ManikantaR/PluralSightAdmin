"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({

    render: function(){
        return (
            <div>
                Page you're looking for is not available
                <Link to="app">Back Home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;