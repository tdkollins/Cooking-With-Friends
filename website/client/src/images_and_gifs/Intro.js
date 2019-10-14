import React, { Component } from 'react';
import IntroGif from "./../resources/Intro.gif"

class Intro extends Component {
    render() {
        return (
            <img
                src={IntroGif}
                width="1920px"
                height="1075px" />
        );
    }
}

export default Intro;
