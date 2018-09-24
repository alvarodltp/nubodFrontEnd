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
import EditProfileForm from './EditProfileForm'

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
        exercises: null,
        searchedExerciseArr: null,
        newWorkout: []
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
  }

updateUser = user => {
  this.setState( {user: user.user} );
};

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

exercisesPage = (e) => {
  this.props.history.push('/all-exercises')
}

userPage = () => {
  this.props.history.push('/profile')
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
  console.log(workoutArr)
  workoutArr.push(exercise)
  this.setState({
    newWorkout: workoutArr
  }
  )
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route render={props=> <Navbar {...props} logOut={this.logOut} user={this.state.user} />} />
            <Route exact path="/signup" render={props=> <Signup {...props} updateUser= {this.updateUser} />} />
            <Route exact path="/profile" render={props=> <Profile {...props} user={this.state.user} updateUser={this.updateUser}/> } />
            <Route exact path='/login' render={props=> <Login {...props} updateUser={this.updateUser} />} />
            <Route exact path='/all-exercises' render={props=> <ExerciseContainer {...props} changeColor={this.changeColor} displayNewWorkout={this.displayNewWorkout} addExerciseToWorkout={this.addExerciseToWorkout} exercises={this.state.exercises} filterExercises={this.filterExercises} searchedExerciseArr={this.state.searchedExerciseArr}/>} />
            <Route exact path='/workout' render={props=> <WorkoutContainer {...props} newWorkout={this.state.newWorkout} />} />
            { this.state.user ? <Footer exercisesPage={this.exercisesPage} user={this.userPage} /> : null }
          </React.Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
