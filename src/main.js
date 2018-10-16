$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/hompepage');
var About = require('./components/about');
var Authors = require('./components/authors/authorpage');
var Header = require('./commons/header');

(function(win){

"use strict";
var App = React.createClass({
    render: function(){
        
        var Child;

        switch(this.props.route){
            case 'about': Child = About; break;
            case 'author': Child = Authors; break;
            default : Child = Home; 
        }
        return (
            <div>       
                <Header/>
                <Child/>
            </div>
        );
    }
});

var render = function(){

    var route = win.location.hash.substr(1);

    console.log(route);
    React.render(<App route={route}/>, document.getElementById('app'));    
};

win.addEventListener('haschange', render);
render();

})(window);