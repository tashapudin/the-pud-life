import React, { Component } from 'react';
import './App.css';
import Habit from './Habit.js';
import { ColorFactory, defaultColors } from './ColorFactory.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.colorFactory = new ColorFactory(defaultColors);
    this.state = {
      value: '50',
      habits: [
        {
          title: "Do yoga",
          progress: "3",
          color: this.colorFactory.nextColor()
        },

        {
          title: "learn to type",
          progress: "4",
          color: this.colorFactory.nextColor()
        }
      ],
      currentDate: currentDate()
    };

    this.moodSet = this.moodSet.bind(this);
    this.setSlider = this.setSlider.bind(this);
    this.journalSet = this.journalSet.bind(this);
    this.habitAdd = this.habitAdd.bind(this);

  }

  setSlider(event) {
    this.setState({ value: event.target.value });
  }

  moodSet(event) {
    this.setState({ activeMood: event.currentTarget.name });
    console.log(this.state, event);
  }

  journalSet(event) {
    this.setState({ journal: event.target.value });
  }

  habitAdd(event) {
    const newHabit = { title: "i am new", progress: "0", color: this.colorFactory.nextColor() };
    this.setState({ habits: [...this.state.habits, newHabit] });
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
            <h2> {this.state.currentDate} </h2>
          </div>
          <div className="moods">
            <MoodButton activeMood={this.state.activeMood} name='veryhappy' moodSet={this.moodSet} icon="mood" />
            <MoodButton activeMood={this.state.activeMood} name='happy' moodSet={this.moodSet} icon="sentiment_satisfied" />
            <MoodButton activeMood={this.state.activeMood} name='extremelyHappy' moodSet={this.moodSet} icon="sentiment_very_satisfied" />
            <MoodButton activeMood={this.state.activeMood} name='extremlySad' moodSet={this.moodSet} icon="mood_bad" />
            <MoodButton activeMood={this.state.activeMood} name='sad' moodSet={this.moodSet} icon="sentiment_dissatisfied" />
            <MoodButton activeMood={this.state.activeMood} name='verySad' moodSet={this.moodSet} icon="sentiment_very_dissatisfied" />
          </div>
          <div className="sliderDiv">
            <input type="range" min="0" max="100" value={this.state.value} className="slider" onChange={this.setSlider} />
          </div>
          <textarea className="journal" placeholder="What's up pudding?" value={this.state.journal} onChange={this.journalSet} />
          <div className="add">
            <i className="material-icons" onClick={this.habitAdd}>add</i>
          </div>
          {this.state.habits.map(habitObjectToHabitElement)}
          <div className="timeline">
            <i className="material-icons">timeline</i>
          </div>
        </div>
      </div>
    );
    return poop;
  }
}

function currentDate() {
  const today = new Date();
  let dd = today.getDate(); 
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  return dd + '/' + mm + '/' + yyyy;
}

function habitObjectToHabitElement(habitObject, i) {
  return <Habit key={i} title={habitObject.title} progress={habitObject.progress} color={habitObject.color}> </Habit>
}

function MoodButton(props) {
  return <button className={props.activeMood === props.name ? 'active' : ''} name={props.name} onClick={props.moodSet}> <i className="material-icons" >{props.icon}</i>  </button>
}

export default App;
