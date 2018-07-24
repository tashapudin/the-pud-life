import React, { Component } from 'react';
import './Habit.css';


class Habit extends Component {
    render() {
        const poop = (
            <div className="habit" style = {{backgroundColor: this.props.color.primary}} >
                <div className="habit-title" >
                    <h3> {this.props.title} </h3>
                    <p> {this.props.progress} of 7 times this week</p>
                </div>

                <div className="more" style = {{backgroundColor: this.props.color.secondary}}> <i className="material-icons">chevron_right</i> </div>
            </div>
        );
        return poop;
    }
}

export default Habit;
