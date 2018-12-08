
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../consants/appConstants');
var AuthorApi = require('../api/authorapi');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
};

module.exports = AuthorActions;
