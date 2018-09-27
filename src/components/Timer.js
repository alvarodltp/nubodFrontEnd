import React from 'react'

class Timer extends React.Component {
  constructor(){
    super()
    this.state={
      seconds: "00",
      minutes: "2"
    }
  }

  countDown = () ={
    setTimeout(this.state.seconds)
  }





render(){
  return(
    <div>
    <h1 onClick={this.countDown}>{this.state.minutes}:{this.state.seconds}</h1>
    </div>
    )
  }
}

export default Timer
