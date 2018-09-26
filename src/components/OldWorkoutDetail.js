import React from 'react'
import { Table } from 'semantic-ui-react'

class OldWorkoutDetail extends React.Component {
  render(){
  let oldWorkout = this.props.selectedWorkoutHistory
    return(
      <div id="old-workout-details">
        {oldWorkout.exercises.map(exercise =>
          <div id="old-workout-detail">
          <Table>
            <Table.Header>
              <Table.Row>
              <Table.Cell collapsing>
              </Table.Cell>
                <Table.Cell>{exercise.name}</Table.Cell>
                <Table.Cell>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).reps}</Table.Cell>
                <Table.Cell>{oldWorkout.exercise_sets.find(set => set.exercise_id === exercise.id).weight}</Table.Cell>
              </Table.Row>
            </Table.Header>
          </Table>
          </div>
        )}
      </div>
    )
  }
}

export default OldWorkoutDetail
