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
        this.state.pet = localStorage.getItem('idPet');
        this.renderPetInfo= this.renderPetInfo.bind(this);
    }

    renderPetInfo(){
        return this.props.pets.map((r,i)=>{
        return(
            <div className = "container" >
                <h3>I am a {r.species}.</h3>
                <br/>
                <h3>Hi! my name is {r.name} and I am {r.ageYears} years old and {r.ageMonths} months old.</h3>
                <br/>
                <h3>My gender is {r.gender} and my breed is {r.breed} 
                . I have a {r.petsonality} petsonality. I really love {r.likes}, I dislike {r.dislikes}.</h3>
                <br/>
                <h3>Here is my story:</h3>
                <br/>
                <h3>{r.story}</h3>
                <hr/>
                <h2  className = "text-center">Other Details</h2>
                <h3>sterilized: {r.sterilized? "yes":"no"}</h3>
                <h3>post publish date: {r.publishDate}</h3>
                <hr/>
                <br/>
                <h2 className = "text-center">Responsible Contact Information</h2>
                <br/>
                <strong>Name : </strong><h3>{r.rName}</h3>
                <hr/>
                 <strong>City: </strong><h3>{r.rCity}</h3>
                <hr/>
                📞
                <strong>Telephone Number : </strong><h3>{r.rTelephoneNumber}</h3>
                <hr/>
                📧
                <strong>Email : </strong><h3>{r.rEmail}</h3>
                <hr/>
                <br/>
            </div>
        )
        })
    }


  render() {
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
    pets: PropTypes.array.isRequired,
  };
export default withTracker(() => {
    Meteor.subscribe('petByID')  
    return {
      pets:  Pet.find(localStorage.getItem('idPet')).fetch(),
    };
  })(PetDetails);