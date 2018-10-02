import React from 'react'
import WorkoutDetail from './WorkoutDetail'
import {Button} from 'semantic-ui-react'

class WorkoutContainer extends React.Component {

  render(){
    return(
    <div id="workout-container" style={{minHeight: "100vh"}}>
      <WorkoutDetail updateMyCurrentWorkout={this.props.updateMyCurrentWorkout} addLastWorkoutToState={this.props.addLastWorkoutToState} workouts={this.props.workouts} newWorkout={this.props.newWorkout} newWorkoutId={this.props.newWorkoutId} quote={this.props.quoteOfTheDay}/>
      <Button onClick={() => {this.props.calculateRepsAndSets(); this.props.pushCurrentWorkoutToWorkouts(); this.props.history.push('/workout-history')}} id="finish-workout-button" size="tiny">Finish</Button>
      <Button onClick={() => {this.props.removeWorkout(); this.props.emptyCurrentWorkout(); this.props.emptyNewWorkoutArr(); this.props.history.push('/all-exercises')}} id="cancel-workout-button" color="red" size="tiny">Cancel</Button>
    </div>
    )
  }
}

export default WorkoutContainer
