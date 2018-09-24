import React from 'react'
import WorkoutDetail from './WorkoutDetail'

class WorkoutContainer extends React.Component {

  getUserWorkouts = () => {
    fetch("http://localhost:3001/workouts")
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }


  render(){
    return(
    <div>
      <h1>WOD</h1>
      <WorkoutDetail newWorkout={this.props.newWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout}/>
    </div>
    )
  }
}

export default WorkoutContainer
