import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Card } from 'semantic-ui-react'
import { Header, Segment, Divider } from 'semantic-ui-react'

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

  handleSubmit = (e) => {
    // debugger
      e.preventDefault();
      let data = JSON.stringify({
        email: e.target.parentElement.querySelector('input[name="email"]').value,
        password: e.target.parentElement.querySelector('input[name="password"]').value
      });
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: data
      })
        .then(res => {
          // debugger
          if (res.status === 204) {
            alert("login failed");
          } else {
            return res.json();
          }
        })
        .then(json => {
          // debugger
          if(json !== undefined){
            this.props.updateUser(json.user);
            localStorage.setItem("token", json.token);
            this.props.history.push('/profile')
          }
        });
    };


  render() {
  return (

<Card id="login-card" centered>
  <Form onSubmit={this.handleOnSubmit}>
    <Segment padded>
    <Form.Group id="form-group" widths='equal'>
       <Form.Input onChange={this.handleChangeEmail} fluid name='email' label='Email' placeholder='email' />
       <Form.Input onChange={this.handleChangePassword} fluid name='password' label='Password' placeholder='password' />
     </Form.Group>
      <Button onClick={this.handleSubmit} primary fluid>
        Login
      </Button>
      <Divider horizontal>Or</Divider>
      <Button onClick={this.signUpForm} secondary fluid>
        Sign Up Now
      </Button>
    </Segment>
  </Form>
</Card>
    )
  }
}

export default Login
