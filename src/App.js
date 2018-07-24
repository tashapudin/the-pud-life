import React, { Component } from 'react';
import './App.css';
import Habit from './Habit.js';
import { ColorFactory, defaultColors } from './ColorFactory.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '50' };
    this.moodSet = this.moodSet.bind(this);
    this.colorFactory = new ColorFactory(defaultColors);
    this.habits = [
      {
        title: "Do yoga",
        progress: "3",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      },

      {
        title: "learn to type",
        progress: "4",
        color: this.colorFactory.nextColor()
      }
    ];
  }

  setSlider(event) {
    this.setState({ value: event.target.value });
    console.log(event.target);
  }

  moodSet(event) {
    this.setState({activeMood: event.currentTarget.name});
    console.log(this.state, event);
  }

  render() {
    const poop = (

      <div className="app">
        <div className="header">
          <h1> good morning </h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="content">
          <div className="date">
            <h2> 02/07/2018 </h2>
          </div>
          <div className="moods">
            <MoodButton activeMood = {this.state.activeMood} name = 'veryhappy' moodSet = {this.moodSet} icon = "mood"/>
            <MoodButton activeMood = {this.state.activeMood} name = 'happy' moodSet = {this.moodSet} icon = "sentiment_satisfied"/>
            <MoodButton activeMood = {this.state.activeMood} name = 'extremelyHappy' moodSet = {this.moodSet} icon = "sentiment_very_satisfied"/>
            <MoodButton activeMood = {this.state.activeMood} name = 'extremlySad' moodSet = {this.moodSet} icon = "mood_bad"/>
            <MoodButton activeMood = {this.state.activeMood} name = 'sad' moodSet = {this.moodSet} icon = "sentiment_dissatisfied"/>
            <MoodButton activeMood = {this.state.activeMood} name = 'verySad' moodSet = {this.moodSet} icon = "sentiment_very_dissatisfied"/>
          </div>
          <div className="sliderDiv">
            <input type="range" min="0" max="100" value={this.state.value} className="slider" onChange={(e) => this.setSlider(e)} />
          </div>
          <textarea className="journal" placeholder="What's up pudding?" />
          <div className="add">
            <i className="material-icons">add</i>
          </div>
          {this.habits.map(habitObjectToHabitElement)}
          <div className="timeline">
            <i className="material-icons">timeline</i>
          </div>
        </div>
      </div>
    );
    return poop;
  }
}

function habitObjectToHabitElement(habitObject, i) {
  return <Habit key = {i} title={habitObject.title} progress={habitObject.progress} color={habitObject.color}> </Habit>
}

function MoodButton(props) {
  return <button className={props.activeMood === props.name ? 'active' : ''} name = {props.name} onClick= {props.moodSet}> <i className="material-icons" >{props.icon}</i>  </button>
}

export default App;
