
import React from 'react'
import Input from './Input'

let counter = 0

class WorkoutDetailItem extends React.Component {
constructor(){
  super()
  this.state = {
    addSet: 1,
    checked: false,
    inputArr: []
  }
}

addSet = () => {
  this.setState({
    addSet: this.state.addSet + 1
  })
}

completeSet = (e) => {
  this.setState({
    checked: !this.state.checked
  })
}


calculateInputs = () => {
  let arr = []
  for(let i=0; i < this.state.addSet; i++){
    let id=counter++
    arr.push(<Input handleChange={this.props.handleChange} inputId={id}/>)
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

  return(
    <div>
    <form>
      <h3>{this.props.exercise.name}</h3>
      {this.state.inputArr}
     <p onClick={this.addSet} onClick={this.inputArrNum} id="add-set">Add Set</p>
    </form>
    </div>
  )
}
}

export default WorkoutDetailItem
