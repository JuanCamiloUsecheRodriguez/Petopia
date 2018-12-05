import {Mongo} from 'meteor/mongo';

export const Pet = new Mongo.Collection('pets');

if (Meteor.isServer) {
    Meteor.publish('pets', () => {
      return Pet.find({inAdoption:true});
    });

    Meteor.publish('petByID', function (pId) {
        return Pet.find();
    })  
}

Meteor.methods({
    'pet.add':function(pPet){
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
          }
        Pet.insert(pPet);
    },
    'pets.adopted':function(idPet){
        
        Pet.update(
            { _id: idPet },
            {
                $set: {
                    inAdoption: false
                    }
            }
            );
    }
});