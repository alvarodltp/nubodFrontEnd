import React from 'react'


class SearchResults extends React.Component {

  render(){

    return(
      <div>
        <ul className="searchresults">
          {this.props.filteredExercises.map(exercise=> <li>{exercise.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default SearchResults
