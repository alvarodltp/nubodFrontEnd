import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class WorkoutOptions extends React.Component {
  render(){

    return(
      <div id="workout-options" style={{minHeight: "100vh"}}>
        <Link to="/all-exercises"><h1 id="redo-workout">Create Your Own Workout<FontAwesomeIcon id="arrow" icon="angle-double-right" size="2x"/></h1></Link>
        <Link to="/workout-history"><h1 id="redo-workout">Redo A Previous Workout<FontAwesomeIcon id="arrow" icon="angle-double-right" size="2x"/></h1></Link>
      </div>
    )
  }
}

export default WorkoutOptions
