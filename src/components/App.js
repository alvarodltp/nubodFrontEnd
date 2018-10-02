import React, { Component } from 'react';
import '../App.css'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import ExerciseContainer from './ExerciseContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import WorkoutContainer from './WorkoutContainer'
import Navbar from './Navbar'
import WorkoutHistory from './WorkoutHistory'
import WorkoutOptions from './WorkoutOptions'
import Home from './Home'
import SearchBar from './SearchBar'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"


library.add(fas)

const requestHelper = url =>
// debugger
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("signup failed");
    } else {
      return res.json();
    }
  });


class App extends Component {
  constructor() {
      super();
      this.state = {
        user: null,
        userToUpdate: null,
        exercises: null,
        searchedExerciseArr: null,
        newWorkout: [],
        newWorkoutId: null,
        workouts: null,
        selectedWorkoutHistory: null,
        quote: null,
        endWorkoutTime: "",
        startWorkoutTime: "",
        totalDuration: "",
        allWeightLifted: "",
        allRepsLifted: "",
        allSets: null,
        workoutsCompleted: "",
        lastTwoWorkouts: null,
        visible: false,
        myCurrentWorkout: null
      };
    }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

fetchUser = () => {
  requestHelper("http://localhost:3001/profile").then(this.updateUser);
};

componentDidMount() {
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
    this.getAllExercises()
    this.getUserWorkouts()
    this.quoteOfTheDay()
    this.getAllSets()

  }

updateUser = user => {
  this.setState( {user: user.user} );
};

userToUpdateOnForm = (user) => {
  this.setState( {user: user.user } )
}

logOut = () => {
  localStorage.clear()
  this.setState({
    user: null
  })
}

getAllExercises = () => {
  fetch("http://localhost:3001/exercises")
  .then(response => response.json())
  .then(json => {
    this.setState({
      exercises: json,
      searchedExerciseArr: json
    })
  })
}

getAllSets = () => {
  fetch("http://localhost:3001/exercise_sets")
  .then(response => response.json())
  .then(json => {
    this.setState({
      allSets: json
    }, () => this.calculateRepsAndSets())
  })
}

quoteOfTheDay = () => {
  fetch("https://quotes.rest/qod")
  .then(response => response.json())
  .then(json => {
  this.setState({
    quote:json
  })
})
}

getUserWorkouts = () => {
  fetch("http://localhost:3001/workouts")
  .then(response => response.json())
  .then(workouts => {
    this.setState({
      lastTwoWorkouts: workouts.slice(Math.max(workouts.length - 2, 0)),
      workouts: workouts
    }, () => this.workoutsCompleted())
  })
}

addWorkoutToState = (workout) => {
  this.setState({
    myCurrentWorkout: workout,
    newWorkoutId: workout.id
  })
}

exercisesPage = (e) => {
  this.props.history.push('/all-exercises')
}


filterExercises = (e) => {
  let searchedTerm = e.target.value.toLowerCase()
  let allExercises = [...this.state.exercises]
  let filtered = allExercises.filter(exercise => exercise.name.toLowerCase().includes(searchedTerm))
  this.setState({
  searchedExerciseArr: filtered
  })
}

addExerciseToWorkout = (exercise) => {
  let workoutArr = [...this.state.newWorkout]
  workoutArr.push(exercise)
  this.setState({
    newWorkout: workoutArr
    }
  )
}

displayWorkout = (e, workoutData) => {
  let workoutObj = workoutData.value
  this.setState({
    selectedWorkoutHistory: workoutObj
  })
}

emptyNewWorkoutArr = () => {
  this.setState({
    newWorkout: []
  })
}

saveWorkout = (name) => {
  let today = new Date(); ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
  let user_id = this.state.user.id
  fetch("http://localhost:3001/workouts", {
    method: 'POST',
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      user_id: user_id,
      date: today,
      total_weight_lifted: "",
      personal_record: ""

      })
    }).then(response => response.json())
    .then(json => {
      this.addWorkoutToState(json)
    })
}

removeWorkout = (e, woid) => {
  let id;
  e.target.innerText === "Delete" ? id=woid : id=this.state.newWorkoutId
  let copyOfWorkouts = [...this.state.workouts]
  let workouts = copyOfWorkouts.filter(workout => workout.id != id)
  return fetch(`http://localhost:3001/workouts/${id}`, {
    method: 'delete',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  })
  .then(response => response.json())
  .then(json => (
    this.setState({
      workouts: workouts
    })
  ))
}

calculateRepsAndSets = () => {
  let allSets = [...this.state.allSets]
  let allWeightArr = allSets.map(set => set.weight).flat()
  let allRepsArr = allSets.map(set => set.reps).flat()
  let totalWeight = allWeightArr.reduce((a, b) => a + b, 0)
  let totalReps = allRepsArr.reduce((a, b) => a + b, 0)
  this.setState({
    allWeightLifted: totalWeight,
    allRepsLifted: totalReps
  })
}

workoutsCompleted = () => {
  let totalWorkouts = [...this.state.workouts].length
  this.setState({
    workoutsCompleted: totalWorkouts
  })
}

getInfoToRedoWorkout = (workoutObj) => {
  this.setState({
    newWorkout: workoutObj.exercises
  })
}

removeExercise = (exerciseObj) => {
  let exerciseArr = [...this.state.newWorkout]
  let afterRemove = exerciseArr.filter(exercise => exercise.id != exerciseObj.id)
  this.setState({
    newWorkout: afterRemove
  })
}

myCurrentWorkout = () => {
  let workouts = [...this.state.workouts]
  let lastWorkout = workouts.pop()
  this.setState({
    myCurrentWorkout: lastWorkout
  })
}

