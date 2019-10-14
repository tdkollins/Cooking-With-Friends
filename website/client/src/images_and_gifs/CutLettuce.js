import React, { Component } from 'react';
import "./CutAnimation.css";

class CutPickle extends Component {
    constructor() {
        super();
        this.state = {
            startPointsVertical: [600, 1200],
            //endPointVertical: -350,
            endPointsVertical: [-2250, -1550],
            startPointsHorizontal: [300, 700],
            //endPointHorizontal: 2050
            endPointsHorizontal: [2050, 2750],
            endPointDistanceHorizontal: 0,
            endPointDistanceVertical: 0
        };
        this.width = 1920;
        this.height = 1080;
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        this.interval = setInterval(() => {
            console.log(this.state.endPointsVertical[0] + this.state.endPointDistanceVertical);
            console.log()
            if (((this.state.endPointsVertical[0] +
                this.state.endPointDistanceVertical) > 2000) &&
                this.state.endPointsHorizontal[
                    this.state.endPointsHorizontal.length - 1] +
                    this.state.endPointDistanceHorizontal < 0) {
                        console.log('here');
                this.setState({
                    endPointsVertical: [-2250, -1550],
                    endPointsHorizontal: [2050, 2750],
                    endPointDistanceHorizontal: 0,
                    endPointDistanceVertical: 0
                });
            } else {
                this.setState({
                    endPointDistanceVertical: (this.state.endPointDistanceVertical + 35),
                    endPointDistanceHorizontal: (this.state.endPointDistanceHorizontal - 35)
                });
            }
        }, 25);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const startsVertical = this.state.startPointsVertical;
        const startsHorizontal = this.state.startPointsHorizontal;
        const endsVertical = this.state.endPointsVertical;
        const endsHorizontal = this.state.endPointsHorizontal;
        const horizontalDistance = this.state.endPointDistanceHorizontal;
        const verticalDistance = this.state.endPointDistanceVertical;
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < startsVertical.length; i++) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'Pink';
            this.ctx.fillStyle = 'Pink';
            this.ctx.arc(startsVertical[i], 50, 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'Pink';
            this.ctx.moveTo(startsVertical[i], 50);
            if (endsVertical[i] + verticalDistance < 50) {
                this.ctx.lineTo(startsVertical[i], 50);
            } else if (endsVertical[i] + verticalDistance > 1000) {
                this.ctx.lineTo(startsVertical[i], 1000);
            } else {
                this.ctx.lineTo(startsVertical[i], endsVertical[i] + verticalDistance);
            }
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
            this.ctx.restore();
        }
        for (let i = 0; i < startsHorizontal.length; i++) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'Pink';
            this.ctx.fillStyle = 'Pink';
            this.ctx.arc(1650, startsHorizontal[i], 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'Pink';
            this.ctx.moveTo(1650, startsHorizontal[i]);
            if (endsHorizontal[i] + horizontalDistance > 1650) {
                this.ctx.lineTo(1650, startsHorizontal[i]);
            } else if (endsHorizontal[i] + horizontalDistance < 0) {
                this.ctx.lineTo(0, startsHorizontal[i]);
            } else {
                this.ctx.lineTo(endsHorizontal[i] + horizontalDistance,
                    startsHorizontal[i]);
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
