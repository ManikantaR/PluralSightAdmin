
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../consants/appConstants');
var AuthorApi = require('../api/authorapi');

var AuthorActions = {
    updateAuthor: function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    createAuthor: function(author){
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    deleteAuthor: function(id){
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;
