import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginForm = () => {
    this.props.history.push('/login')
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = {user: {
      first_name: this.state.name,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }}
    fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(this.props.updateUser)
    this.props.history.push('/profile')
  }


  render() {
    return (
      <div id="sign-up-div" style={{minHeight: "100vh"}}>
        <Container id="signup">
          <div className="ui one column stackable center aligned page grid">
            <div id="column-login" className="column twelve wide">
            <Form onSubmit={this.handleOnSubmit}>
               <Form.Group>
                  <Header as='h2'>Sign Up!</Header>
                  <Form.Input value={this.state.name} id="name" onChange={this.handleChange} fluid name='name' label='Name' placeholder='name' />
                  <Form.Input value={this.state.lastName} onChange={this.handleChange} fluid name='lastName' label='Last Name' placeholder='last name' />
                  <Form.Input value={this.state.email} onChange={this.handleChange} fluid name='email' label='Email' placeholder='email' />
                  <Form.Input value={this.state.password} onChange={this.handleChange} fluid name='password' label='Password' placeholder='password' />
                  </Form.Group>
               <br/>
                <Button primary >Sign up</Button>
                <Button onClick={this.loginForm}>Log in</Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
    )
  }
}

export default Signup
