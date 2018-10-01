import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class Footer extends React.Component {

  handleSubmit= () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  render(){
    return(
        <div id="footer" className="ui vertical footer segment form-page">
          <div className="container space-around">
            <Link to="/profile">Profile</Link>
            <Link to="/workout-history">WO History</Link>
            <Link to="/new-workout">New Workout</Link>
            <Link to="/all-exercises">All Exercises</Link>
            <Link to="/user-stats">Progress</Link>
            {this.props.user ? <Button size="small" id="logout-button" onClick={this.handleSubmit}>Log Out</Button> : null}
          </div>
        </div>
    )
  }
}

export default Footer
