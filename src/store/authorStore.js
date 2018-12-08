"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../consants/appConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _authors = [];
var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on('change', callback);
    },

    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },

    emitChange: function(){
        this.emit('change');
    },

    getAllAuthors: function(){
        return _authors;
    },

    getAuthorById: function(id){
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){

        case ActionTypes.CREATE_AUTHOR :
         _authors.push(action.author);
         AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;