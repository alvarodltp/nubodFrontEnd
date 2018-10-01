import React from 'react'
import SearchBar from './SearchBar'
import {Segment} from 'semantic-ui-react'
import SearchResults from './SearchResults'

class Home extends React.Component {
  constructor(){
    super()
    this.state = {
    isLoading: false,
    results: null,
    value: "",
    open: false,
    clickedExercise: null
    }
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: null, value: "" });


  handleChange = (e) => {
    let filteredExercises = this.props.exercises.filter(exercise => exercise.name.toLowerCase().includes(e.target.value))
    // debugger
    this.setState({
      value: e.target.value,
      results: filteredExercises,
      isLoading: true
    })
  }

  open = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  exercisePicked = (exercise) => {
    console.log(exercise)
  }

  render(){
    return(
      <div id="background-img">
        <div id="search-bar">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default Home
