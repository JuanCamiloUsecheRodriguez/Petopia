import React, { Component } from 'react'

export default class PetCard extends Component {

    constructor(props) {
        super(props);
    }

    adoptButton(id,responsibleId){
        localStorage.setItem('idPet', id);
        window.location.assign("/petDetails")
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



