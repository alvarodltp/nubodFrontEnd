import React from 'react'
import WorkoutDetail from './WorkoutDetail'
import {Button} from 'semantic-ui-react'

class WorkoutContainer extends React.Component {

  // updateWorkoutDuration = (totalDuration) => {
  //   // debugger
  //   fetch(`http://localhost:3001/on-workout`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`
  //       },
  //       body: JSON.stringify({
  //         workout: {
  //           duration: totalDuration
  //         }
  //       })
  //     }).then(response => response.json())
  // }


  render(){
    return(
    <div id="workout-container">
      <WorkoutDetail workouts={this.props.workouts} newWorkout={this.props.newWorkout} newWorkoutId={this.props.newWorkoutId} quote={this.props.quoteOfTheDay}/>
      <Button onClick={() => {this.props.history.push('/workout-history')}} id="finish-workout-button" size="tiny">Finish</Button>
      <Button id="cancel-workout-button" color="red" size="tiny">Cancel</Button>
    </div>
    )
  }
}

export default WorkoutContainer
