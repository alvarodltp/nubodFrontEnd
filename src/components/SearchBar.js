import React from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  render() {
    return(
      <div id="search-bar-home">
        <Input onChange={this.props.handleChange} placeholder='Search Exercise...'/>
      </div>
    )
  }
}

export default SearchBar
