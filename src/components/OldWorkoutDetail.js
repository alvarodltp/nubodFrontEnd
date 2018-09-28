import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

class OldWorkoutDetail extends React.Component {

  render(){
  let oldWorkout = this.props.selectedWorkoutHistory
  // debugger
    return(
      <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Exercise</Table.HeaderCell>
              <Table.HeaderCell>Set</Table.HeaderCell>
              <Table.HeaderCell>Reps</Table.HeaderCell>
              <Table.HeaderCell>Weight</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
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
              <Table.Cell>duration</Table.Cell>
            </Table.Row>
          </Table.Body>
        )}
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan='4'>
                <Button floated='right' labelPosition='left' primary size='small'>
                  <Icon /> Redo
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

    )
  }
}

export default OldWorkoutDetail
