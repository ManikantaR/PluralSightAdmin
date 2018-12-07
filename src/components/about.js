"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
              if(!confirm('Do you want see this page')){
                  transition.abort();
              }
              else{
                  callback();
              }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Do you want Leave')){
                transition.abort();
            }
        }
    },

    render: function(){
        
        return ( 
            <div className="jumbotron">
            <h1>This is about page Mani</h1>       
            </div>
        );
    }
});

module.exports = About;

