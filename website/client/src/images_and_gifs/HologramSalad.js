import React, { Component } from 'react';
import Salad from "./../resources/PlateSlad.png";
import "./HologramSalad.css"

class HologramSalad extends Component {
    render() {
        return (
            <div class="Container">
                <img
                    class="Salad"
                    src={Salad}
                    width="900px"
                    height="600px" />
            </div>
        );
    }
}

export default HologramSalad;
