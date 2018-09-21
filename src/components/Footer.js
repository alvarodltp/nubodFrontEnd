import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
  render(){
    return(
        <div id="footer" className="ui vertical footer segment form-page">
          <div className="container space-around">
            <FontAwesomeIcon icon="user" size="3x"/>
            <FontAwesomeIcon icon="calendar" size="3x"/>
            <FontAwesomeIcon icon="plus" size="3x"/>
            <FontAwesomeIcon icon="dumbbell" size="3x"/>
            <FontAwesomeIcon icon="heart" size="3x"/>
          </div>
        </div>
    )
  }
}

export default Footer
