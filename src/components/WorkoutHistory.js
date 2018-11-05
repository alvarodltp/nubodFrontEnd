import React from 'react'
import OldWorkoutDetail from './OldWorkoutDetail'
import { Card, Segment } from 'semantic-ui-react'

class WorkoutHistory extends React.Component {
  // constructor {
  //   super()
  //   this.setState = {
  //
  //   }
  // }

  render(){

    // let options = this.props.workoutHistory ? this.props.workoutHistory.map(workout => ({key: workout.id, header: `${workout.name}-${workout.date}`, value: workout})) : [{}]
    return(
      <div style={{minHeight: "100vh"}}>
        <div id="past-workouts">
          <h1>Your Past Workouts</h1>
        {this.props.workoutHistory ? this.props.workoutHistory.map(workout =>
          <Card
            id="old-workout"
            onClick={() => {this.props.displayWorkout(workout); this.props.history.push('/workout-detail')}}
            header={workout.name}
            meta={workout.date}
            description=''
            /> ) : null }
        </div>
      </div>
    )
  }
}

// <div id="workout-info">
//   {this.props.selectedWorkoutHistory ? <OldWorkoutDetail {...this.props} setSelectedWorkoutHistoryNull={this.props.setSelectedWorkoutHistoryNull} updateWorkoutHistory={this.props.updateWorkoutHistory} myCurrentWorkout={this.props.myCurrentWorkout} removeWorkout={this.props.removeWorkout} saveWorkout={this.props.saveWorkout} getInfoToRedoWorkout={this.props.getInfoToRedoWorkout} selectedWorkoutHistory={this.props.selectedWorkoutHistory} /> : null}
// </div>

export default WorkoutHistory
