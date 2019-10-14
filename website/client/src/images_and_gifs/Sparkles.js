import React, { Component } from 'react';
import SparkleGif from "./../resources/sparkling.gif"
import "./HologramSalad.css"

class Sparkles extends Component {
    render() {
        return (
            <div class="Container">
                <img
                    class="Sparkles"
                    src={SparkleGif}
                    width="900px"
                    height="400px" />
            </div>

        );
    }
}

export default Sparkles;
