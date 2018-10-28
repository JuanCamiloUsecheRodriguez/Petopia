import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Navbar extends Component {
 
  render() {
    if(this.props.user){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top" >
              <a className="navbar-brand" href="/">
                <h1>Petopia</h1>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                  
                    <a className="nav-item nav-link" href="/profile">Profile</a>
                    <a className="nav-item nav-link" href="/addPet">Add Pet for Adoption</a>
                    <a className="nav-item nav-link" href="/verRecoleccionesTerminadas">Ver Recolecciones Terminadas</a>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <AccountsUIWrapper/> 
              </div>
              </div>
            </nav> 
        )    
    }
    else{
      return(
<<<<<<< HEAD
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top" >
            <a className="navbar-brand" href="/">
               <h1>Petopia</h1>
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                 
                   <a className="nav-item nav-link" href="/profile">Profile</a>
                   <a className="nav-item nav-link" href="/addPet">Add Pet for Adoption</a>
                   <a className="nav-item nav-link" href="/viewPets">View Pets</a>
                   <AccountsUIWrapper/> 
             </div>
             </div>
           </nav> 
      )    
=======
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top" >
      <h1 id= "petopia">Petopia</h1>
      <a className="navbar-brand" href="#"> 
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  
      <AccountsUIWrapper/>    
      </a>
      
    </nav>)
    }
>>>>>>> 32ae28ac03269d511af521e7921588110907d1a8
  }
}

Navbar.propTypes = {
  user: PropTypes.object
};

export default withTracker(() => {  
  return {
    user: Meteor.user()
  };
})(Navbar);
