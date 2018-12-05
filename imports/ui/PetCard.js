import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';

export default class PetCard extends Component {

    constructor(props) {
        super(props);
    }

    adoptButton(id,responsibleId){
        if(Meteor.user().profile!==undefined){
         window.location.assign("/petDetails")
         localStorage.setItem('idPet', id);
        }
        else{
          window.alert("You need to update your profile information first");
          window.location.assign("/profile");
        }
    }
    
      render() {
        let {
          image,  
          name,
          description,
          idPet,
        } = this.props;
    
        return (
          
          <div className='product-card text-center'>
          <img src={image} alt={name}/>
          <div className='card-margin'>
            <div className='product-card-name'>
          {name}
        </div>
            <p className='text-center'>
          {description}
        </p>
            
              <button className=' btn buy-button' onClick={this.adoptButton.bind(this,idPet)}>Adopt now</button>
            </div>
          </div>
        );
      }
}



