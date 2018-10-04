
import React from 'react'
import Input from './Input'


let counter = 1

class WorkoutDetailItem extends React.Component {
constructor(){
  super()
  this.state = {
    addSet: 1,
    inputArr: []
  }
}

addSet = () => {
  this.setState({
    addSet: this.state.addSet + 1
  })
}

saveSet = (weight, reps) => {
  // debugger
  fetch(`http://localhost:3001/create-set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        exercise_sets: {
          workout_id: this.props.newWorkoutId,
          exercise_id: this.props.exercise.id,
          weight: weight,
          reps: reps
        }
      })
    })
    .then(response => response.json())
    .then(json => {this.props.updateMyCurrentWorkout(json)}
  )
}

removeSet = (e) => {
  let id = e.target.parentElement.id
  let inputArr = this.state.inputArr.filter(input => input.props.id != id)
  // debugger
    this.setState({
      inputArr: inputArr
    })
  }

calculateInputs = () => {
  let arr = []
  for(var i=0; i < this.state.addSet; i++){
    let id = counter
    counter++
    // debugger
    arr.push(<Input removeSet={this.removeSet} id={"form-"+id} saveSet={this.saveSet}/>)
  }
  return arr
}

inputArrNum = () => {
  let inputArr = [...this.state.inputArr]
  let newInputsArr = this.calculateInputs()
  this.setState({
    inputArr: [...inputArr, ...newInputsArr]
  })
}


render(){
  let lastSetForExercise;
  this.props.lastSets.length > 0 ? lastSetForExercise = this.props.lastSets.filter(set => set.exercise_id === this.props.exercise.id).pop() : lastSetForExercise =  null
  return(
    <div>
    <form>
      <h3>{this.props.exercise.name}</h3>
      {lastSetForExercise != null ? <p>Last - Reps: {lastSetForExercise.reps} Weight:{lastSetForExercise.weight}lb</p> : <p>No Previous History</p>}
      {this.state.inputArr}
     <p id="add-set" onClick={this.addSet} onClick={this.inputArrNum} id="add-set">Add Set</p>
    </form>
    </div>
  )
}
}

export default WorkoutDetailItem
