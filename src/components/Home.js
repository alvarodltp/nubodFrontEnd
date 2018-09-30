import React from 'react'
import SearchBar from './SearchBar'
import {Segment} from 'semantic-ui-react'

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
      <div>
        <SearchBar exercises={this.props.exercises} handleChange={this.handleChange} />
        {this.state.results ?
          <div>
            {this.state.results.map(exercise => <li>{exercise.name}</li>)}
          </div> : null }
        <img id="main-image" src="https://uc1bce3e04b1efd2eaf2b685d23f.dl.dropboxusercontent.com/cd/0/inline/ARzPr0LWBdtXuKFkmqmcJe6ORbz6XKECdybMITaINBgTvDhzT7av7mnstseGTwIbdF3Bt2D4o9__RF45q2er0mo2tMSMvCUHs1k_6ceccxYrw3KfN27TT38Z4gBxGq6aPfg-C2N3M2CJC27P8cwVdzc29XhDARTvT57IjBdPnKwgHpBuxgjXilJ08OwYXsacrw4/file" alt="me"/>
      </div>
    )
  }
}

export default Home
