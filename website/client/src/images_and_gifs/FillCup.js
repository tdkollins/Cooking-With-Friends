import React, { Component } from 'react';
import "./CutAnimation.css";

class CutPickle extends Component {
    constructor() {
        super();
        this.state = {
            startPointsX: [1170, 730, 1100, 1100],
            startPointsY: [325, 325, 900, 900],
            endPointsX: [1100, 800, 800, 800],
            endPointsY: [900, 900, 900, 900],
            distance: [0, -8, -16, -24],
            distanceTravel: 0,
            fillLineXLeft: 1125,
            fillLineXRight: 775,
            fillLineY: 700
        };
        this.width = 1920;
        this.height = 1080;
    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        this.ctx = canvas.getContext("2d");
        this.interval = setInterval(() => {
            if ((this.state.distance[this.state.distance.length - 1] +
                this.state.distanceTravel) > 30) {
                    this.setState({
                        distanceTravel: 0
                    });
                }
            else {
                this.setState({
                    distanceTravel: (this.state.distanceTravel + 1)
                });
            }
        }, 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        const startX = this.state.startPointsX;
        const startY = this.state.startPointsY;
        const endX = this.state.endPointsX;
        const endY = this.state.endPointsY;
        const distance = this.state.distance;
        const distanceTravel = this.state.distanceTravel;
        const endLineXLeft = this.state.fillLineXLeft;
        const endLineXRight = this.state.fillLineXRight;
        const endLineY = this.state.fillLineY;
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < startX.length; i++) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'Pink';
            this.ctx.fillStyle = 'Pink';
            this.ctx.arc(startX[i], startY[i], 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.lineWidth = 10;
            this.ctx.strokeStyle = 'Pink';
            this.ctx.fillStyle = 'Pink';
            this.ctx.arc(endX[i], endY[i], 10, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();

            if ((distance[i] + distanceTravel) > 0 && (distance[i] + distanceTravel) <= 8) {
                if (i != distance.length - 1) {
                    let endPointX = startX[i] + (((endX[i] - startX[i]) / 8) * (distance[i] + distanceTravel))
                    let endPointY = startY[i] + (((endY[i] - startY[i]) / 8) * (distance[i] + distanceTravel))
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = 'Pink';
                    this.ctx.moveTo(startX[i], startY[i]);
                    this.ctx.lineTo(endPointX, endPointY)
                    this.ctx.lineWidth = 5;
                    this.ctx.stroke();
                    this.ctx.restore();
                } else {
                    let pointLeftX = startX[i] + ((((endLineXLeft - startX[i]) / 8) * (distance[i] + distanceTravel)))
                    let pointY = startY[i] + ((((endLineY - startY[i]) / 8) * (distance[i] + distanceTravel)))
                    let pointRightX = endX[i] + ((((endLineXRight - endX[i]) / 8) * (distance[i] + distanceTravel)))
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = 'Blue';
                    this.ctx.moveTo(pointLeftX, pointY);
                    this.ctx.lineTo(pointRightX, pointY);
                    this.ctx.lineWidth = 15;
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            } else if ((distance[i] + distanceTravel) > 8) {
                if (i != distance.length - 1) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = 'Pink';
                    this.ctx.moveTo(startX[i], startY[i]);
                    this.ctx.lineTo(endX[i], endY[i])
                    this.ctx.lineWidth = 5;
                    this.ctx.stroke();
                    this.ctx.restore();
                } else {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = 'Blue';
                    this.ctx.moveTo(endLineXLeft, endLineY);
                    this.ctx.lineTo(endLineXRight, endLineY);
                    this.ctx.lineWidth = 15;
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            }
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
