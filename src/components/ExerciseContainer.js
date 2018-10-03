import React from 'react'
import ExerciseList from './ExerciseList'
import { Input, Button, Modal, Icon } from 'semantic-ui-react'

class ExerciseContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false,
      clickedExercise: null,
      modalOpen: false,
      workoutName: ""
    }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  exerciseInfo = (exerciseObj) => {
    this.setState({
      clickedExercise: exerciseObj
    })
  }

  getName = (e) => {
    this.setState({
      workoutName: e.target.value
    })
  }

    render(){
    return(
    <div id="all-exercises" style={{minHeight: "100vh"}}>
      {this.props.newWorkout.length > 0 ?
        <Modal
          trigger={<Button onClick={this.handleOpen}>Go To Workout</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >

          <Modal.Content>
            <Input id="wo-name-input" transparent placeholder='Workout Name...' onChange={this.getName} value={this.state.workoutName}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => {this.handleClose(); this.props.saveWorkout(this.state.workoutName); this.props.myCurrentWorkout(); this.props.history.push('/workout')}} inverted>
              <Icon name='checkmark' /> Start
            </Button>
          </Modal.Actions>
        </Modal>
         : null }

      {this.props.newWorkout.length > 0 ? <Button onClick={this.props.emptyNewWorkoutArr}>Cancel</Button> :null }
      <Input id="seach-bar" onChange={this.props.filterExercises} icon='search' placeholder='Search...' />
      {this.props.exercises ? <ExerciseList getLastSetStats={this.props.getLastSetStats} removeExercise={this.props.removeExercise} changeColor={this.props.changeColor} user={this.props.user} newWorkout={this.props.newWorkout} displayNewWorkout={this.props.displayNewWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout} searchedExerciseArr={this.props.searchedExerciseArr} exercises={this.props.exercises} exerciseInfo={this.exerciseInfo} clickedExercise={this.state.clickedExercise} /> : null }
    </div>
    )
  }
}

export default ExerciseContainer
