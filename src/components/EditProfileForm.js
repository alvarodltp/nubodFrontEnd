import React from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'

class EditProfileForm extends React.Component {
  render (){
  console.log(this.props)
    return(
    <React.Fragment>
      <Grid id="profile-info" columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              <Form.Input label="First Name" name='first_name' onChange={this.props.handleChange} defaultValue={this.props.user.first_name}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Last Name" name="last_name" onChange={this.props.handleChange} defaultValue={this.props.user.last_name}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Username" name="user_name" onChange={this.props.handleChange} defaultValue={this.props.user.user_name}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Email" name="email" onChange={this.props.handleChange} defaultValue={this.props.user.email}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Age" name="age" onChange={this.props.handleChange} defaultValue={this.props.user.age}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Body Fat" name="body_fat" onChange={this.props.handleChange} defaultValue={this.props.user.body_fat}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Location" name="location" onChange={this.props.handleChange} defaultValue={this.props.user.location}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Goal" name="goal" onChange={this.props.handleChange} defaultValue={this.props.user.goal}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Activity Frecuency" name="activity_level" onChange={this.props.handleChange} defaultValue={this.props.user.activity_level}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Bmr" name="bmr" onChange={this.props.handleChange} defaultValue={this.props.user.bmr}/>
            </Grid.Column>
          </Grid.Row>

          <div id="profile-edit-button">
          <Button id="edit-button" color="gray" onClick={this.props.updateUser}>Save</Button>
          </div>
        </Grid>


      </React.Fragment>

    )
  }
}

  export default EditProfileForm
