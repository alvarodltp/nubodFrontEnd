import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import WorkoutDetailItem from './WorkoutDetailItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class WorkoutDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      quote: false
    }
  }

  displayQuote = () => {
    this.setState({
      quote: !this.state.quote
    })
  }

  render(){

    let quote = this.props.quote.contents.quotes[0].quote
    let author = this.props.quote.contents.quotes[0].author

    return(
      <div>
        <Button size="tiny" onClick={this.displayQuote} id="motivation-button">Quote Of The Day</Button>
        <p>
          {this.state.quote === true ? <div><FontAwesomeIcon id="quote-icon" icon="quote-left" size="2x"/><p>{quote} - {author}</p></div> : null}
        </p>

        {this.props.newWorkout.map(exercise =>
          <WorkoutDetailItem updateMyCurrentWorkout={this.props.updateMyCurrentWorkout} handleChange={this.handleChange} newWorkoutId={this.props.newWorkoutId} lastSets={this.props.lastSets} exercise={exercise}/>
        )}

      </div>
    )
  }
}

export default WorkoutDetail
