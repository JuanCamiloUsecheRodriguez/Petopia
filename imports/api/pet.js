import {Mongo} from 'meteor/mongo';

export const Pet = new Mongo.Collection('pets');

if (Meteor.isServer) {
    Meteor.publish('pets', () => {
      return Pet.find({});
    });
}

Meteor.methods({
    'pets.add':function(pPet){
        Pet.insert(pPet);
    }
});