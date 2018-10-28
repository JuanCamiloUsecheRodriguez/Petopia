import React, { Component } from 'react'

export default class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    adoptButton(id,responsibleId){
        localStorage.setItem('idPet', id);
        window.location.assign("/petDetails")
    }
    
      render() {
        return (
          <div>
            <h1 className='text-center'>Requirements List</h1>
            {this.renderRequirements()}
          </div>
        );
      }
}



