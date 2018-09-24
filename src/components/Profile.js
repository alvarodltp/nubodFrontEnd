import React from 'react'
import { Image, Button, Grid } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      first_name: "",
      last_name: "",
      user_name: "",
      weight: "",
      age: "",
      goal: "",
      gender: "",
      activity_level: "",
      email: "",
      location: "",
      bmr: "",
      calories: "",
      body_fat: ""
    }
  }

  convertToInput = () => {
    this.setState({
      edit: true,
    })
  }


handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

updateUser = (user) => {
  fetch(`http://localhost:3001/user-update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          user_name: this.state.user_name,
          weight: this.state.weight,
          age: this.state.age,
          goal: this.state.goal,
          gender: this.state.gender,
          activity_level: this.state.activity_level,
          email: this.state.email,
          location: this.state.location,
          bmr: this.state.bmr,
          calories: this.state.calories,
          body_fat: this.state.body_fat
        }
      })
    });
}

  render() {
    return (
      <React.Fragment>
      <div id='header-site'>
        <div id="profile-image-container">
              <Image id="profile-pic" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEX///9zzeX/065mZmbltZFDsMkzMzP/06xszedqzur/06q+0Mrbt5j/0ar/48xlYF6CzuB3rLv/2rQtLzCjo6MlJSXyxJ/lzbMvrsuGu8FfVUzksYr2zKmP1ulaWlpyyuHI6vTdr42Uzd1mamv/9Ov/2Ljy8vLuv5v/4MckKSx1dXXOzs7/7uGVlZXt+Pv29vb14tUQHCTux6fsyrKtra3m5uaCgoLCwsKjinWKioqgz9bZ0b+wz9FphItrkJtoeH2Me2xJRkPKq5JsYVgACBO5nocVGRwGGCKWgnKWu7zAtq225PHa8fjK0cbf0r255PFwtMdsmKS1kXdlWU99bF1+3IuHAAAJK0lEQVR4nO3ceVvaSBwHcAi0A1EEg4uuwaMKpmA9QERUqtaua3etVq3v/7VsDo4cM5NJQuY3uPP9o8/TNth8OvdkSCaTdvb2z3or5/12O5fbbbfPV3pnp0ep/6O8srff6+c2Nzdznph/0D4424O+ueQ57bX9Ng+z3TuFvsUk2evtUnhjZH8f+j7jZr8fyhsh23NpPMux8Rxjf+7qaiSfbVyBvuVIOW1H9FnE9hz1qwfRfXbmpaaexuNZxTgfxF7MArSJ5+J3qkf9BEDLuNkTezK3t5vIJ74xfhP0Gs+gIaTsJauhLmNfzJHjaEY+2yhkl9OeoTC32YPmBBN3nCcRhZvGnc0WaBIPoEnezKyXcRHFKsXzmQNNokijxv7sizAn1kR1pv3oNG1o1yTpFKFIY0ZKRWgSBZncnKZUhGYEGTIOUgOKUojpAXM5IQbFtPoZO5vQOisrKQLFWGWk1pPaEaCvOUqzkpqB9qU6VlgRYOo283WTTwg//06yQ8oS+PEi1a7UTB8amOaMxgk08H8gTGN5784m+B546kLwyXfqQvABMe12CC9Me7SAr6XxR/wyU+CFcZeH5etltjwcAgvjrS3Ku8uFLFsKhZ/AxH50Xvn6mZFnZwNYGLGalsu5l2fW8hNDGOXBWrm8exWp+MQQZvplJpxZOV+i84QQbl+VqUYLt/s1nk4QYWHrylIEXfafXl+9PG/F1YkiNG/jefnq6/XuJNfXX69eXpaT0cQSWpl2kdE6y/kRphQplEIplEIpfA/Cw3SFhV/QQLMQi2kGvggzX7r6Ygrp2mnWjWNgX6Or52cSwzBqtVqpVFIUpExTyut5UONxfJ9DqtdLCi0l80r9ZF6AUxOiqvzCvN4VFeiQQsspVAhGbASBbFUvsjCvr4IIjTHLMs2KhBfm9QYAcFJHaynp3MI8RD0dFyFBqHnCcAn2mokQoBCnrRAn1Bbf1l156+Juf/Dbdcn3OxxxKuTfEo+pwsVOq+pKqxpsqNpbx31JtTPAECfCvMFdeJKnCLWb1kdPWsHb7957L6l+pJVhPs9d2KUK36rhws5H3zVUoc790IJBEyq33gKqdj5ZY7/3f+Gbt5xbb9Rayr+roQu1u6q7IX58HTUmTyGuuy9pvWF+DKiQWktNolL/NM20NXmuqbtDHy0Aaim1p3GSx8QgXYwPZE9DHy3IxMBFpPmATwgwqWEQaq9vv199Qv/V9ZvfAwahDrAOPgkVagNzTO+8UoVds0dqrTMI+QOn0zaisO4MBzSh9sO6poOdsbmFMOv8Ez1E6IzpHarQnhpg5gN+IQQwkwlth9bdV79RhQO7DG9JP2G8AgbajRrVU3I7vL1vtVqL9J5mvdPq4GYzbiEUcEyk9KWLg0FXU6hC5W5wSx4unJ2oJShgJnNk6PQ1vjPWUYUKZTi0hDpcCdo51nWGXQyqkJaSrp+An4Q+xq7ficSIuzqr4D4zXxj2DlE8IfoMjbPTYNodjScE7GNcYRMqcYQlMYQZxh1uRxhp+VT6Am1zwvqkxSFGEkJsdWPSZL3hyNW0BE0bZYn5aZkRkYigaaOwDBej1J226N93IwHFGCyYO9NRajXDqLE9qxKlo2HvaqJGlI4mk/mcjhAp0LBJIjTESEJRmqGZdMpQnEoaVk2RgkihCkUZK6xQe1PK9Dnu5wBCm9bEFYpUSel9DaXDoH6syfH+GUJrUuT2RJvviVWEIaXx7wohtE0owYqQPq+5/esPXP4m75OKV4T0QtTWfY/1R8+1KXtYIo3249C608CpBPuBBvFphSLOytAdWs+v3QWJ2JMJE6Awqwp3lqjEez/wOwUo2kgxTpPS2Wi3LffhkmrnB3UzH5pCSolGrN/ct5wOp9rqrC9SgULWUSv0xb7WHaxXO51O69sN1SfMLikuIQtFTVO63XqddvhCEbcROqH1NowRG2iuFJMSRQcmJgq0N0NMoopaEr4ErSQgzgcwwdabyMOENw0ljhGJO9BjskSb3hAKcE5q6DhRixHNTw2dhP2Zm5U5K0AnLAdtRqnDfo0ybkKOS7l8BuDJtSQJOfQ2Tg32bF6SjI6fGjRkzYA9Xpksri9gGrhnvvXa9Dsbcy8cP70ffbXCetDt/bv3IaRl7oSHP3897EQSLjz82oZ+RyJrDrc3Cla2UI0ZaJSG9mc2HqBfkxiaw4dsYfQqkC00GgnCfXUFDZ1PmR/eEBn5c6MwfdPJFpqMdtTYg4k6dL8qbBsaQsi27zVmo3lpiYYcDyNuoWV8gMZgcljxv6iGMPRNdbXp8kO98H5awHJcWvADC/5NfnsYtFMLnPpSd/yv3qloQj1AbChqQFhcjbB8QoEXEFZUkVaM5ooeBcvwkV2ImoF3MVVUgVb9Teu1OUHhhcouvMQJFYSEqKkN+wl+UJjNsgu9XelEKMbmVMOpixhh8Ym5mqLA/44jFGGDsVEiCtmrKboskoTgxDEQW0sD4wUpaoVYhuDEybYoVjhkK0T0FCzCqRD2ibDrLjFC1iERV4QuIeThIVctxAqzOyyFGJws+IQI7OCC+yETXshST9Eqpo56hGBPTT3nEvDCbPEyjIiauM95hVC9jfdG8UKzKdKJSME1Qr8Qpil6H4SShNnCE42ImoFFF1YI8lzD+2yJKMwWH8lE9YnwoYAQYMjwHc8nC7PFC8LZU6QuYDsZnJD/CQb/8SeK0FywP6pBI1KfSDUUI+Tf2fi/YUETmsVYeUQepPm7ywq5ADFC7t++8D/hpQtNY3Z4qaiqihAyf1Uuh1mqDyPk3BIDJ0rChGZdLRYrF8OFheHwYqtYDH2/ckDIuTsN9B3hQlvphOFKjJDrmBg8ZskmjJCgkOu3hIKnEDgIFZ4DRvAf5yHkWE0xZ4G5CPlVU8zBNS61lF9vivlCJRchv0Efs8PERcivIWKOrPER8prW4L50wEfIq6vBnZDl0w55faENTsirM8Ud5H5nQsySnY+Q17wNTMhtQIQT8tr8lkIplEIplEIplEIplEIplMJ3LeR2sIaPcBWT+nsSbq3hsvOehB9wWdt+78IPfApRCqVQCqVQCqVQCqVQChMJ1y7ekXANB1zj8519PsI/MfmH00sJOK3xg29wV1U+QLlPI4VSKIVSKIVSKIVSKIVSKIXB/Ac9vnbv44csSAAAAABJRU5ErkJggg==' size='small' circular />
        </div>
        <div className="container space-around">
          {this.props.user ? <h1>{this.props.user.calories} Kcal</h1> : null}
          {this.props.user ? <h1>{this.props.user.daily_protein}g Protein</h1> : null}
          {this.props.user ? <h1>{this.props.user.daily_carbs}g of Carbs</h1> : null}
          {this.props.user ? <h1>{this.props.user.daily_fats}g of Fats</h1> : null}
        </div>

      </div>

    {this.state.edit === false ?
      <Grid id="profile-info" columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <h3>Name: {this.props.user.first_name}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Last Name: {this.props.user.last_name}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Username: {this.props.user.user_name}</h3> : null}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <h3>Email: {this.props.user.email}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Age: {this.props.user.age}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Weight: {this.props.user.weight}</h3> : null}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <h3>Body Fat: {this.props.user.body_fat}%</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Location: {this.props.user.location}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Goal: {this.props.user.goal}</h3> : null}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <h3>Activity Level: {this.props.user.activity_level}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Bmr: {this.props.user.bmr}</h3> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <h3>Gender: {this.props.user.gender}</h3> : null}
            </Grid.Column>
          </Grid.Row>

          <div id="profile-edit-button">
            <Button id="edit-button" color="grey" size="small" onClick={this.convertToInput} user={this.state.user}>Edit Profile</Button>
          </div>

        </Grid>
          : <EditProfileForm user={this.props.user} handleChange={this.handleChange} />}
        </React.Fragment>
    )
  }
}

export default Profile
