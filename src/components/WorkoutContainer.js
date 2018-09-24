import React from 'react'
import WorkoutDetail from './WorkoutDetail'
import WorkoutHistory from './WorkoutHistory'

class WorkoutContainer extends React.Component {
  render(){
    return(
    <div id="workout-container">
      <WorkoutHistory />
      <WorkoutDetail newWorkout={this.props.newWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout}/>
    </div>
    )
  }
}

export default WorkoutContainer
