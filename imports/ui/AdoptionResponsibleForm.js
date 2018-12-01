import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class AdoptionResponsibleForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            id:'',
            age: 0,
            address: '',
            city: '',
            telephoneNumber: '',
            email: ''
        };

        // Aqui van los bind 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.back = this.back.bind(this);
    }

    // EventHandlers
    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
        }
    back(){
         window.location.assign("/profile")
    };
    handleSubmit(event) {
        event.preventDefault();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
            'profile.name': this.state.name,
            'profile.id': this.state.id,
            'profile.age': this.state.age,
            'profile.address': this.state.address,
            'profile.city': this.state.city,
            'profile.telephoneNumber': this.state.telephoneNumber,
            'profile.email' :this.state.email
        }}); 
        this.setState({
            name: '',
            id:'',
            age: 0,
            address: '',
            city: '',
            telephoneNumber: '',
            email: ''
        });
        window.alert("Your profile information has been updated");
        window.location.assign("/profile");
        }


  render() {
    return (
        <div className="container">
         <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <h1>Adoption Responsible Form</h1>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" type="text" name ="name" id="name"  value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>ID</label>
                <input className="form-control" type="text" name ="id" id="id" value={this.state.id} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Age</label>
                <input className="form-control" type="number" name ="age" id="age" min="18" max="90" value={this.state.age} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input className="form-control" type="text" name ="address" id="address" value={this.state.address} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input className="form-control" type="text" name ="city" id="city" value={this.state.city} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Telephone Number</label>
                <input className="form-control" type="text" name ="telephoneNumber" id="telephoneNumber" value={this.state.telephoneNumber} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" name ="email" id="emailo" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="wrapper container">
                <button className='btn btn btn-danger' onClick={this.back}>Back</button>
                &emsp;&emsp;&emsp;
                <button type="submit" className="btn btn-success">Submit</button> 
            </div>     
        </form> 
                      
    </div>
    )
  }
}

AdoptionResponsibleForm.propTypes = {
    user: PropTypes.object
  };
  
  export default withTracker(() => {
     
    return {
      user: Meteor.user()
    };
  })(AdoptionResponsibleForm);
