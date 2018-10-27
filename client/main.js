import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import LandingPage from '../imports/ui/LandingPage.js';
import './main.html';

Meteor.startup(() => {
  render(<LandingPage/>,
    document.getElementById('target'));
});