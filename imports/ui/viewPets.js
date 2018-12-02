import React, { Component } from 'react';
import  PetCard  from './PetCard.js';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


import {Pet} from '../api/pet.js';

class ViewPets extends Component {

    constructor(props){
        super(props);
    
        this.state={
            dogs : false,
            cats : false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    renderPets(){
        return this.props.pets.map((r,i)=>{
            if (r.species == 'Cat' && this.state.cats){
                let desc = 'Im a very '+r.petsonality+' '+r.species+' who loves '+r.likes+'. I dislike '+r.dislikes+', I am '+r.ageYears+' years and '+r.ageMonths+' months old.' ;

                return(
                    <div class="col-sm">
                    <PetCard
                    key={i}
                    image='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    name={ r.name}
                    description =  {desc}
                    idPet={r._id}
                    responsibleId={r.responsibleId}
                    />
                    </div>
                    
                );
                
            }else if(r.species == 'Dog' && this.state.dogs){
                let desc = 'Im a very '+r.petsonality+' '+r.species+' who loves '+r.likes+'. I dislike '+r.dislikes+', I am '+r.ageYears+' years and '+r.ageMonths+' months old.' ;

                return(
                    <div class="col-sm">
                    <PetCard
                    key={i}
                    image='https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?cs=srgb&dl=adorable-animal-breed-159541.jpg&fm=jpg'
                    name={ r.name}
                    description =  {desc}
                    idPet={r._id}
                    responsibleId={r.responsibleId}
                    />
                    </div>
                    
                );
                

            }
            
            
        })
    };



  render() {
    return (

    <div class="container">
            <div class="form-check">
                <h3>What kind of pet you prefer?</h3>
                <input class="form-check-input" type="checkbox"  id="checkDog" name = "dogs"  onChange={this.handleChange}  checked={this.state.isGoing} />
                <label class="form-check-label" for="checkDog">Dogs</label>
                <br/>

                <input class="form-check-input" type="checkbox" id="checkCat" name ="cats" onChange={this.handleChange}  checked={this.state.isGoing}/>
                <label class="form-check-label" for="checkCat">Cats</label>

            </div>
            
        <div class="row">
            {this.renderPets()}
        </div>
    </div>
      
    )
  }
}

ViewPets.propTypes ={
    pets: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('pets');
    return{
        pets: Pet.find({}).fetch(),
    };
})(ViewPets);