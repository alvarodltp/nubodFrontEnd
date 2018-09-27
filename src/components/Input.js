import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'

class Input extends React.Component {
  constructor(){
    super()
    this.state = {
      weight: "",
      reps: "",
      checked: false
    }
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
          <Checkbox onClick={this.completeSet} checked={this.state.checked} label='Done'/>
          <Icon onClick={this.props.deleteInput} name="close"/>
      </form>
    )
  }
}

export default Input
