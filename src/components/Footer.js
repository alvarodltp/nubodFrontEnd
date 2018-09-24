import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render(){
    return(
        <div id="footer" className="ui vertical footer segment form-page">
          <div className="container space-around">
            <Link to="/profile"><FontAwesomeIcon icon="user" size="3x"/></Link>
            <Link to="/history"><FontAwesomeIcon icon="calendar" size="3x"/></Link>
            <Link to="/new-workout"><FontAwesomeIcon icon="plus" size="3x"/></Link>
            <Link to="/all-exercises"><FontAwesomeIcon icon="dumbbell" size="3x"/></Link>
            <Link to="/user-stats"><FontAwesomeIcon icon="heart" size="3x"/></Link>
          </div>
        </div>
    )
  }
}

export default Footer
