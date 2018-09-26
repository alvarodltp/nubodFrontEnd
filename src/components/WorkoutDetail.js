import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import WorkoutDetailItem from './WorkoutDetailItem'

class WorkoutDetail extends React.Component {
  constructor(){
    super()
    this.state = {
      quote: false,
      reps: "",
      weight: ""
    }
  }

  displayQuote = () => {
    this.setState({
      quote: !this.state.quote
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  deleteInput = () => {

  }


  render(){
    let quote = this.props.quote.contents.quotes[0].quote
    let author = this.props.quote.contents.quotes[0].author

    return(
      <div>
        <Button onClick={this.displayQuote} id="motivation-button">Need Some Motivation?</Button>
        <Segment>
          {this.state.quote === true ? <p>{quote} - {author}</p> : null}
        </Segment>

        {this.props.newWorkout.map(exercise =>
          <WorkoutDetailItem handleChange={this.handleChange} exercise={exercise}/>
        )}
      </div>
    )
  }
}

export default WorkoutDetail
