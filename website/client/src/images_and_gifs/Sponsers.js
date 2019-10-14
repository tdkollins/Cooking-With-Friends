import React, { Component } from 'react';
import Mhacks from "./../resources/Mhacks.png";
import Facebook from "./../resources/Facebook.png";
import Google from "./../resources/Google Cloud.png";
import MajorLH from "./../resources/mlh.png";
import "./Sponsers.css"

class Sponsers extends Component {
    render() {
        return (
            <div>
                <img
                    src={Mhacks}
                    id="Mhacks"
                    width="600px"
                    height="600px" />
                <img
                    src={Facebook}
                    id="Facebook"
                    width="600px"
                    height="600px" />
                <img
                    src={MajorLH}
                    id="MLH"
                    width="500px"
                    height="200px" />
                <img
                    src={Google}
                    id="Google"
                    width="650px"
                    height="650px" />
            </div>
        );
    }
}

export default Sponsers;
