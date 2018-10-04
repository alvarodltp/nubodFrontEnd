import React from 'react'
import WorkoutDetail from './WorkoutDetail'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class WorkoutContainer extends React.Component {

  render(){
    return(
      <React.Fragment>
      {this.props.newWorkout.length > 0 ?
    <div id="workout-container" style={{minHeight: "100vh"}}>
      <WorkoutDetail lastSets={this.props.lastSets} updateMyCurrentWorkout={this.props.updateMyCurrentWorkout} addLastWorkoutToState={this.props.addLastWorkoutToState} workouts={this.props.workouts} newWorkout={this.props.newWorkout} newWorkoutId={this.props.newWorkoutId} quote={this.props.quoteOfTheDay}/>
    <Button.Group size="tiny">
      <Button size="tiny" positive onClick={() => {this.props.emptyCurrentWorkout(); this.props.emptyNewWorkoutArr(); this.props.calculateRepsAndSets(); this.props.pushCurrentWorkoutToWorkouts(); this.props.history.push('/workout-history')}} id="finish-workout-button" size="tiny">Finish</Button>
       <Button.Or size="tiny"/>
      <Button onClick={() => {this.props.emptyCurrentWorkout(); this.props.emptyNewWorkoutArr(); this.props.saveWorkout(); this.props.history.push('/workout-history')}}>Save For Later</Button>
    </Button.Group>
      <Button size="tiny" onClick={(e) => {this.props.removeWorkout(e, null); this.props.emptyCurrentWorkout(); this.props.emptyNewWorkoutArr(); this.props.history.push('/all-exercises')}} id="cancel-workout-button" color="red" size="tiny">Cancel</Button>
    </div> :
    <div id="no-exercises-message" style={{minHeight: "100vh"}}>
      <h1>There aren't any exercises in your workout.</h1>
      <Link to="/all-exercises">
        <Button>Create a workout</Button>
      </Link>
    </div> }
    </React.Fragment>


    )
  }
}

export default WorkoutContainer
