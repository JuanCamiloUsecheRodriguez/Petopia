import React from 'react';
import Navbar from './Navbar.js';

export default class App extends React.Component {
  render() {
   {
      return (
        <div>
         <Navbar/>

          <div className="content">
            {this.props.children}
          </div>
          <footer className="bg-dark">
            <div className="footer_makers" align="center">Por Juan Camilo Useche y Zulma Castañeda</div>
            <img className="MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" alt= "MIT license logo"/>
          </footer>
        </div>
      );
    } 
  }
}