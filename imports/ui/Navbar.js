import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import {withTracker} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

class Navbar extends Component {
  render() {
      return(
          <nav className="navbar navbar-dark bg-dark  fixed-top" >
            <a className="navbar-brand" href="/">
                 <img src="http://www.serviecologico.com/wp-content/uploads/2017/09/Logo.png" width="50" height="25" className="d-inline-block align-top" alt=""/>
                 &emsp;  
                 SRA
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                 
                   <a className="nav-item nav-link" href="/addPet">Agregar mascota</a>
                   <a className="nav-item nav-link" href="/crearRecoleccion">Crear Recolección</a>
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
