import React, { Component } from 'react'

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state={  
        }
        this.renderRequirements= this.renderRequirements.bind(this);
        this.recalculate= this.recalculate.bind(this);
    }

    recalculate(e){
        e.preventDefault();
        var checkBox = document.getElementById("myCheck");
    }

    renderRequirements(){
        return(
            <div className = "container">
                <br/>
                <input type="checkbox" id="vacunas" onclick={this.recalculate}></input> <p>Vacunas</p>
                <hr/>
                <input type="checkbox" id="valorAdopcion" onclick={this.recalculate}></input><p>Valor Adopción</p>
            </div>
        )
    }
      render() {
        return (
          <div>
            <h1 className='text-center'>Adoption Calculator</h1>
            {this.renderRequirements()}
          </div>
        );
      }
}



