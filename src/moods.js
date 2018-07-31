import React, { Component } from 'react';
import './moods.css';


class moods extends Component {
    render() {
        const poop = (
            <div className="moods" style={{ backgroundColor: this.props.color }} />
        );
        return poop;
    }
}

export default Habit;
