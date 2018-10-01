import React from 'react'
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

  handleSubmit= () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  render(){
    return(

  <div id="navbar" className="ui secondary menu">
    <Link to="/profile">Profile</Link>
    <Link to="/workout-history">WO History</Link>
    <Link to="/new-workout">New Workout</Link>
    <Link to="/all-exercises">All Exercises</Link>
    <Link to="/user-stats">Progress</Link>
  </div>

    )
  }
}

export default Navbar
