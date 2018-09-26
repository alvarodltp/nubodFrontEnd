import React from 'react'
import ExerciseList from './ExerciseList'
import { Input, Button } from 'semantic-ui-react'

class ExerciseContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false,
      clickedExercise: null
    }
  }

  exerciseInfo = (exerciseObj) => {
    this.setState({
      clickedExercise: exerciseObj
    })
  }

    render(){
    return(
    <div id="all-exercises">
      {this.props.newWorkout.length > 0 ? <Button onClick={() => this.props.history.push('/workout')}>Go To Workout</Button> : null }
      {this.props.newWorkout.length > 0 ? <Button>Save For Later</Button> :null }
      <Input id="seach-bar" onChange={this.props.filterExercises} icon='search' placeholder='Search...' />
      {this.props.exercises ? <ExerciseList changeColor={this.props.changeColor} displayNewWorkout={this.props.displayNewWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout} searchedExerciseArr={this.props.searchedExerciseArr} exercises={this.props.exercises} exerciseInfo={this.exerciseInfo} clickedExercise={this.state.clickedExercise} /> : null }
    </div>
    )
  }
}

export default ExerciseContainer
