import React, { Component } from 'react';
import '../App.css'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'

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
        user: null
      };
    }

fetchUser = () => {
  requestHelper("http://localhost:3001/profile").then(this.updateUser);
};

componentDidMount() {
    if (localStorage.getItem("token")) {
      this.fetchUser();
    }
    // this.fetchPaintings();
  }

updateUser = user => {
  this.setState({ user });
};



  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/signup" render={props=> <Signup {...props} updateUser= {this.updateUser} />} />
          <Route exact path="/profile" render={props=> <Profile user={this.state.user} />} />
          <Route exact path='/login' render={props=> <Login {...props} updateUser={this.updateUser} />} /> 
        </React.Fragment>
      </BrowserRouter>
      <Navbar />
      </div>

    );
  }
}

export default App;
