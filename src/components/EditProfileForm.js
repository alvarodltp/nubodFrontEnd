import React from 'react'
import { Container, Input, Button, Form } from 'semantic-ui-react'

class EditProfileForm extends React.Component {
  render(){
    return(
    <Container>
      <Form>
        <Form.Group>
          <Form.Input label="First Name" name='first_name' onChange={this.props.handleChange} defaultValue={this.props.user.first_name} name="first_name" />
          <Form.Input label="Last Name" name="last_name" onChange={this.props.handleChange} defaultValue={this.props.user.last_name}/>
          <Form.Input label="Username" name="user_name" onChange={this.props.handleChange} defaultValue={this.props.user.user_name}/>
          <Form.Input label="Email" name="email" onChange={this.props.handleChange} defaultValue={this.props.user.email}/>
          <Form.Input label="Age" name="age" onChange={this.props.handleChange} defaultValue={this.props.user.age}/>
          <Form.Input label="Weight" name="weight" onChange={this.props.handleChange} defaultValue={this.props.user.weight}/>
          <Form.Input label="Body Fat" name="body_fat" onChange={this.props.handleChange} defaultValue={this.props.user.body_fat}/>
          <Form.Input label="Location" name="location" onChange={this.props.handleChange} defaultValue={this.props.user.location}/>
          <Form.Input label="Goal" name="goal" onChange={this.props.handleChange} defaultValue={this.props.user.goal}/>
          <Form.Input label="Activity Frecuency" name="activity_level" onChange={this.props.handleChange} defaultValue={this.props.user.activity_level}/>
          <Form.Input label="Bmr" name="bmr" onChange={this.props.handleChange} defaultValue={this.props.user.bmr}/>
          <Form.Input label="Calories" name="calories" onChange={this.props.handleChange} defaultValue={this.props.user.calories}/>
           <Form.Input label="Gender" name="gender" onChange={this.props.handleChange} defaultValue={this.props.user.gender}/>
          <Form.Button color="blue" onClick={this.props.updateUser(this.props.user)}>Save</Form.Button>
          </Form.Group>
        </Form>
    </Container>
    )
  }
}

  export default EditProfileForm
