import React from 'react'
import OldWorkoutDetail from './OldWorkoutDetail'
import { Dropdown } from 'semantic-ui-react'

class WorkoutHistory extends React.Component {

  render(){
    let options = this.props.workouts ? this.props.workouts.map(workout => ({key: workout.id, text: `${workout.name}-${workout.date}`, value: workout})) : [{}]
    return(
      <div>
        <div id="date-container">
          <h1>Your Past Workouts</h1>
             <Dropdown placeholder="Past Workouts" fluid selection options={options} onChange={this.props.displayWorkout}/>
        </div>

        <div id="workout-info">
          {this.props.selectedWorkoutHistory ? <OldWorkoutDetail selectedWorkoutHistory={this.props.selectedWorkoutHistory} /> : null}
        </div>
      </div>

    )
  }
}

export default WorkoutHistory
