import React from 'react'
import ExerciseList from './ExerciseList'

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

  // showModal = () => {
  //   this.setState({ show: true });
  // };
  //
  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  //create a function that will show the modal with the exercise objext on click of the exercise. Use event? How will you get the exercise object?

    render(){
    return(
    <div>
      {this.props.exercises ? <ExerciseList exercises={this.props.exercises} exerciseInfo={this.exerciseInfo} clickedExercise={this.state.clickedExercise}/> : null }
    </div>
    )
  }
}

export default ExerciseContainer
