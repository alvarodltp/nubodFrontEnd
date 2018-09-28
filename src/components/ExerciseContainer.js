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

  saveWorkout = () => {
    let today = new Date(); ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
    let user_id = this.props.user.id
    fetch("http://localhost:3001/workouts", {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.workoutName,
        user_id: user_id,
        date: today,
        total_weight_lifted: "",
        personal_record: ""

        })
      }).then(response => response.json())
      .then(json => {
        this.props.addWorkoutToState(json)
      })
  }

  getName = (e) => {
    this.setState({
      workoutName: e.target.value
    })
  }


    render(){
    return(
    <div id="all-exercises">
      {this.props.newWorkout.length > 0 ?
        <Modal
          trigger={<Button onClick={this.handleOpen}>Go To Workout</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >

          <Modal.Content>
            <Input id="wo-name-input" transparent placeholder='Workout Name' onChange={this.getName} value={this.state.workoutName}/>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => {this.handleClose(); this.saveWorkout(); this.props.history.push('/workout')}} inverted>
              <Icon name='checkmark' /> Done
            </Button>
          </Modal.Actions>
        </Modal>
         : null }


      {this.props.newWorkout.length > 0 ? <Button>Save For Later</Button> :null }
      {this.props.newWorkout.length > 0 ? <Button onClick={this.props.emptyNewWorkoutArr}>Cancel</Button> :null }
      <Input id="seach-bar" onChange={this.props.filterExercises} icon='search' placeholder='Search...' />
      {this.props.exercises ? <ExerciseList changeColor={this.props.changeColor} newWorkout={this.props.newWorkout} displayNewWorkout={this.props.displayNewWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout} searchedExerciseArr={this.props.searchedExerciseArr} exercises={this.props.exercises} exerciseInfo={this.exerciseInfo} clickedExercise={this.state.clickedExercise} /> : null }
    </div>
    )
  }
}

export default ExerciseContainer
