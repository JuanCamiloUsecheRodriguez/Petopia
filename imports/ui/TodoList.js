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
        let total = 0;
        var vaccinations = document.getElementById("vaccinations");
        var adoptionValue = document.getElementById("adoptionValue");
        var sandBox = document.getElementById("sandBox");
        var sand = document.getElementById("sand");
        var allergiesMedicine = document.getElementById("allergiesMedicine");
        var bed = document.getElementById("bed");
        var scratchingPost = document.getElementById("scratchingPost");
        var toys = document.getElementById("toys");
        var food = document.getElementById("food");
        var toothbrush = document.getElementById("toothbrush");
        var petGym = document.getElementById("petGym");
        var waterAndFoodBowls = document.getElementById("waterAndFoodBowls");
        var environmentDeodorant = document.getElementById("environmentDeodorant");

        if (vaccinations.checked == true){
            total += 115000;
        }
        if(adoptionValue.checked == true){
            total+= 60000;
        }
        if(sandBox.checked == true){
            total+= 40000;
        }
        if(sand.checked == true){
            total+= 20000;
        }
        if(allergiesMedicine.checked == true){
            total+= 70000;
        }
        if(bed.checked == true){
            total+= 40000;
        }
        if(scratchingPost.checked == true){
            total+= 25000;
        }
        if(toys.checked == true){
            total+= 20000;
        }
        if(food.checked == true){
            total+= 50000;
        }
        if(toothbrush.checked == true){
            total+= 7000;
        }
        if(petGym.checked == true){
            total+= 70000;
        }
        if(waterAndFoodBowls.checked == true){
            total+= 30000;
        }
        if(environmentDeodorant.checked == true){
            total+= 20000;
        }
        let camilo =document.getElementById("total_global")
        camilo.value = total
    }

    renderRequirements(){
        return(
            <div className = "container">
                <br/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="vaccinations" onChange={this.recalculate}/>&emsp;&emsp;Vaccinatios
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 115.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="adoptionValue" onChange={this.recalculate}/>&emsp;&emsp;Adoption Value
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 60.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="sandBox" onChange={this.recalculate}/>&emsp;&emsp;Sand Box
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 40.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="sand" onChange={this.recalculate}/>&emsp;&emsp;Sand
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 20.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="allergiesMedicine" onChange={this.recalculate}/>&emsp;&emsp;Allergies Medicine
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 70.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="bed" onChange={this.recalculate}/>&emsp;&emsp;Bed
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 40.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="scratchingPost" onChange={this.recalculate}/>&emsp;&emsp;Scratching Post
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 25.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="toys" onChange={this.recalculate}/>&emsp;&emsp;Toys
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 20.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="food" onChange={this.recalculate}/>&emsp;&emsp;Food
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 50.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="toothbrush" onChange={this.recalculate}/>&emsp;&emsp;Toothbrush
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 7.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="petGym" onChange={this.recalculate}/>&emsp;&emsp;Pet Gym
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 70.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="waterAndFoodBowls" onChange={this.recalculate}/>&emsp;&emsp;Water and Food Bowls
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 30.000 COP
                        </div>
                    </div>
                    <hr/>
                    <div className = "row">
                        <div className ="col-md-8"> 
                            <input type="checkbox" id="environmentDeodorant" onChange={this.recalculate}/>&emsp;&emsp;Environment Deodorant
                        </div>
                        <div className ="col-md-4"> 
                            Pricing: 20.000 COP
                        </div>
                    </div>
                    <hr/>
                    <br/>
            </div>
        )
    }
      render() {
        return (
          <div>
            <h1 className='text-center'>Adoption Calculator</h1>
            {this.renderRequirements()}
            <div className="wrapper">
            Total Value:&emsp;<input key="total_global" type="text" id= "total_global" disabled />
            </div>
          </div>
        );
      }
}



