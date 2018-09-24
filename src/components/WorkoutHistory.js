import React from 'react'

class WorkoutHistory extends React.Component {
  render(){
    console.log(this.props.workouts)
    return(
      <div>
        <h1>Workout History</h1>
        {this.props.workouts.map(workout => <li>{workout.date}</li>)}
      </div>
    )
  }
}

export default WorkoutHistory
