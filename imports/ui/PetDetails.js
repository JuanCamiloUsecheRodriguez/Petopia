import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import {Pet} from '../api/pet.js';

 class PetDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            pet: 0
        }
        console.log(localStorage.getItem('idPet'))
        this.state.pet = localStorage.getItem('idPet');
        this.renderPetInfo= this.renderPetInfo.bind(this);
    }

    renderPetInfo(){
        return this.props.pets.map((r,i)=>{
        return(
            <div className = "container" >
                <h3>Hi! my name is {r.name} and I am {r.ageYears} old and
                {r.ageMonths} months old.</h3>
                <br/>
                <h3>My gender is {r.gender} and my breed is {r.breed} 
                . I have a {r.petsonality} petsonality. I really love
                {r.likes}, I dislike {r.dislikes}.</h3>
    
                <h3> {r.ageYears}</h3>
               <br/>
               <strong>Name : </strong><h3>{r.name}</h3>
               <hr/>
               <strong>Age Years : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Age Months : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Petsonality : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Gender : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Species : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Breed : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Sterilized : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Likes : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Dislikes : </strong><h3>{r.ageYears}</h3>
               <hr/>
               <strong>Pet's story : </strong><h3>{r.ageYears}</h3>
               <hr/>
            </div>
        )
        })
    }


  render() {
      console.log(this.props.pets)
            return (
                <div>
                <br/>
                <h1 className = "text-center">Pet Details</h1>
                <br/>
                    {this.renderPetInfo()}
                    <br/>
                </div>  
            )
        }
     
};



PetDetails.propTypes = {
    pets: PropTypes.array.isRequired
  };
export default withTracker(() => {
    Meteor.subscribe('petByID')  
    return {
      pets:  Pet.find(localStorage.getItem('idPet')).fetch()
    };
  })(PetDetails);