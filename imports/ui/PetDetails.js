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
               <br/>
               <strong>Name : </strong><h3>{r.name}</h3>
               <hr/>
               <strong>Age Years : </strong><h3>{r.ageYears}</h3>
               <hr/>
            </div>
        )
        })
    }


  render() {
      console.log(this.props.pets)
            return (
                <div className = "container">
                <br/>
                <br/>
                <h3 className = "text-center"></h3>
                    <br/>
                    <div class="wrapper">
                    {this.renderPetInfo()}
                    </div>
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