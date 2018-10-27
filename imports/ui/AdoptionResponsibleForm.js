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
    }

    // EventHandlers
    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
        }

    handleSubmit(event) {
        event.preventDefault();
        let Responsible ={
            name: this.state.name,
            id:this.state.id,
            age: this.state.age,
            address: this.state.address,
            city: this.state.city,
            telephoneNumber:this.state.telephoneNumber,
            email: this.state.email
        }

        Meteor.call('empresas.add', empresa);   
        this.setState({
            name: '',
            id:'',
            age: 0,
            address: '',
            city: '',
            telephoneNumber: '',
            email: ''
        });

        }


  render() {
    return (
        <div className="container">
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
                <input className="form-control" type="number" name ="age" id="age" min="" max="" value={this.state.age} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input className="form-control" type="text" name ="address" id="address" value={this.state.address} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>City></label>
                <input className="form-control" type="text" name ="city" id="city" value={this.state.city} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Telephone Number</label>
                <input className="form-control" type="text" name ="telephoneNumber" id="telephoneNumber" value={this.state.telephoneNumber} onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" name ="telefono" id="telefono" value={this.state.telefono} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>      
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
