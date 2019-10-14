import React, { Component } from 'react';
import PickleImage from "./../resources/pickle.png";
import LettuceImage from "./../resources/lettuce.png";
import Cup from "./../resources/cup.png";
import Arrow from "./../resources/Arrow.png";
import "./FoodInsert.css";

class FoodRemove extends Component {
    constructor(props) {
        super();
        this.state = {
            food: props.food
        };
    }

    render() {
        return (
            <div class="Food">
                <div class="Insert">
                    <img class="Arrow-Remove"
                        src={Arrow}
                        width="100px"
                        height="100px" />
                    {
                        (this.state.food == "Pickle") ?
                        <img
                            src={PickleImage}
                            width="800px"
                            height="400px" /> :
                        (this.state.food == "Lettuce") ?
                        <img
                            src={LettuceImage}
                            width="600px"
                            height="600px" /> :
                        (this.state.food == "Cup") ?
                        <img
                            src={Cup}
                            width="300px"
                            height="600px" /> :
                        <div></div>
                    }
                </div>
                {
                    (this.state.food == "Pickle") ?
                    <h2 class="Text">Remove Cucumber</h2> :
                    (this.state.food == "Lettuce") ?
                    <h2 class="Text">Remove Lettuce</h2> :
                    (this.state.food == "Cup") ?
                    <h2 class="Text">Remove Cup and add to Salad</h2> :
                    <h2></h2>
                }
            </div>

        );
    }
}

export default FoodRemove;
