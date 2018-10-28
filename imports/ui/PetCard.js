import React, { Component } from 'react'

export default class PetCard extends Component {

    constructor(props) {
        super(props);
      }
    
      render() {
        let {
          image,  
          productName,
          description,
          url
        } = this.props;
    
        return (
          
          <div className='product-card text-center'>
          <img src={image}/>
          <div className='card-margin'>
            <div className='product-card-name'>
          {productName}
        </div>
            <p className='text-center'>
          {description}
        </p>
            
              <a className='buy-button' href={url}>Adopt now</a>
            </div>
          </div>
        );
      }
}



