import React, { Component } from 'react';
import "./Menu.css"
import Soma from "./../resources/Soma.png"
import Arrow from "./../resources/Arrow.png"
import Salad from "./../resources/Salad.png"

class Menu extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="Menu">
                <div className="Widget-Backing">
                    <div className="Upper-Widget">
                        <div className="Select">
                            <div className="Arrow-Left">
                                <img
                                    src={Arrow}
                                    width="125px"
                                    height="125px" />
                                </div>
                            <div>
                                <img
                                    src={Salad}
                                    width="450px"
                                    height="450px" />
                                </div>
                            <div>
                                <img
                                    src={Arrow}
                                    width="125px"
                                    height="125px" />
                                </div>
                        </div>
                        <div className="SomaSprite">
                            <img
                                src={Soma} />
                        </div>
                    </div>
                    <div className="Textbox">
                        <h2>Pick a recipe! Use the keyboard to switch between options and I will show you how to cook it.</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
