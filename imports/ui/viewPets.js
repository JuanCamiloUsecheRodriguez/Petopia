import React, { Component } from 'react';
import  PetCard  from './PetCard.js';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import InfiniteScroll from 'react-infinite-scroller';


import {Pet} from '../api/pet.js';

class ViewPets extends Component {

    constructor(props){
        super(props);
    
        this.state={
            dogs : false,
            cats : false,
            currentPage: 1,
            petPerPage: 9,
            currentPets:[],
            arrCats: [],
            arrDogs:[],
            arrPets:[]


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    handleChange(event) {
        this.sortPets();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }


    renderPets(currentpets){
        let pets =[]
        
        currentpets.map((r,i)=>{
            
           
                let desc = 'Im a very '+r.petsonality+' '+r.species+' who loves '+r.likes+'. I dislike '+r.dislikes+', I am '+r.ageYears+' years and '+r.ageMonths+' months old.' ;
                pets.push(
                    <div class="col-sm">
                    <PetCard
                    key={i}
                    image={r.image}
                    name={ r.name}
                    description =  {desc}
                    idPet={r._id}
                    responsibleId={r.responsibleId}
                    />
                    </div>
                ); 
                
            
            
            
                    
                });
        return pets;
    };

    sortPets(){

        const cats = [];
        const dogs =[];
        let pets = [];


        this.props.pets.map((r,i)=>{
           
            
            if(r.rCity.includes(this.props.user.profile.city)){
                if(r.species == 'Cat' ){
                    cats.push(r);
                }else if (r.species == 'Dog' ){
                    dogs.push(r);
                }

            }
        });

        pets =  cats.concat(dogs);

        this.setState({
            arrCats: cats,
            arrDogs: dogs,
            arrPets: pets
        });

    }

    componentWillReceiveProps(){
        this.sortPets()
    }

    paginate(petsArray){
        const currentPage = this.state.currentPage;
        let currentminus = currentPage-15;
        let currentplus = currentPage+15;
        const petsPerPage = this.state.petPerPage;

        const indexLast = currentPage * petsPerPage;
        const indexFirst = indexLast-petsPerPage;
        const current = petsArray.slice(indexFirst,indexLast);
        let pageNumbers = [];

        for (let i = 1; i <= Math.ceil(petsArray.length / petsPerPage); i++) {
            pageNumbers.push(i);
        }
        let pages =[];

        if(currentminus<0){
            currentplus = currentplus-currentminus;
            currentminus =0;
            
        }else if(currentplus>indexLast-1){
            currentplus=indexLast-1;
        }
      
       
        
        
        
        pageNumbers = pageNumbers.slice(currentminus,currentplus);

        pageNumbers.map(number => {
            pages.push (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          });
   
          

          return pages;
    }

    arrayselect(){
        if (this.state.dogs && this.state.cats){
            
            return this.paginate(this.state.arrPets);
        }else if(this.state.dogs){
            return this.paginate(this.state.arrDogs);
        }else if(this.state.cats){
            return this.paginate(this.state.arrCats);
        }

    }

    renderselect(){
        const currentPage = this.state.currentPage;
        const petsPerPage = this.state.petPerPage;

        const indexLast = currentPage * petsPerPage;
        const indexFirst = indexLast-petsPerPage;
        let current = [];
        if (this.state.dogs && this.state.cats){
           
            current = this.state.arrPets.slice(indexFirst,indexLast);
            
        }else if(this.state.dogs){
            current = this.state.arrDogs.slice(indexFirst,indexLast);

           
        }else if(this.state.cats){
            current = this.state.arrCats.slice(indexFirst,indexLast);
            
        }
        return this.renderPets(current);

    }





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
        {this.renderselect()}

        </div>
        <div class="row text-center">
        <ul id="page-numbers">
              {
                  this.arrayselect()
              }
         </ul> 
          </div>
    </div>
      
    )
  }
}

ViewPets.propTypes ={
    pets: PropTypes.array.isRequired,
    user: PropTypes.object  
}

export default withTracker(()=>{
    Meteor.subscribe('pets');
    return{
        pets: Pet.find({}).fetch(),
        user: Meteor.user()
    };
})(ViewPets);