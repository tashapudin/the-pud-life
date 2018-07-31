import React, { Component } from 'react';
import './App.css';
import Habit from './Habit.js';
import { ColorFactory, defaultColors } from './ColorFactory.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.colorFactory = new ColorFactory(defaultColors);
    this.state = {
      value: '50',
      habits: [
        {
          id: guid(),
          title: "Do yoga",
          progress: "3",
          color: this.colorFactory.nextColor(),
          completed: true
        },

        {
          id: guid(),
          title: "learn to type",
          progress: "4",
          color: this.colorFactory.nextColor(),
          completed: false
        }
      ],
      currentDate: currentDate()
    };

    this.moodSet = this.moodSet.bind(this);
    this.setSlider = this.setSlider.bind(this);
    this.journalSet = this.journalSet.bind(this);
    this.habitAdd = this.habitAdd.bind(this);
    this.onHabitClicked = this.onHabitClicked.bind(this);

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
    const newHabit = { id: guid(), title: "i am new", progress: "0", color: this.colorFactory.nextColor(), completed: false };
    this.setState({ habits: [...this.state.habits, newHabit] });
  }

  onHabitClicked(id) {
    let indexNo;

    for (let i = 0; i < this.state.habits.length; i++) {
      if (this.state.habits[i].id === id) {
        indexNo = i;
        console.log(indexNo) ///never gets to this point
        break;
      }
    }

    // for(let i = this.state.habits.length; i >= 0; i--) {
    //   if(this.state.habits[i].id === id) 
    //   {
    //     indexNo = i;
    //     console.log(indexNo) ///never gets to this point
    //     break;
    //   }
    // }

    this.state.habits[indexNo].completed = !this.state.habits[indexNo].completed;
    this.setState({ habits: this.state.habits });

  }


  render() {

    const self = this;
    const poop = (

      <div className="app">
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" render={() => (<Mainpage setSlider={this.setSlider} habits={this.state.habits} state={this.state} moodSet={this.moodSet} journalSet={this.journalSet} habitAdd={this.habitAdd} onHabitClicked={this.onHabitClicked} />)} />
            <Route path="/timeline" render={() => (<Header title="timeline" />)} />
            <Route path="/habit/:id" render={(props) => (<HabitRoute id={props.match.params.id} habits={this.state.habits} />)} />
          </div>
        </BrowserRouter>
      </div >
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


function MoodButton(props) {
  const state = (props.activeMood === props.name ? 'active' : '');
  return <button className={state} name={props.name} onClick={props.moodSet} style={state === 'active' ? ({ backgroundColor: props.color }) : ({ backgroundColor: '#EDEDED' })}> <i className="material-icons" >{props.icon}</i>  </button>
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function HabitRoute(props) {
  const habit = props.habits.find((h) => (h.id == props.id));
  if (habit) {
    return <Header title={habit.title}> </Header>
  } else {
    return <div> habit not found </div>
  }

}


function Header(props) {
  const title = props.title;
  return (
    <div className="header">
      <h1> {title} </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
    </div>
  );

}

function Mainpage(props) {
  const { habits, setSlider, state, moodSet, journalSet, habitAdd, onHabitClicked } = props;
  return (
    <div>
      <Header title="good morning" />
      <div className="content">
        <div className="date">
          <h2> {state.currentDate} </h2>
        </div>
        <div className="moodHeader">today's mood</div>
        <div className="moods">
          <MoodButton activeMood={state.activeMood} name='extremelyHappy' color='#FFF255' moodSet={moodSet} icon="sentiment_very_satisfied" />
          <MoodButton activeMood={state.activeMood} name='veryHappy' color='#FFEDAA' moodSet={moodSet} icon=" sentiment_satisfied_alt" />
          <MoodButton activeMood={state.activeMood} name='happy' color='#E5E84B' moodSet={moodSet} icon="sentiment_satisfied" />
          <MoodButton activeMood={state.activeMood} name='sad' color='#E7F9D3' moodSet={moodSet} icon="sentiment_dissatisfied" />
          <MoodButton activeMood={state.activeMood} name='verySad' color='#C8E0FC' moodSet={moodSet} icon="sentiment_very_dissatisfied" />
          <MoodButton activeMood={state.activeMood} name='extremlySad' color='#E8CFFB' moodSet={moodSet} icon="mood_bad" />
        </div>
        <div className="motivationHeader">motivation level</div>
        <div className="sliderDiv">
          <input type="range" min="0" max="100" value={state.value} className="slider" onChange={setSlider} />
        </div>
        <div className="journalHeader">journal</div>
        <textarea className="journal" placeholder="What's up pudding?" value={state.journal} onChange={journalSet} />
        <div className="add">
          <i className="material-icons" onClick={habitAdd}>add</i>
        </div>
        {state.habits.map(habitObject => <Habit key={habitObject.id} title={habitObject.title} progress={habitObject.progress} color={habitObject.color} id={habitObject.id} completed={habitObject.completed} onHabitClicked={onHabitClicked}> </Habit>)}
        <Link to={'/timeline'}>
          <div className="timeline">
            <i className="material-icons">timeline</i>
          </div>
        </Link>
      </div>
    </div>);
}

export default App;
