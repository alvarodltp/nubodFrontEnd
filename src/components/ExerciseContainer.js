import React from 'react'
import ExerciseList from './ExerciseList'
import { Input, Button, Modal, Icon, Radio, Form } from 'semantic-ui-react'

class ExerciseContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false,
      clickedExercise: null,
      modalOpen: false,
      workoutName: "",
      selectedPart: "",
      showFilterOptions: false
    }
  }

  showOptions = () => {
    this.setState({
      showFilterOptions: !this.state.showFilterOptions
    })
  }

  handleChange = (e, {value}) =>
  this.setState({
    selectedPart: value
  })

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

    <Button style={{marginBottom: "20px"}} onClick={this.showOptions}>Filter Exercises</Button>
    {this.state.showFilterOptions === true ?
      <Form style={{marginBottom: "20px"}}>
        <Form.Field>
          <Radio
            label='All'
            name='radioGroup'
            value='all'
            checked={this.state.selectedPart === 'all'}
            onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
          />
        </Form.Field>
          <Form.Field>
            <Radio
              label='Chest'
              name='radioGroup'
              value='chest'
              checked={this.state.selectedPart === 'chest'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Back'
              name='radioGroup'
              value='back'
              checked={this.state.selectedPart === 'back'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Biceps'
              name='radioGroup'
              value='biceps'
              checked={this.state.selectedPart === 'biceps'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Triceps'
              name='radioGroup'
              value='triceps'
              checked={this.state.selectedPart === 'triceps'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Shoulders'
              name='radioGroup'
              value='shoulders'
              checked={this.state.selectedPart === 'shoulders'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Legs'
              name='radioGroup'
              value='legs'
              checked={this.state.selectedPart === 'legs'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Abs'
              name='radioGroup'
              value='abs'
              checked={this.state.selectedPart === 'abs'}
              onChange={(e, value) => {this.handleChange(e, value); this.props.filterExerByMusGroup(e)}}
            />
          </Form.Field>
        </Form> : null}


      {this.props.newWorkout.length > 0 ?
        <Modal
          trigger={<Button size="mini" id="on-list-button" style={{marginBottom: "30px"}} onClick={this.handleOpen}>Go To Workout</Button>}
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


      {this.props.newWorkout.length > 0 ? <Button size="mini" id="on-list-button" onClick={this.props.emptyNewWorkoutArr}>Cancel</Button> :null }
      <Input id="seach-bar" onChange={this.props.filterExercises} icon='search' placeholder='Search...' />
      {this.props.exercises ? <ExerciseList selectedPart={this.state.selectedPart} getLastSetStats={this.props.getLastSetStats} removeExercise={this.props.removeExercise} changeColor={this.props.changeColor} user={this.props.user} newWorkout={this.props.newWorkout} displayNewWorkout={this.props.displayNewWorkout} addExerciseToWorkout={this.props.addExerciseToWorkout} searchedExerciseArr={this.props.searchedExerciseArr} exercises={this.props.exercises} exerciseInfo={this.exerciseInfo} clickedExercise={this.state.clickedExercise} /> : null }
    </div>
    )
  }
}

export default ExerciseContainer
