import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'



class Signup extends React.Component {

  constructor(){
    super()
    this.state={
      email: "",
      password: "",
      name: "",
      lastName: ""
    }
  }

  handleChangeEmail = (e) => {
    let email = e.target.value
    this.setState({
      email: email
    })
  }

  handleChangePassword = (e) => {
    let password = e.target.value
    this.setState({
      password: password
    })
  }

  handleChangeName = (e) => {
    let name = e.target.value
    this.setState({
      name: name
    })
  }

  handleChangeLastName = (e) => {
    let lastName = e.target.value
    this.setState({
      lastName: lastName
    })
  }

  loginForm = () => {
    this.props.history.push('/login')
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    // debugger
    let userData = {user: {
      first_name: e.target.querySelector('input[name="name"]').value,
      last_name: e.target.querySelector('input[name="last-name"]').value,
      email: e.target.querySelector('input[name="email"]').value,
      password: e.target.querySelector('input[name="password"]').value
    }}
    fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    this.props.history.push('/profile')
  }


  render() {
    return (
      <Container>
        <div className="ui one column stackable center aligned page grid">
          <div id="column-login" className="column twelve wide">
          <Form onSubmit={this.handleOnSubmit}>
             <Form.Group id="form-group" widths='equal'>
                <Header as='h2'>Sign Up!</Header>
                <Form.Input id="name" onChange={this.handleChangeName} fluid name='name' label='Name' placeholder='name' />
                <Form.Input onChange={this.handleChangeLastName} fluid name='last-name' label='Last Name' placeholder='last name' />
                <Form.Input onChange={this.handleChangeEmail} fluid name='email' label='Email' placeholder='email' />
                <Form.Input onChange={this.handleChangePassword} fluid name='password' label='Password' placeholder='password' />
                </Form.Group>
             <br/>
              <Button primary >Sign up</Button>
              <Button onClick={this.loginForm}>Log in</Button>
          </Form>
        </div>
      </div>
    </Container>
    )
  }
}

export default Signup
