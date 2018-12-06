import React, { Component } from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { };
      }

    render() {
        return (
        <div>
            // The landing page for the login in and not login is the same. The feedback of loging is minimum. It is recomended to change this
            // add
        <Jumbotron className="pet-background black">
          <Container className='black'>
            <h1 className="display-3 text-center proza-libre">ADOPT DON'T BUY</h1>
            <p className="lead">Looking for a pet to <strong>adopt</strong>? We will help you find the perfect match for your home and family.</p>
        
            <hr/>
            <p>Join our community now and change a life! </p>
          </Container>
          <img className="background-img" src="https://bit.ly/2qe5yuw" alt="dalmatian"/>
          
          
        </Jumbotron>            
        </div>
        )
    }
}
