import React from 'react'
import WorkoutDetail from './WorkoutDetail'

class WorkoutContainer extends React.Component {
  render(){
    
    return(
    <div id="workout-container">
      <WorkoutDetail newWorkout={this.props.newWorkout} quote={this.props.quoteOfTheDay}/>
    </div>
    )
  }
}

export default WorkoutContainer
