import React from 'react'
import WorkoutDetail from './WorkoutDetail'

class WorkoutContainer extends React.Component {

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
