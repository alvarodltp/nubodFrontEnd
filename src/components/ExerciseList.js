import React from 'react'
import { List, Container, Checkbox, Dropdown, Header, Icon, Modal, Image, Rating } from 'semantic-ui-react'

class ExerciseList extends React.Component {

  render(){
    // debugger
    return(
      <Container>
      <Header as='h4'>
        <Icon name='search' />
        <Header.Content>
          Muscle Group
          <Dropdown inline header='Adjust time span' />
        </Header.Content>
      </Header>

      <Header as='h4'>
        <Icon name='search' />
        <Header.Content>
        Category
          <Dropdown inline header='Adjust time span' />
        </Header.Content>
      </Header>


      <Modal trigger={
      <List divided selection>
        {this.props.exercises.map(exercise => <List.Item onClick={() => this.props.exerciseInfo(exercise)}> {exercise.name} <Checkbox /> </List.Item> )}
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
        </Modal.Description>
      </Modal.Content>
      </Modal>

      </Container>
    )
  }
}

export default ExerciseList
