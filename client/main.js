import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../imports/ui/LandingPage.js';
import App from '../imports/ui/App.js';
import AddPetform from '../imports/ui/AddPetForm.js';
import './main.html';

Meteor.startup(() => {
  render(
    <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route  path="/addPet" component={AddPetform}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('target'));
});