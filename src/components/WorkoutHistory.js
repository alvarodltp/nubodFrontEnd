import React from 'react'
import { Dropdown } from 'semantic-ui-react'


class WorkoutHistory extends React.Component {

  workouts = () => {
    this.props.workouts.map(workout => {workout.name})
  }

  render(){
    return(
      <div id="workout-history">
        <h1>Your Past Workouts</h1>
        <Dropdown placeholder='Skills' fluid multiple selection options={this.workouts} />
        {this.props.workouts.map(workout => <li>{workout.date}</li>)}
      </div>
    )
  }
}

export default WorkoutHistory
