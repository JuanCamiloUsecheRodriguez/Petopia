import React, { Component } from 'react';
import  PetCard  from './PetCard.js';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


import {Pet} from '../api/pet.js';

class ViewPets extends Component {

    constructor(props){
        super(props);
    
        this.state={

        }
    }

    renderPets(){
        return this.props.pets.map((r,i)=>{
            let desc = 'Im a very '+r.petsonality+' cat who loves '+r.likes+'. I dislike '+r.dislikes+', I am '+r.ageYears+' years and '+r.ageMonths+' months old.' ;

            return(
                <div class="col-sm">
                <PetCard
                key={i}
                image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                name={ r.name}
                description =  {desc}
                idPet={r._id}
                responsibleId={r.responsibleId}
                />
                </div>
                
            );
        })
    };



  render() {
    return (

        <div class="container">
        <div class="row">
            {this.renderPets()}
        </div>
    </div>
      
    )
  }
}

ViewPets.propTypes ={
    pets: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('pets');
    return{
        pets: Pet.find({}).fetch(),
    };
})(ViewPets);