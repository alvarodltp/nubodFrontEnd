import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'



class Login extends React.Component {

  constructor(){
    super()
    this.state={
      email: "",
      password: ""
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

  signUpForm = () => {
    this.props.history.push('/signup')
  }

  // handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3001/users", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: e.target.querySelector('input[name="email"]').value,
  //       password: e.target.querySelector('input[name="password"]').value
  //     })
  //   })
  //   this.props.history.push('/profile')
  // }


  render() {
    return (
      <Container>
        <div className="ui one column stackable center aligned page grid">
          <div id="column-login" className="column twelve wide">
          <Form onSubmit={this.handleOnSubmit}>
             <Form.Group id="form-group" widths='equal'>
                <Header as='h2'>Login</Header>
                <Form.Input onChange={this.handleChangeEmail} fluid name='email' label='Email' placeholder='email' />
                <Form.Input onChange={this.handleChangePassword} fluid name='password' label='Password' placeholder='password' />
                </Form.Group>
             <br/>
              <Button primary>Log in</Button>
              <Button onClick={this.signUpForm}>Sign up</Button>
          </Form>
        </div>
      </div>
    </Container>
    )
  }
}

export default Login
