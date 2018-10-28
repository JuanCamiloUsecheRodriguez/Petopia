import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../imports/ui/LandingPage.js';
import App from '../imports/ui/App.js';
import AddPetform from '../imports/ui/AddPetForm.js';
import Profile from '../imports/ui/Profile.js'
import AdoptionResponsibleForm from '../imports/ui/AdoptionResponsibleForm.js'
import './main.html';
import viewPets from '../imports/ui/viewPets.js';

Meteor.startup(() => {
  render(
    <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/addPet" component={AddPetform}/>
        <Route  path="/profile" component={Profile}/>
        <Route  path="/addProfileInformation" component={AdoptionResponsibleForm}/>
        <Route path="/viewPets" component={viewPets}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('target'));
});