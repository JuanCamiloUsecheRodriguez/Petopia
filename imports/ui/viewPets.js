import React, { Component } from 'react';
import  PetCard  from './PetCard.js';

export default class viewPets extends Component {
  render() {
    return (

        <div class="container">
        <div class="row">
            <div class="col-sm">
            <PetCard
                image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                price='2 months'
                productName='Cupcake'
                description='Im a very energetic cat who loves playing. I dislike rainy days' 
            />
            </div>
            <div class="col-sm">
            <PetCard
                image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                price='2 months'
                productName='Cupcake'
                description='Im a very energetic cat who loves playing. I dislike rainy days' 
                url='http://localhost:3000/'
            />
            </div>
            <div class="col-sm">
            <PetCard
                image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                price='2 months'
                productName='Cupcake'
                description='Im a very energetic cat who loves playing. I dislike rainy days' 
            />
            </div>
        </div>
    </div>
      
    )
  }
}
