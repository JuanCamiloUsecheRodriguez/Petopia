import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import Chat from './Chat.js';
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
            <div >
                
                <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='cat' className='petpic center-img'/>
                <p>I am a {r.species}.</p>
                <p>Hi! my name is {r.name} and I am {r.ageYears} years and {r.ageMonths} months old.</p>
                <p>My gender is {r.gender} and my breed is {r.breed}. I have a {r.petsonality} petsonality. I really love {r.likes}, I dislike {r.dislikes}.</p>
                
                <p>Here is my story:</p>
                
                <p>{r.story}</p>
                <hr/>
                <h2  className = "text-center">Other Details</h2>
                <p><strong>Sterilized:</strong> {r.sterilized? "yes":"no"}</p>
                <p><strong>Publish date:</strong>{r.publishDate}</p>
                <hr/>
                <br/>
                <h2 className = "text-center">Responsible Contact Information</h2>
                <br/>
                <strong>Name : </strong><p>{r.rName}</p>
                <hr/>
                 <strong>City: </strong><p>{r.rCity}</p>
                <hr/>
                📞
                <strong>Telephone Number : </strong><p>{r.rTelephoneNumber}</p>
                <hr/>
                📧
                <strong>Email : </strong><p>{r.rEmail}</p>
                <hr/>
                <br/>
                <h2 className = "text-center">Leave a Message</h2>
                <Chat user={this.props.user.profile.name} idPet={r._id}/>

                
            </div>
        )
        })
    }


  render() {
            return (
                <div className='container'>
                <br/>
                <h1 className = "text-center"> Pet Details</h1>
                <br/>
                    {this.renderPetInfo()}
                    
                    <br/>
                </div>  
            )
        }
     
};



PetDetails.propTypes = {
    pets: PropTypes.array.isRequired,
    user: PropTypes.object

  };
export default withTracker(() => {
    Meteor.subscribe('petByID')  
    return {
      pets: Pet.find(localStorage.getItem('idPet')).fetch(),
      user: Meteor.user()
    };
  })(PetDetails);