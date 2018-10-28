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
        this.state.pet = localStorage.getItem('pet');
        this.renderPetInfo= this.renderPetInfo.bind(this);
    }

    renderPetInfo(){
        return(
            <div className = "container" >
               <br/>
               <strong>Name : </strong><h3>{this.props.pet.name}</h3>
               <hr/>
               <strong>Age Years : </strong><h3>{this.props.pet.ageYears}</h3>
               <hr/>
            </div>
        )
    }


  render() {
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
    pets: PropTypes.object
  };
export default withTracker(() => {
    Meteor.subscribe('petByID')  
    return {
      pets:  Pet.find(this.state.pet).fetch()
    };
  })(PetDetails);