import React from 'react'
import {Dropdown, Button} from 'semantic-ui-react'


class SmartWorkout extends React.Component {

  bodyPartSuggestion = () => {
  let workoutNames = this.props.workouts.map(workout => workout.name)
  let lastTwo = workoutNames.slice(Math.max(workoutNames.length - 2, 0))
  // if(lastTwo.includes("Chest"))
  }


  render(){
    let workoutOptions = [
      {
        text: 'Chest',
        value: 'chest',
        key: 'chest'
      },
      {
        text: 'Chest & Triceps',
        value: 'chest & triceps',
        key: 'chest & triceps'
      },
      {
        text: 'Chest & Back',
        value: 'chest & back',
        key: 'chest & back'
      },
      {
        text: 'Back',
        value: 'back',
        key: 'back'
      },
      {
        text: 'Back & Biceps',
        value: 'back & biceps',
        key: 'back & biceps'
      },
      {
        text: 'Arms',
        value: 'arms',
        key: 'arms'
      },
      {
        text: 'Shoulders',
        value: 'shoulders',
        key: 'shoulders'
      },
      {
        text: 'Shoulders & Abs',
        value: 'shoulders & abs',
        key: 'shoulders & abs'
      },
      {
        text: 'Legs',
        value: 'legs',
        key: 'legs'
      },
      {
        text: 'Legs & Abs',
        value: 'legs & abs',
        key: 'legs & abs'
      },
      {
        text: 'Abs',
        value: 'abs',
        key: 'abs'
      },
      {
        text: 'Full-Body',
        value: 'full-body',
        key: 'full-body'
      }
    ]

    debugger
    return(
      <React.Fragment>
          <div id='workout-options-dropdown' style={{minHeight: "100vh"}}>
            <h3>Select Muscle Group</h3>
            <Dropdown placeholder='Select Workout' fluid selection options={workoutOptions}/>
            <h4>Or</h4>
            <Button onClick={this.bodyPartSuggestion}>Get Personalized Suggestions</Button>
          </div>
      </React.Fragment>
    )
  }
}

export default SmartWorkout
