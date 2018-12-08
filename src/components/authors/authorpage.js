"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorapi');
var Router = require('react-router');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../store/authorStore');

var Authors = React.createClass({
    getInitialState: function(){
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    
    componentDidMount: function(){
        if(this.isMounted){
            this.setState({ authors: AuthorStore.getAllAuthors()});        
        }        
    },     

    render: function(){       
        return (            
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
               <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = Authors;