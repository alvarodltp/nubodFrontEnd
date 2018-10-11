import React from 'react'
import { List, Modal, Message } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
    let newWorkoutArrIds = this.props.newWorkout.map(exercise => exercise.id)
    return(
      <div  id="exercise-page">
        <Modal id="exercise-modal" open={this.state.open} trigger={
        <List divided selection>
          {this.props.searchedExerciseArr.map(exercise =>
        <List.Item style={{fontSize: "16px"}} id={exercise.id} onClick={() => {this.props.exerciseInfo(exercise); this.open();}}> {exercise.name} {this.props.newWorkout.includes(exercise) ? <FontAwesomeIcon id="check" icon="check" size="1x"/> : null} </List.Item> )}
        </List>}>
        { this.props.clickedExercise ? <Modal.Header>{this.props.clickedExercise.name} <FontAwesomeIcon onClick={this.close} id="close-icon-modal" icon="times" size="1x"/> </Modal.Header> :null }
        <Modal.Content image>
           { this.props.clickedExercise ? <Image wrapped size='medium' src={this.props.clickedExercise.instruction_image}/> :null }
          <Modal.Description>
            { this.props.clickedExercise ? <Header>Muscle Group: {this.props.clickedExercise.muscle_group.toUpperCase()}</Header> :null }
            { this.props.clickedExercise ? <Header>Target: {this.props.clickedExercise.target.split("_").join(" ").toUpperCase()}</Header> :null }
            { this.props.clickedExercise ? <p>Instructions: {this.props.clickedExercise.instructions}</p> :null }
            { this.props.clickedExercise ? <p>Equipment: {this.props.clickedExercise.equipment_needed}</p> :null }
            { this.props.clickedExercise && !newWorkoutArrIds.includes(this.props.clickedExercise.id) ?
              <Button style={{paddingButton: "10px", backgroundColor: "#A8FC00", color: "gray"}} size='tiny' floated="right" id={this.props.clickedExercise.id} onClick={() => {this.props.getLastSetStats(this.props.clickedExercise); this.props.addExerciseToWorkout(this.props.clickedExercise); this.close();}}>Add To Workout</Button>
              : <h3 id="remove-exercise-text" onClick={() => {this.props.removeExercise(this.props.clickedExercise); this.close()}}>Remove Exercise</h3> }
          </Modal.Description>
        </Modal.Content>
        </Modal>
        </div>

    )
  }
}

export default ExerciseList
