import React from 'react'

class Timer extends React.Component {
  constructor(){
    super()
    this.state={
      seconds: "00",
      minutes: "2"
    }
  }

  this.secondsRemaining;
  this.intervalHandle;

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



render(){
  return(
    <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h1 style={{ fontSize: 100, marginLeft:100}}>{this.minutes}:{this.seconds}</h1>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>

    )
  }
}

export default Timer
