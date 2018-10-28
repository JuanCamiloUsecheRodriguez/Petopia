import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

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
            <div className = "container" >
                <br/>
                <strong>Name : </strong><h3>{this.props.user.profile.name}</h3>
                <hr/>
                <strong>ID : </strong><h3>{this.props.user.profile.id}</h3>
                <hr/>
                <strong>Age : </strong><h3>{this.props.user.profile.age}</h3>
                <hr/>
                🏠
                <strong>Address: </strong><h3>{this.props.user.profile.address}</h3>
                <hr/>
                🏢
                 <strong>City: </strong><h3>{this.props.user.profile.city}</h3>
                <hr/>
                📞
                <strong>Telephone Number : </strong><h3>{this.props.user.profile.telephoneNumber}</h3>
                <hr/>
                📧
                <strong>Email : </strong><h3>{this.props.user.profile.email}</h3>
                <hr/>
                <br/>
            </div>
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
                <div className = "container">
                <br/>
                <br/>
                <h3 className = "text-center">We need you to update your account information to continue, please click the button below to add the information</h3>
                    <br/>
                    <div class="wrapper">
                    <button className='btn' onClick={this.addAccountInfo}>Update account information</button>
                    </div>
                    <br/>
                </div>  
            )}
        else{
            return (
                <div>
                <br/>
                <br/>
                <h1 className = "text-center">Your account information</h1>
                    <div>
                    {this.renderAccountInfo()}
                        <div class="wrapper">
                        <button className='btn' onClick={this.addAccountInfo}>Update account information</button>
                        </div>
                    </div>
                    <br/>
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