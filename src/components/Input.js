import React from 'react'
import { Checkbox, Icon } from 'semantic-ui-react'

class Input extends React.Component {
  render(){
    return(
      <form id="form">
            Reps
          <input onChange={this.props.handleChange} id="html-input" type="text" name="reps"/>
            Weight
          <input onChange={this.props.handleChange} id="html-input" type="text" name="weight"/>
          <Checkbox label='Done'/>
          <Icon onClick={this.props.deleteInput} name="close"/>
      </form>
    )
  }
}

export default Input
