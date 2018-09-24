import React from 'react'
import { Button } from "semantic-ui-react";


class Navbar extends React.Component {

  handleSubmit= () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  render(){
    return(

  <div id="navbar" className="ui secondary menu">
    {this.props.user ? <Button size="small" id="logout-button" onClick={this.handleSubmit}>Log Out</Button> : null }
  </div>

    )
  }
}

export default Navbar
