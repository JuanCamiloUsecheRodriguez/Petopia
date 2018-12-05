import React, { Component } from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';

import {Chats} from '../api/chat.js';

class Chat extends Component {

    constructor(props){
        super(props);
    
        this.state={
            msg:[
                {user:this.props.user, message: 'Hola como estas'},
                { user: 'Adopciones', message: 'bien y tu?'}
            ],
            text:'',
            idPet: this.props.idPet
        };
    
        //bind
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }


    handleSubmit(event) {
        //Usar destructurción de objetos
        event.preventDefault();
        let msg = this.state.msg;
        let obj = {user:this.props.user, message: this.state.text}

        msg.push(obj)

        let chat ={
            msg:this.state.text,
            user:this.props.user,
            idPet: this.state.idPet
        }
        Meteor.call('chat.add', chat);
        this.setState({
            msg,
            text:''});   
    }

    //Indentar adecuadamente
    handleChange(event) {
        const value = event.target.value;
        this.setState({
          [event.target.name]: value
        });
    }

    renderMsg(){
        return this.props.chats.map((r,i)=>{  
                if(r.idPet == this.state.idPet){
                    return(
                    <p><strong>{r.user}: </strong> {r.msg}</p>
                    );
                }    
        })
    }



  render() {
    return (

        <div class="container">
            <div class="row">
           
            <div class="col-md-12">
                
                <div class="panel panel-info">
                <div class="panel-body">
                    {this.renderMsg()}
                </div>
                
                <form class="new-message" onSubmit={this.handleSubmit}>
                    <div class="panel-footer">
                    <div class="input-group" >
                        <input type="text" name="text" class="form-control" placeholder="Enter Message" onChange={this.handleChange} value={this.state.text}/>
                        <span class="input-group-btn">
                        <button class="btn btn-info send" type="submit">SEND</button>
                        </span>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>


    )
  }
}


Chat.propTypes ={
    chats: PropTypes.array.isRequired
}

export default withTracker(()=>{
    Meteor.subscribe('chats');
    return{
        chats: Chats.find({}).fetch(),
    };
})(Chat);
