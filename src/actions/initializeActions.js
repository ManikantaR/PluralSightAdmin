"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../consants/appConstants');
var AuthorApi = require('../api/authorapi');

var InitializeAction = {
    initialize: function(){        
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }            
        });
    }

};

module.exports = InitializeAction;
