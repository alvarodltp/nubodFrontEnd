import React from 'react'
import { Table, Button, Icon, Modal, Input } from 'semantic-ui-react'

class OldWorkoutDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      modalOpen: false,
      workoutName: ""
    }
  }

  getWorkoutName = (e) => {
    this.setState({
      workoutName: e.target.value
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render(){
  let oldWorkout = this.props.selectedWorkoutHistory
    return(
      <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell id="table"/>
              <Table.HeaderCell id="table-cell">Exercise</Table.HeaderCell>
              <Table.HeaderCell id="table-cell">Set</Table.HeaderCell>
              <Table.HeaderCell id="table-cell">Reps</Table.HeaderCell>
              <Table.HeaderCell id="table-cell">Weight</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {oldWorkout.exercises.map(exercise =>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
              </Table.Cell>
              <Table.Cell>{exercise.name}</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).reps}</Table.Cell>
              <Table.Cell>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).weight}</Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
              <Button negative floated='right' size='tiny' onClick={(e) => {this.props.updateWorkoutHistory(oldWorkout.id); this.props.removeWorkout(e, oldWorkout.id)}}>Delete</Button>

              <Modal
                trigger={<Button floated='right' size='tiny' onClick={() => {this.props.getInfoToRedoWorkout(oldWorkout); this.handleOpen()}}>Redo</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
              >

                <Modal.Content>
                  <Input id="wo-name-input" transparent placeholder="Workout Name..." onChange={this.getWorkoutName} value={this.state.workoutName}/>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={() => {this.handleClose(); this.props.saveWorkout(this.state.workoutName); this.props.myCurrentWorkout(); this.props.history.push('/workout')}} inverted>
                    <Icon name='checkmark' /> Start
                  </Button>
                </Modal.Actions>
              </Modal>


              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>






    )
  }
}

export default OldWorkoutDetail
