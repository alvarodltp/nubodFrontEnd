import React from 'react'
import OldWorkoutDetail from './OldWorkoutDetail'

class WorkoutHistory extends React.Component {

  render(){
    return(
      <div id="date-container">
        <h1>Your Past Workouts</h1>
        {this.props.workouts ?
        <ul>
            {this.props.workouts.map(workout => <li onClick={() => this.props.displayWorkout(workout)}>{workout.date} </li>)}
        </ul> : <p>No Workouts!</p> }

        <div id="workout-info">
          {this.props.selectedWorkoutHistory ? <OldWorkoutDetail selectedWorkoutHistory={this.props.selectedWorkoutHistory} /> : null}
        </div>
      </div>
    )
  }
}

export default WorkoutHistory
