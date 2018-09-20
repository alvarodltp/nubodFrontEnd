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
          if(json !== undefined){
            this.props.updateUser(json.user);
            localStorage.setItem("token", json.token);
            // console.log(json)
          }
        });
      this.props.history.push('/profile')
    };


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
              <Button primary onClick={this.handleSubmit}>Log in</Button>
              <Button onClick={this.signUpForm}>Sign up</Button>
          </Form>
        </div>
      </div>
    </Container>
    )
  }
}

export default Login
