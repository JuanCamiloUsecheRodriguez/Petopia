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
                <strong>Name : </strong><p>{this.props.user.profile.name}</p>
                <hr/>
                <strong>ID : </strong><p>{this.props.user.profile.id}</p>
                <hr/>
                <strong>Age : </strong><p>{this.props.user.profile.age}</p>
                <hr/>
                🏠
                <strong>Address: </strong><p>{this.props.user.profile.address}</p>
                <hr/>
                🏢
                 <strong>City: </strong><p>{this.props.user.profile.city}</p>
                <hr/>
                📞
                <strong>Telephone Number : </strong><p>{this.props.user.profile.telephoneNumber}</p>
                <hr/>
                📧
                <strong>Email : </strong><p>{this.props.user.profile.email}</p>
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