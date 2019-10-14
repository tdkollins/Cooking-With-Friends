import React, { Component } from 'react';
import "./Menu.css";
import Soma from "./../resources/Soma.png";
import SharePic from "./../resources/share.png";

class Share extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="Menu">
                <div className="Widget-Backing">
                    <div className="Upper-Widget">
                        <img
                            className="Phone"
                            src={SharePic} />
                        <div className="SomaSprite">
                            <img
                                src={Soma} />
                        </div>
                    </div>
                    <div className="Textbox">
                        <h2>Congratulations! Please share your finished meal to social media!</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;
