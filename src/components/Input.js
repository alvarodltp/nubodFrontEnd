import React from 'react'
import { Checkbox, Icon, Modal, Button } from 'semantic-ui-react'

class Input extends React.Component {
  constructor(){
    super()
    this.state = {
      weight: "",
      reps: "",
      checked: false,
      modalOpen: false,
      seconds: "00",
      minutes: "2"
    }
    this.secondsRemaining;
    this.intervalHandle;
  }

  handleOpen = () =>
  this.setState({
    modalOpen: true
  })

  handleClose = () =>
  this.setState({
    modalOpen: false
  })



  tick = () => {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }

    if (min < 10) {
    this.setState({
      value: "0" + min,
     })
    }

    if (min === 0 & sec === 0) {
    clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
    }

    startCountDown = () => {
      this.intervalHandle = setInterval(this.tick, 1000);
      let time = this.state.minutes;
      this.secondsRemaining = time * 60;
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  completeSet = (e) => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      if (this.state.checked === true) {
        this.props.saveSet(this.state.weight, this.state.reps)
      }
    })
  }

  render(){
    return(
      <form id={this.props.id}>
            Reps
          <input onChange={this.handleChange} id="html-input" type="text" name="reps" value={this.state.reps}/>
            Weight
          <input onChange={this.handleChange} id="html-input" type="text" name="weight" value={this.state.weight}/>

          <Modal
              trigger={<Checkbox onClick={() => {this.completeSet(); this.startCountDown(); this.handleOpen()}} checked={this.state.checked} label='Done'/>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              basic
              size='small'
            >
              <Modal.Content>
                <h1 id="timer" style={{ fontSize: 200}}>{this.state.minutes}:{this.state.seconds}</h1>
              </Modal.Content>

              <Modal.Actions>
                <Button color='green' onClick={this.handleClose} inverted>
                  <Icon name='checkmark' /> Got it
                </Button>
              </Modal.Actions>
            </Modal>
















          <Icon onClick={this.props.deleteInput} name="close"/>
      </form>
    )
  }
}

export default Input
