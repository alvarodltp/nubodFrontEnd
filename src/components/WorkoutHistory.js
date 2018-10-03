import React from 'react'
import OldWorkoutDetail from './OldWorkoutDetail'
import { Dropdown } from 'semantic-ui-react'

class WorkoutHistory extends React.Component {

  render(){
  
    let options = this.props.workoutHistory ? this.props.workoutHistory.map(workout => ({key: workout.id, text: `${workout.name}-${workout.date}`, value: workout})) : [{}]

    return(
      <div style={{minHeight: "100vh"}}>
        <div id="date-container">
          <h1>Your Past Workouts</h1>
             <Dropdown placeholder="Past Workouts" fluid selection options={options} onChange={this.props.displayWorkout}/>
        </div>

        <div id="workout-info">
          {this.props.selectedWorkoutHistory ? <OldWorkoutDetail {...this.props} updateWorkoutHistory={this.props.updateWorkoutHistory} myCurrentWorkout={this.props.myCurrentWorkout} removeWorkout={this.props.removeWorkout} saveWorkout={this.props.saveWorkout} getInfoToRedoWorkout={this.props.getInfoToRedoWorkout} selectedWorkoutHistory={this.props.selectedWorkoutHistory} /> : null}
        </div>
      </div>

    )
  }
}

export default WorkoutHistory
