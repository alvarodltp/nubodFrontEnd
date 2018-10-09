import React from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'

class EditProfileForm extends React.Component {
  render (){
    const genderOptions = [{key: 'male', text: 'Male', value: 'male' }, { key: 'female', text: 'Female', value: 'female' }]
    return(
    <React.Fragment>
    <Form>
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
              <Form.Input label="Age" type="number" name="age" onChange={this.props.handleChange} defaultValue={this.props.user.age}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Weight" name="weight" type="number" onChange={this.props.handleChange} defaultValue={this.props.user.weight}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Body Fat" name="body_fat" type="number" onChange={this.props.handleChange} defaultValue={this.props.user.body_fat}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Location" name="location" onChange={this.props.handleChange} defaultValue={this.props.user.location}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Goal" name="goal" onChange={this.props.handleChange} defaultValue={this.props.user.goal}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Activity Frecuency" name="activity_level" onChange={this.props.handleChange} defaultValue={this.props.user.activity_level}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Bmr" name="bmr" type="number" onChange={this.props.handleChange} defaultValue={this.props.user.bmr} disabled/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label='Gender' name="gender" onChange={this.props.handleChange} defaultValue={this.props.user.gender} options={genderOptions} />
            </Grid.Column>
            <Grid.Column>
              <Form.Input label='Height' name="height" onChange={this.props.handleChange} defaultValue={this.props.user.height} />
            </Grid.Column>
          </Grid.Row>
          <Button id="edit-button" color="gray" onClick={(e) => {this.props.calculateCalories(); this.props.getActivityLevel(e); this.props.calculateBmr(e); this.props.getGender(e); this.props.updateUser(e); this.props.convertBackToText(e)}}>Save</Button>
        </Grid>
      </Form>


      </React.Fragment>

    )
  }
}

  export default EditProfileForm
