import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class AddPetForm extends Component {


  
  render() {
    return (
      <div>
          <Container>
              <Row>
               
                <Col><h1 className='text-center'>Let's meet a new friend!</h1></Col>
                
              </Row>
              <Row>
                  <Col>
                    <form className='form-style-8'>
                    
                      <img src="https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid" alt="petimage"/>
                      <div class="form-group">
                        <label for="SubmitPhoto">Choose a nice picture!</label>
                        <input type="file" class="form-control-file" id="petPhoto"/>
                      </div>
                    
                    

                    
                      Hi!, my name is <input type='text' placeholder='Lupe'/> and I am <input type='number' placeholder='7' min='0'/> years and <input type='number' placeholder='5' min='0'/>months old.<br/>
                      My gender is <select><option>Female</option><option>Male</option></select> and my breed is <input type='text' placeholder='unique'/>. 
                      I have a <input type='text' placeholder='calm'/> petsonality. I really love <input type='text' placeholder='sleeping'/>, I dislike <input type='text' placeholder='loud noises'/>.
                      <br/>
                      <div class="form-group purple-border">
                        <label for="Story">Here is my story</label>
                        <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                      </div>

                      Sterilized? <select><option>Yes</option><option>No</option></select>
                      <br/>

                      <Button>Submit</Button>


                      </form>
                  </Col>
                  
              </Row>

          </Container>
      </div>
    )
  }
}
