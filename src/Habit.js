import React, { Component } from 'react';
import './Habit.css';
import { Link } from 'react-router-dom';


class Habit extends Component {
    render() {
        const poop = (
            <div className="habit" style={{ backgroundColor: this.props.color.primary , borderStyle: (this.props.completed === true ? 'solid' : 'none'), borderColor: this.props.color.tertiary}} >
                <div className="habit-title" onClick={(e) => this.props.onHabitClicked(this.props.id)}>
                    <h3> {this.props.title} </h3>
                    <p> {this.props.progress} of 7 times this week</p>
                </div>
                    <div className="more" style={{ backgroundColor: this.props.color.secondary }}> <Link to={`/habit/${this.props.id}`}> <i className="material-icons">chevron_right</i> </Link> </div>
            </div>
        );
        return poop;
    }
}

export default Habit;
