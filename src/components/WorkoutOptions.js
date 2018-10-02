import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class WorkoutOptions extends React.Component {

  // generateSmartWorkout = () => {
  //   let muscle = this.props.lastTwoWorkouts.map(workout => workout.exercises)
  //   debugger
  // }




  render(){

    return(
      <div id="workout-options" style={{minHeight: "100vh"}}>
        <Link to="/all-exercises"><h1>Create Your Own Workout <FontAwesomeIcon icon="angle-double-right" size="2x"/></h1></Link>
        <h1>Create A Smart Workout <FontAwesomeIcon icon="angle-double-right" size="2x"/></h1>
      </div>
    )
  }
}

export default WorkoutOptions
