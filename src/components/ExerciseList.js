import React from 'react'
import { List, Container, Checkbox, Dropdown, Header, Icon, Modal, Image  } from 'semantic-ui-react'

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


      <Modal trigger={<List divided selection>
        {this.props.exercises.map(exercise => <List.Item onClick={() => this.props.exerciseInfo(exercise)}> {exercise.name} <Checkbox /> </List.Item> )}
      </List>}>

      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
        <Modal.Description>
          { this.props.clickedExercise ? <Header>{this.props.clickedExercise.name}</Header> :null }
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      </Modal>

      </Container>
    )
  }
}

export default ExerciseList
