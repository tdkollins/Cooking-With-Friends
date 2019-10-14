import React, { Component } from 'react';
import PickleImage from "./../resources/pickle.png";
import LettuceImage from "./../resources/lettuce.png";
import Cup from "./../resources/cup.png";
import Arrow from "./../resources/Arrow.png";
import "./FoodInsert.css";

class FoodInsert extends Component {
    constructor(props) {
        super();
        this.state = {
            food: props.food
        };
    }

    render() {
        return (
            <div class="Food">
            {
                (this.state.food == "Pickle") ?
                <h2 class="Text">Insert Cucumber</h2> :
                (this.state.food == "Lettuce") ?
                <h2 class="Text">Insert Lettuce</h2> :
                (this.state.food == "Cup") ?
                <h2 class="Text">Insert Cup</h2> :
                <h2></h2>
            }
            <div class="Insert">
                {
                    (this.state.food == "Pickle") ?
                    <img
                        src={PickleImage}
                        width="800px"
                        height="400px" /> :
                    (this.state.food == "Lettuce") ?
                    <img
                        src={LettuceImage}
                        width="700px"
                        height="600px" /> :
                    (this.state.food == "Cup") ?
                    <img
                        src={Cup}
                        width="300px"
                        height="600px" /> :
                    <div></div>
                }
                <img class="Arrow-Insert"
                    src={Arrow}
                    width="100px"
                    height="100px" />
            </div>
            </div>

        );
    }
}

export default FoodInsert;
