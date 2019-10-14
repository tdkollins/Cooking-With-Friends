import React, { Component } from 'react';
import Knife from "./../resources/Knife.gif"

class CutPrompt extends Component {
    render() {
        return (
            <div class="Container">
                <img
                    src={Knife}
                    width="600px"
                    height="600px" />
                <h2 class="Text">Cut!</h2>
            </div>

        );
    }
}

export default CutPrompt;
