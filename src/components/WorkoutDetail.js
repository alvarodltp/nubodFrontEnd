import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import WorkoutDetailItem from './WorkoutDetailItem'

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
        <Button size="tiny" onClick={this.displayQuote} id="motivation-button">Need Some Motivation?</Button>
        <Segment>
          {this.state.quote === true ? <p>{quote} - {author}</p> : null}
        </Segment>

        {this.props.newWorkout.map(exercise =>
          <WorkoutDetailItem updateMyCurrentWorkout={this.props.updateMyCurrentWorkout} handleChange={this.handleChange} newWorkoutId={this.props.newWorkoutId} exercise={exercise}/>
        )}

      </div>
    )
  }
}

export default WorkoutDetail
