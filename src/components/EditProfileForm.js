import React from 'react'
import { Form, Grid, Button, Select } from 'semantic-ui-react'

class EditProfileForm extends React.Component {
  render (){
    const genderOptions = [{key: 'male', text: 'Male', value: 'male' }, { key: 'female', text: 'Female', value: 'female' }]
    const activityOptions = [{key: 'sedentary', text: 'Sedentary (little or no exercise)', value: 1.2}, {key: 'light', text: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375}, {key: 'moderate', text: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55}, {key: 'very active', text: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725}, {key: 'extra active', text: 'Extra active (very hard exercise/sports & physical job or 2x training)', value: 1.9}]
    const goalOptions = [{key: 'lose weight', text: 'Lose Weight', value: 'lose'}, {key: 'maintain', text: 'Maintain Current Weight', value: 'maintain'}, {key: 'gain', text: 'Gain Muscle', value: 'gain'}]
    const bodyOptions = [{key: 'ectomorph', text: 'Ectomorph'}, {key: 'mesomorph', text: 'Mesomorph'}, {key: 'endomorph', text: 'Endomorph'}]
    return(
    <React.Fragment>
    <Form>
      <Grid id="profile-info" columns='three'>
          <Grid.Row>
            <Grid.Column>
              <Form.Input label="First Name" name='first_name' onChange={this.props.handleChange} defaultValue={this.props.user.first_name}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Last Name" name="last_name" onChange={this.props.handleChange} defaultValue={this.props.user.last_name}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Email" name="email" onChange={this.props.handleChange} defaultValue={this.props.user.email}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Age" type="number" name="age" onChange={this.props.handleChange} defaultValue={this.props.user.age}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label="Username" name="user_name" onChange={this.props.handleChange} defaultValue={this.props.user.user_name}/>
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
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Select label="Activity Frecuency" name="activity_level" onChange={this.props.getActivityLevel} placeholder={this.props.user.activity_level} options={activityOptions}/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input label="Bmr" name="bmr" type="number" onChange={this.props.handleChange} defaultValue={this.props.bmr} disabled/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Select label='Gender' name="gender" onChange={this.props.getGender} placeholder={this.props.user.gender} options={genderOptions} />
            </Grid.Column>
            <Grid.Column>
              <Form.Select label="Goal" name="goal" onChange={this.props.getGoal} placeholder={this.props.user.goal} options={goalOptions}/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Form.Input label='Height' name="height" onChange={this.props.handleChange} defaultValue={this.props.user.height} />
            </Grid.Column>
            <Grid.Column>
              <Form.Select label='Body Type' name="body_type" onChange={this.props.getBodyType} options={bodyOptions}/>
            </Grid.Column>
          </Grid.Row>

          <Button id="edit-button" color="gray" onChange={(e) => {this.props.getActivityLevel(e); this.props.getBodyType(e); this.props.getGender(e); this.props.getGoal(e)}} onClick={(e) => {this.props.calculateBmrMacrosCalories(e); this.props.convertBackToText(e); this.props.saveMeasurements(e)}}>Save</Button>
          <Button onClick={this.props.convertBackToText}>Cancel</Button>
        </Grid>
      </Form>
      </React.Fragment>

    )
  }
}

  export default EditProfileForm
