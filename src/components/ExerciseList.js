import React from 'react'
import { List, Header, Modal, Image, Rating } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ExerciseList extends React.Component {
  constructor(){
    super()
    this.state={
      open: false,
      textColor: ""
    }
  }

  changeColorToGreen = () => {
    this.setState({
      textColor: 'green'
    })
  }

  open = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }



  render(){
    return(
      <div  id="exercise-page">
        <Modal id="exercise-modal" open={this.state.open} trigger={
        <List divided selection>
          {this.props.searchedExerciseArr.map(exercise =>
        <List.Item id={exercise.id} onClick={() => {this.props.exerciseInfo(exercise); this.open();}}> {exercise.name} </List.Item> )}
        </List>}>
        { this.props.clickedExercise ? <Modal.Header>{this.props.clickedExercise.name}</Modal.Header> :null }
        <Modal.Content image>
           { this.props.clickedExercise ? <Image wrapped size='medium' src={this.props.clickedExercise.instruction_image}/> :null }
          <Modal.Description>
            { this.props.clickedExercise ? <Header>Muscle Group: {this.props.clickedExercise.muscle_group.toUpperCase()}</Header> :null }
            { this.props.clickedExercise ? <Header>Target: {this.props.clickedExercise.target.split("_").join(" ").toUpperCase()}</Header> :null }
            { this.props.clickedExercise ? <p>Instructions: {this.props.clickedExercise.instructions}</p> :null }
            { this.props.clickedExercise ? <p>Equipment: {this.props.clickedExercise.equipment_needed}</p> :null }
            { this.props.clickedExercise ? <Rating maxRating={5} defaultRating={this.props.clickedExercise.rating} icon='star' size='small' /> :null }
            { this.props.clickedExercise ? <FontAwesomeIcon id={this.props.clickedExercise.id} onClick={() => {this.props.addExerciseToWorkout(this.props.clickedExercise); this.close();}} icon="plus-circle" size="2x"/> : null }
          </Modal.Description>
        </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ExerciseList
