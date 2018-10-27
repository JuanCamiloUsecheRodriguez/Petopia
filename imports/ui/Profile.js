import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.js';

 class Profile extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
        this.addAccountInfo= this.addAccountInfo.bind(this);
        this.renderAccountInfo= this.renderAccountInfo.bind(this);
    }

    addAccountInfo(){
        window.location.assign("/addProfileInformation")
    };
    renderAccountInfo(){
        return(
            <li>Name : {this.props.user.profile.name}</li>
        )
    }


  render() {
      if(this.props.user === undefined ){
          return(
            <div>
            </div>  
          )
      }
      else{
        if(this.props.user.profile === undefined){
            return (
                <div>
                <br/>
                <br/>
                <h3>We need you to update your account information to continue, please click the button below to add the information</h3>
                <button className='btn' onClick={this.addAccountInfo}>Update account information</button>
                </div>  
            )}
        else{
            return (
                <div>
                <br/>
                <br/>
                <h1>Your account information</h1>
                    <ul className="list-group">
                    {this.renderAccountInfo()}
                    </ul>
                </div>  
            )
        }
    }
    }
};



Profile.propTypes = {
    user: PropTypes.object
  };
export default withTracker(() => {  
    return {
      user: Meteor.user()
    };
  })(Profile);