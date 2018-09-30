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
        workoutsCompleted: ""
      };
    }


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
  .then(workouts =>
    {this.setState({
    workouts: workouts
  }, () => this.workoutsCompleted())
})
}

addWorkoutToState = (workout) => {
  let workouts = [...this.state.workouts, workout]
  this.setState({
    workouts: workouts,
    newWorkoutId: workout.id,
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

// startWorkoutTime = () => {
//   let d = new Date();
//   this.setState({
//     startWorkoutTime: `${d.getHours()}:${d.getMinutes()}`
//   })
// }
//
//
// endWorkoutTime = () => {
//   let d = new Date();
//   this.setState({
//     endWorkoutTime: `${d.getHours()}:${d.getMinutes()}`
//   })
// }
//
// getTotalWorkoutTime = () => {
//   let endHours = this.state.endWorkoutTime.split(':')[0]
//   let endMinutes = this.state.endWorkoutTime.split(':')[1]
//   let startHours = this.state.startWorkoutTime.split(':')[0]
//   let startMinutes = this.state.startWorkoutTime.split(':')[1]
//   let totalHours;
//   endHours > startHours ? (totalHours = endHours - startHours) : (totalHours = 0)
//   let totalMinutes = endMinutes - startMinutes
//   let totalWorkoutTime = `${totalHours}:${totalMinutes}`
//   debugger
//   this.setState({
//   totalDuration: totalWorkoutTime
//   })
// }

removeWorkout = () => {
  let id = this.state.newWorkoutId
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

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            {this.state.exercises ? <Route exact path='/' render={props=> <Home {...props} exercises={this.state.exercises} />} /> : null }

            <Route render={props=> <Navbar {...props} logOut={this.logOut} user={this.state.user} />} />

            <Route exact path='/signup' render={props=> <Signup {...props} updateUser= {this.updateUser} />} />

            {this.state.user ? <Route exact path="/profile" render={props=> <Profile {...props} workoutsCompleted={this.state.workoutsCompleted} allRepsLifted={this.state.allRepsLifted} allWeightLifted={this.state.allWeightLifted} user={this.state.user} first_name={this.state.first_name} updateUser={this.updateUser} workouts={this.state.workouts}/> } /> : null }

            <Route exact path='/login' render={props=> <Login {...props} updateUser={this.updateUser} />} />

            { this.state.exercises ? <Route exact path='/all-exercises' render={props=> <ExerciseContainer {...props} fetchUser={this.fetchUser} startWorkoutTime={this.startWorkoutTime} emptyNewWorkoutArr={this.emptyNewWorkoutArr} addWorkoutToState={this.addWorkoutToState} user={this.state.user} saveWorkout={this.saveWorkout} newWorkout={this.state.newWorkout} changeColor={this.changeColor} displayNewWorkout={this.displayNewWorkout} addExerciseToWorkout={this.addExerciseToWorkout} exercises={this.state.exercises} filterExercises={this.filterExercises} searchedExerciseArr={this.state.searchedExerciseArr}/>} /> : null }

            {this.state.quote ? <Route exact path='/workout' render={props=> <WorkoutContainer {...props} calculateRepsAndSets={this.calculateRepsAndSets} emptyNewWorkoutArr={this.emptyNewWorkoutArr} removeWorkout={this.removeWorkout} getTotalWorkoutTime={this.getTotalWorkoutTime} totalDuration={this.state.totalDuration} endWorkoutTime={this.endWorkoutTime} newWorkout={this.state.newWorkout} workouts={this.state.workouts} newWorkoutId={this.state.newWorkoutId} quoteOfTheDay={this.state.quote} user={this.state.user}/>} /> : null}

            <Route exact path='/new-workout' render={props=> <WorkoutOptions {...props} />} />

            <Route exact path='/workout-history' render={props=> <WorkoutHistory {...props} workouts={this.state.workouts} displayWorkout={this.displayWorkout} selectedWorkoutHistory={this.state.selectedWorkoutHistory}/>} />

            { this.state.user ? <Footer exercisesPage={this.exercisesPage} user={this.userPage} /> : null }
          </React.Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
