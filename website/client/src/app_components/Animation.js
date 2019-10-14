import React, { Component } from 'react';
import Intro from "./../images_and_gifs/Intro.js";
import FoodInsert from "./../images_and_gifs/FoodInsert.js";
import CutPrompt from "./../images_and_gifs/CutPrompt.js";
import CutPickle from "./../images_and_gifs/CutPickle.js";
import FoodRemove from "./../images_and_gifs/FoodRemove.js";
import CutLettuce from "./../images_and_gifs/CutLettuce.js";
import FillCupPrompt from "./../images_and_gifs/FillCupPrompt.js";
import FillCup from "./../images_and_gifs/FillCup.js";
import StirPrompt from "./../images_and_gifs/StirPrompt.js";
import Sponsers from "./../images_and_gifs/Sponsers.js";
import Share from "./Share.js";
import HologramSalad from "./../images_and_gifs/HologramSalad.js";
import Sparkles from "./../images_and_gifs/Sparkles.js";

class Animation extends Component {
    constructor(props) {
        super();
        this.state = {
            scene: props.scene
        };
    }

    componentWillUpdate(prevProps) {
        if (prevProps.scene != this.state.scene) {
            this.setState({
                scene: prevProps.scene
            })
        }
    }

    render() {
        return (
            <div>
                {
                    (this.props.scene == 0) ? <Intro /> :
                    (this.state.scene == 2) ? <FoodInsert food="Pickle" /> :
                    (this.state.scene == 3) ? <CutPrompt /> :
                    (this.state.scene == 4) ? <CutPickle /> :
                    (this.state.scene == 5) ? <FoodRemove food="Pickle" /> :
                    (this.state.scene == 6) ? <FoodInsert food="Lettuce" /> :
                    (this.state.scene == 7) ? <CutPrompt /> :
                    (this.state.scene == 8) ? <CutLettuce /> :
                    (this.state.scene == 9) ? <FoodRemove food="Lettuce" /> :
                    (this.state.scene == 10) ? <FoodInsert food="Cup" /> :
                    (this.state.scene == 11) ? <FillCupPrompt /> :
                    (this.state.scene == 12) ? <FillCup /> :
                    (this.state.scene == 13) ? <FoodRemove food="Cup" /> :
                    (this.state.scene == 14) ? <StirPrompt /> :
                    (this.state.scene == 15) ? <Sparkles /> :
                    (this.state.scene == 16) ? <HologramSalad /> :
                    (this.state.scene == 17) ? <Share /> :
                    (this.state.scene == 18) ? <Sponsers /> :
                    <Intro />
                }
            </div>
        );
    }
}

export default Animation;
