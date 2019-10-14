import React, { Component } from 'react';
import "./CutAnimation.css";

class CutPickle extends Component {
    constructor() {
        super();
        this.state = {
            startPoints: [300, 375, 450, 525, 600, 675, 750,
                 825, 900, 975, 1050, 1125, 1200, 1275, 1350,
                 1425, 1500, 1575, 1650],
            endPoints: [-1300, -1225, -1150, -1075, -1000, -925,
                 -850, -775, -700, -625, -550, -475, -400, -325,
                 -250, -175, -100, -25, 50],
            endPointDistance: 0
        };
        this.width = 1920;
        this.height = 1080;
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        this.interval = setInterval(() => {
            if (this.state.endPoints[0] +
                this.state.endPointDistance > 2000) {
                    console.log('here');
                this.setState({
                        endPoints: [-1300, -1225, -1150, -1075, -1000, -925,
                            -850, -775, -700, -625, -550, -475, -400, -325,
                            -250, -175, -100, -25, 50],
                        endPointDistance: 0
                    });
            } else {
                this.setState({endPointDistance: (this.state.endPointDistance + 25)});
            }
        }, 25);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const starts = this.state.startPoints;
        const ends = this.state.endPoints;
        const distance = this.state.endPointDistance;
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < starts.length; i++) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'Pink';
            this.ctx.fillStyle = 'Pink';
            this.ctx.arc(starts[i], 450, 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'Pink';
            this.ctx.moveTo(starts[i], 450);
            if (ends[i] + distance < 450) {
                this.ctx.lineTo(starts[i], 450);
            } else if (ends[i] + distance > 1000) {
                this.ctx.lineTo(starts[i], 1000);
            } else {
                this.ctx.lineTo(starts[i], ends[i] + distance);
            }
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
            this.ctx.restore();
        }
    }

    render() {
        return (
            <div class="Canvas-Container">
                <canvas ref="canvas" width={1920} height={1080} />
            </div>
        );
    }
}

export default CutPickle;
