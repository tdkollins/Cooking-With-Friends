import React, { Component } from 'react';
import SaladStir from "./../resources/stir.gif"
import "./Prompt.css"

class StirPrompt extends Component {
    render() {
        return (
            <div class="Container">
                <h2 class="Stir-Text">Stir!</h2>
                <img
                    src={SaladStir}
                    width="750px"
                    height="600px" />
            </div>

        );
    }
}

export default StirPrompt;
