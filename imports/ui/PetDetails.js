import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import Chat from './Chat.js';
import {Pet} from '../api/pet.js';
import { runInThisContext } from 'vm';
import { throws } from 'assert';

 class PetDetails extends Component {
    constructor(props){
        super(props);

        this.state={
         
        }
        this.state.pet = localStorage.getItem('idPet');
        this.renderPetInfo= this.renderPetInfo.bind(this);
        this.setToAdopted= this.setToAdopted.bind(this);
        this.return= this.return.bind(this);
    }

    renderPetInfo(){

        return this.props.pets.map((r,i)=>{
        console.log(Meteor.user()._id)
        localStorage.setItem('idDuenio', r.rId);
        console.log(localStorage.getItem('idDuenio') )
        return(
            <div >
                <div align = "center">
                { Meteor.user()._id===localStorage.getItem('idDuenio') ?  <button className=' btn adopt-button' onClick={this.setToAdopted}>Set the Pet as Adopted</button> : <div></div>}
                </div>
                <br/>
                <img src= {r.image} alt='cat' className='petpic center-img'/>
                <br/>
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

    setToAdopted(){
        Meteor.call('pets.adopted', localStorage.getItem('idPet'));
        window.location.assign("/ViewPets");
    }
    return(){
        window.location.assign("/ViewPets");
    }
  render() {
            return (
                <div className='container'>
                <br/>
                <button className=' btn adopt-button' onClick={this.return}>Return</button>
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