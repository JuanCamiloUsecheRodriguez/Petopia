import {Mongo} from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');

if (Meteor.isServer) {
    Meteor.publish('chats', () => {
      return Chats.find({});
    });

    Meteor.publish('chatByID', function (pId) {
        return Chats.find({petId:pId});
    })  
}

Meteor.methods({
    'chat.add':function(pChat){
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
           }
        Chats.insert(pChat);
    }
});