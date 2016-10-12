/**
 * Requirement.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type:'string'
    },
    version:{
      type:'string'
    },
    author: {
      type: 'string'
    },
    source:{
      type: 'string'
    },
    objective:{
      type: 'string'
    },
    descriptionforclient:{
      type: 'string'
    },
    descriptionforteam:{
      type: 'string'
    },
    specifics:{
     type: 'string'
    },
    timeinterval:{
      type: 'string'
    },
    importance:{
      type: 'string'
    },
    urgency: {
      type: 'string'
    },
    comments:{
      type: 'string'
    }
  }
};

