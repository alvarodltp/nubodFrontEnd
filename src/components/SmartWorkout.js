import React from 'react'
import {Dropdown, Button} from 'semantic-ui-react'

  let workouts = [
      {name: 'Chest & Triceps', value: ['Chest', 'Triceps']},
      {name: 'Back & Biceps', value: ['Back', 'Biceps']},
      {name: 'Chest & Back', value: ['Chest', 'Back']},
      {name: 'Shoulders', value: ['Shoulders']},
      {name: 'Chest', value: ['Chest']},
      {name: 'Back', value: ['Back']},
      {name: 'Arms', value: ['Triceps','Biceps']},
      {name: 'Abs', value: ['Abs']},
      {name: 'Legs', value: ['Legs']},
      {name: 'Full Body', value: ['Full Body']}
  ]

  let exclusions = [
      {name: 'Chest & Triceps', value: ['Chest', 'Triceps']},
      {name: 'Back & Biceps', value: ['Back', 'Biceps']},
      {name: 'Chest & Back', value: ['Chest', 'Back']},
      {name: 'Shoulders', value: ['Shoulders', 'Chest']},
      {name: 'Chest', value: ['Chest', 'Shoulders']},
      {name: 'Back', value: ['Back']},
      {name: 'Arms', value: ['Triceps', 'Chest', 'Biceps', 'Back']},
      {name: 'Abs', value: ['Abs']},
      {name: 'Legs', value: ['Legs']},
      {name: 'Full Body', value: ['Full Body']},
  ]

class SmartWorkout extends React.Component {
  constructor(){
    super()
    this.state = {
      workoutNames: null,
      lastTwoWorkouts: null,
      groupsToExclude: null,
      bodyPartsToExclude: null,
      finalToExclude: null,
    }
  }

  setWorkoutInfo = () => {
    let workoutNames = this.props.workouts.map(workout => workout.name)
    let lastTwoWorkouts = workoutNames.slice(Math.max(workoutNames.length - 2, 0))
    let groupsToExclude = workouts.filter(workout => lastTwoWorkouts.includes(workout.name))
    let bodyPartsToExclude = groupsToExclude.map(group => group.value).flat()
    let finalToExclude = [ ...new Set(bodyPartsToExclude) ]
    this.setState({
      workoutNames: workoutNames,
      lastTwoWorkouts: lastTwoWorkouts,
      groupsToExclude: groupsToExclude,
      bodyPartsToExclude: bodyPartsToExclude,
      finalToExclude: finalToExclude
    }, () => this.filterExercises(finalToExclude))
  }

 filterExercises = (finalToExclude) => {
    debugger
    if (finalToExclude.length > 0) {
      let currentMuscGroup = finalToExclude.pop()
      let exclusions = exclusions.filter(bodyGroup => !bodyGroup.value.includes(currentMuscGroup))
      // filterExercises(finalToExclude)
    } else {
      console.log(exclusions)
    }
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
        text: 'Legs',
        value: 'legs',
        key: 'legs'
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

    return(
      <React.Fragment>
          <div id='workout-options-dropdown' style={{minHeight: "100vh"}}>
            <h3>Select Muscle Group</h3>
            <Dropdown placeholder='Select Workout' fluid selection options={workoutOptions}/>
            <Button style={{marginTop: "20px"}}>Create Smart Workout</Button>
            <h4>Or</h4>
            <Button onClick={this.setWorkoutInfo}>Get Personalized Suggestions</Button>
          </div>
      </React.Fragment>
    )
  }
}

export default SmartWorkout
