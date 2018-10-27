import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Navbar extends Component {
  render() {
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
                 
                   <a className="nav-item nav-link" href="/">Profile</a>
                   <a className="nav-item nav-link" href="/addPet">Add Pet for Adoption</a>
                   <a className="nav-item nav-link" href="/actualizarMateriales">Actualizar Materiales</a>
                   <a className="nav-item nav-link" href="/verRecoleccionesTerminadas">Ver Recolecciones Terminadas</a>
                   <AccountsUIWrapper/> 
             </div>
             </div>
           </nav> 
      )    
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
