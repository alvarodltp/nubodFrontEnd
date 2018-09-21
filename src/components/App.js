import React, { Component } from 'react';
import '../App.css'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import ExerciseContainer from './ExerciseContainer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
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
        exercises: []
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
  this.setState({ user });
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
      exercises: json
    })
  })
}


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/signup" render={props=> <Signup {...props} updateUser= {this.updateUser} />} />
            {this.state.user ? <Route exact path="/profile" render={props=> <Profile {...props} user={this.state.user} logOut={this.logOut} />} /> : null}
            <Route exact path='/login' render={props=> <Login {...props} updateUser={this.updateUser} />} />
            <Route exact path='/all-exercises' render={props=> <ExerciseContainer {...props} exercises={this.state.exercises}/>} />
            <Navbar />
          </React.Fragment>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
