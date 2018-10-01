import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import SearchResults from './SearchResults'

class SearchBar extends React.Component {
  constructor(){
    super()
    this.state={
      query: '',
      exercises: [],
      filteredExercises: []
    }
  }

  fetchExercises = (query) => {
    fetch('http://localhost:3001/exercises')
    .then(response => response.json())
    .then(json => this.setState({exercises: json}))
    .then(this.filterExercises(query))
  }
  filterExercises = (query) => {
    console.log(query)
    let exercises = this.state.exercises
    let filtered = exercises.filter(exercise => exercise.name.toLowerCase().includes(query))
    console.log(filtered)
    this.setState({filteredExercises: filtered})
  }


  render() {
    return(
      <div id="search-bar-home">
      <div className="item">
        <Menu secondary vertical>
          <Menu.Item>
            <div className="ui large icon input">
              <Input
                type="text"
                size="mini"
                icon="search"
                placeholder="Search"
                value={this.state.query}
                onChange={(event) => {
                  this.setState({query: event.currentTarget.value})
                  this.fetchExercises(event.currentTarget.value.toLowerCase())
                  }
                }
              />
            </div>
          </Menu.Item>

    </Menu>
    {this.state.query === '' ?
    null :
      <SearchResults filteredExercises={this.state.filteredExercises}/>
    }
    </div>
      </div>
    )
  }
}

export default SearchBar
