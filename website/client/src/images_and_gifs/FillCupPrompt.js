import React, { Component } from 'react';
import Cup from "./../resources/fillcup.gif"
import "./Prompt.css"

class FillCupPrompt extends Component {
    render() {
        return (
            <div class="Container">
                <h2 class="Cup-Text">Fill Cup With Salad Dressing!</h2>
                <img
                    src={Cup}
                    width="1000px"
                    height="850px" />
            </div>

        );
    }
}

export default FillCupPrompt;
