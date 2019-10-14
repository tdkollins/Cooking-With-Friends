import React, { Component } from 'react';
import './App.css';
import Animation from "./app_components/Animation.js";
import Menu from "./app_components/Menu.js"

class App extends Component {
    constructor() {
        super();
        this.state = {
            scene: 0,
            apiResponse: ""
        };
        this.handleKey = this.handleKey.bind(this);
    }

    callAPI() {
        fetch("https://09446195.ngrok.io/TestAPI")
            .then((res) => res.json())
            .then((res) => this.setState({ apiResponse: res }));
        if (this.state.apiResponse) {
            this.setState({scene: this.state.apiResponse["scene"]});
        }
    }

    componentWillMount() {
        this.callAPI();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKey);
        this.interval = setInterval(() => {
            this.callAPI()
        }, 150);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey);
    }

    handleKey(event) {
        /*if (event.keyCode == 32) {
            this.setState({
                scene: this.state.scene + 1
            });
            console.log(this.state.scene);
        }*/
        /*this.callAPI();*/
    }

    render() {
        return (
          <div className="App">
            {
                (this.state.scene == 1) ?
                <Menu /> :
                <div>
                    <Animation scene={this.state.scene}/>
                </div>
            }
          </div>
        );
    }
}

export default App;