updateMyCurrentWorkout = (set) => {
  let workout = this.state.myCurrentWorkout
  workout.exercise_sets.push(set)
  this.setState({
    myCurrentWorkout: workout
  })
}

pushCurrentWorkoutToWorkouts = () => {
  let workouts = [...this.state.workouts]
  let myCurrentWorkout = this.state.myCurrentWorkout
  workouts.push(myCurrentWorkout)
  debugger
  this.setState({
    workouts: workouts
  })
}

emptyCurrentWorkout = () => {
  this.setState({
    myCurrentWorkout: null
  })
}

getLastSetStatsForExercise = () => {
  let workouts = [...this.state.workouts]
  debugger
}

  render() {
    const { visible } = this.state
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>


      <div id="nav">
       <FontAwesomeIcon id="bar" icon='bars' size="2x" onClick={this.handleButtonClick}/>
       <Sidebar.Pushable as={Segment}>
         <Sidebar
           id="sidebar"
           as={Menu}
           animation='overlay'
           icon='labeled'
           inverted
           onHide={this.handleSidebarHide}
           vertical
           visible={visible}
           width='thin'
         >
           { this.state.myCurrentWorkout === null ?
            <Menu.Item as='a'>
            <Link to="/new-workout">
              <FontAwesomeIcon id="slide-button" icon="plus" size="2x"/>
              <br />
              <br />
              <label id="menu-text">New Workout</label>
            </Link>
           </Menu.Item> :

           <Menu.Item as='a'>
           <Link to="/workout">
             <FontAwesomeIcon id="slide-button" icon="heartbeat" size="2x"/>
             <br />
             <br />
             <label id="menu-text">Current Workout</label>
           </Link>
          </Menu.Item> }

            <Menu.Item as='a'>
            <Link to="/profile"><FontAwesomeIcon id="slide-button" icon="user" size="2x"/>
            <br />
            <br />
            <label id="menu-text">Profile</label>
            </Link>
           </Menu.Item>

           <Menu.Item as='a'>
            <Link to="/workout-history"><FontAwesomeIcon id="slide-button" icon="calendar" size="2x"/>
            <br />
            <br />
            <label id="menu-text">Workout History</label>
            </Link>
           </Menu.Item>

           <Menu.Item as='a'>
            <Link to="/all-exercises">
            <FontAwesomeIcon id="slide-button" icon="dumbbell" size="2x"/>
            <br />
            <br />
            <label id="menu-text">All Exercises</label>
            </Link>
           </Menu.Item>

           <Menu.Item as='a'>
            <Link to="/login">
            <br />
            <br />
            <label id="menu-text">Logout</label>
            </Link>
           </Menu.Item>
         </Sidebar>

         <Sidebar.Pusher>

            {this.state.exercises ? <Route exact path='/' render={props=> <Home {...props} exercises={this.state.exercises} />} /> : null }

            <Route exact path='/signup' render={props=> <Signup {...props} updateUser= {this.updateUser} />} />

            {this.state.user ? <Route exact path="/profile" render={props=> <Profile {...props} workoutsCompleted={this.state.workoutsCompleted} allRepsLifted={this.state.allRepsLifted} allWeightLifted={this.state.allWeightLifted} user={this.state.user} first_name={this.state.first_name} updateUser={this.updateUser} workouts={this.state.workouts}/> } /> : null }

            <Route exact path='/login' render={props=> <Login {...props} updateUser={this.updateUser} />} />

            { this.state.exercises ? <Route exact path='/all-exercises' render={props=> <ExerciseContainer {...props} saveWorkout={this.saveWorkout} myCurrentWorkout={this.myCurrentWorkout} removeExercise={this.removeExercise} fetchUser={this.fetchUser} startWorkoutTime={this.startWorkoutTime} emptyNewWorkoutArr={this.emptyNewWorkoutArr} user={this.state.user} saveWorkout={this.saveWorkout} newWorkout={this.state.newWorkout} changeColor={this.changeColor} displayNewWorkout={this.displayNewWorkout} addExerciseToWorkout={this.addExerciseToWorkout} exercises={this.state.exercises} filterExercises={this.filterExercises} searchedExerciseArr={this.state.searchedExerciseArr}/>} /> : null }

            {this.state.quote ? <Route exact path='/workout' render={props=> <WorkoutContainer {...props} saveWorkout={this.saveWorkout} emptyCurrentWorkout={this.emptyCurrentWorkout} updateMyCurrentWorkout={this.updateMyCurrentWorkout} pushCurrentWorkoutToWorkouts={this.pushCurrentWorkoutToWorkouts} calculateRepsAndSets={this.calculateRepsAndSets} emptyNewWorkoutArr={this.emptyNewWorkoutArr} removeWorkout={this.removeWorkout} getTotalWorkoutTime={this.getTotalWorkoutTime} totalDuration={this.state.totalDuration} endWorkoutTime={this.endWorkoutTime} newWorkout={this.state.newWorkout} workouts={this.state.workouts} newWorkoutId={this.state.newWorkoutId} quoteOfTheDay={this.state.quote} user={this.state.user}/>} /> : null}

            {this.state.lastTwoWorkouts && this.state.user ? <Route exact path='/new-workout' render={props=> <WorkoutOptions {...props} lastTwoWorkouts={this.state.lastTwoWorkouts}/>} /> : null}

            {this.state.workouts ? <Route exact path='/workout-history' render={props=> <WorkoutHistory {...props} myCurrentWorkout={this.myCurrentWorkout} saveWorkout={this.saveWorkout} removeWorkout={this.removeWorkout} getInfoToRedoWorkout={this.getInfoToRedoWorkout} workouts={this.state.workouts} displayWorkout={this.displayWorkout} selectedWorkoutHistory={this.state.selectedWorkoutHistory}/>} /> : null}

          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
        </React.Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
