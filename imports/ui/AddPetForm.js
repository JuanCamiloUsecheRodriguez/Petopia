import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import {Pet} from '../api/pet.js';


class AddPetForm extends Component {

  constructor(props){
    super(props);

    this.state={
        name: '',
        ageYears:7,
        ageMonths: 5,
        petsonality: '',
        gender: 'Female',
        breed:'',
        sterilized: true,
        likes: '',
        dislikes: '',
        story: '',
        image: null
    };

    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    // EventHandlers

    handleChange(event) {
      const value = event.target.value;
      this.setState({
        [event.target.name]: value
      });
    }

    handleImageChange(event){
      this.setState({
        image: URL.createObjectURL(event.target.files[0])

      });
    }

    handleSubmit(event) {
      event.preventDefault();

      let pet ={
        name: this.state.name,
        ageYears:this.state.ageYears,
        ageMonths: this.state.ageMonths,
        petsonality: this.state.petsonality,
        gender: this.state.gender,
        breed:this.state.breed,
        sterilized: this.state.sterilized,
        likes: this.state.likes,
        dislikes: this.state.dislikes,
        publishDate: Date.now(),
        story: this.state.story,
        image: 'not an image in mongo',
        
      }
      
      Meteor.call('pet.add', pet);

      this.setState({
        name: '',
        ageYears:7,
        ageMonths: 5,
        petsonality: '',
        gender: '',
        breed:'',
        sterilized: true,
        likes: '',
        dislikes: '',
        story: '',
        image: null
      });
    
      
  }



  render() {

    const {name, ageYears, ageMonths, petsonality, gender, breed, sterilized, likes, dislikes, story, image} = this.state
    return (
      <div>
          <Container>
              <Row>
               
                <Col><h1 className='text-center'>Let's meet a new friend!</h1></Col>
                
              </Row>
              <Row>
                  <Col>
                    {(image) ? <img src={this.state.image} className="img-fluid center-img" alt="petimage"/> :<img src='https://www.southernmallee.sa.gov.au/webdata/resources/images/Cat_and_Dog.jpg' className="img-fluid center-img" alt="cat dog placeholder"/>}
                    <form className='form-style-8' onSubmit={this.handleSubmit}>
                      
                      <div className="form-group">
                        <label htmlFor="SubmitPhoto">Choose a nice picture!</label>
                        <input type="file" className="form-control-file" id="petPhoto" name='image' onChange={this.handleImageChange}/>
                      </div>
                    
                      Hi!, my name is 
                      <input type='text' placeholder='Lupe' name='name' value={name} onChange={this.handleChange}/> 
                      and I am 
                      <input type='number' placeholder='7' min='0' name='ageYears' value={ageYears} onChange={this.handleChange}/> 
                      years and 
                      <input type='number' placeholder='5' min='0' name='ageMonths' value={ageMonths} onChange={this.handleChange}/>months old.<br/>
                      My gender is 
                      <select name='gender' onChange={this.handleChange}>
                        <option value='Female'>Female</option>
                        <option value ='Male'>Male</option>
                      </select> and my breed is 
                      <input type='text' placeholder='unique' name='breed' value={breed} onChange={this.handleChange}/>. 
                      I have a 
                      <input type='text' placeholder='calm' name='petsonality' value={petsonality} onChange={this.handleChange}/> petsonality. I really love 
                      <input type='text' placeholder='sleeping' name='likes' value={likes} onChange={this.handleChange}/>, I dislike 
                      <input type='text' placeholder='loud noises' name='dislikes' value={dislikes} onChange={this.handleChange}/>.
                      <br/>
                      <div className="form-group purple-border">
                        <label htmlFor="Story">Here is my story</label>
                        <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" name='story' value={story} onChange={this.handleChange}></textarea>
                      </div>

                      Sterilized? 
                      <select name='sterilized' onChange={this.handleChange}>
                        <option value={true}>Yes</option>
                         <option value={false}>No</option>
                        </select>
                      <br/>

                      <Button>Submit</Button>


                      </form>
                  </Col>
                  
              </Row>

          </Container>
      </div>
    )
  };
}

AddPetForm.propTypes ={
  pets: PropTypes.array.isRequired,
}
export default withTracker(()=>{
  Meteor.subscribe('pets');
  return{
    pets: Pet.find({}).fetch(),
};
})(AddPetForm);
