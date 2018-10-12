import React from 'react'
import { Image, Button, Grid } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      bmr: "",
      gender: "",
      activityLevel: "",
      goal: "",
      caloriesToMaintain: ""
    }
  }

  convertToInput = () => {
    this.setState({
      edit: true,
    })
  }

  convertBackToText = (e) => {
    this.setState({
      edit: false,
    })
  }

  handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  updateUser = (user) => {
    debugger
  fetch(`http://localhost:3001/user-update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user: {
          first_name: user[0].value,
          last_name: user[1].value,
          user_name: user[2].value,
          email: user[3].value,
          age: user[4].value,
          weight: user[5].value,
          body_fat: user[6].value,
          location: user[7].value,
          goal: this.state.goal,
          activity_level: this.state.activityLevel,
          bmr: this.state.bmr,
          gender: this.state.gender,
          height: user[9].value,
          calories: this.state.caloriesToMaintain
        }
      })
    }).then(response => response.json())
    .then(user => this.props.updateUser(user))
    swal("Success!", "Your Profile Has Been Updated!", "success")
}


  getGender = (e) => {
  this.setState({
    gender: e.target.innerText
  })
}

  getActivityLevel = (e) => {
    this.setState({
      activityLevel: e.target.innerText
    })
  }

  getGoal = (e) => {
    this.setState({
      goal: e.target.innerText
    })
  }

  calculateBmrAndCalories = (e) => {
    let user = e.target.parentElement.parentElement.elements
    let weight = user[5].value
    let height = (user[9].value * 12).toFixed(2)
    let age = user[4].value
    let bmr;
    let activityLevel;
    this.state.gender === "Male" ? bmr = (66 + 6.23 * weight + 12.7 * height - 6.8 * age).toFixed(2) : bmr = (655 + 4.35 * weight + 4.7 * height - 4.7 * age).toFixed(2)
    if(activityLevel === "Sedentary (little or no exercise)") {
      activityLevel = 1.2
    } else if (activityLevel === "Lightly active (light exercise/sports 1-3 days/week)") {
      activityLevel = 1.375
    } else if (activityLevel === "Moderately active (moderate exercise/sports 3-5 days/week)") {
      activityLevel = 1.55
    } else if (activityLevel === "Very active (hard exercise/sports 6-7 days a week)") {
      activityLevel = 1.725
    } else {
      activityLevel = 1.9
    }
    let calories = Math.round(bmr * activityLevel)
    this.setState({
      bmr: bmr,
      caloriesToMaintain: calories
    }, () => this.updateUser(user))
  }

  render() {
    return (
      <React.Fragment>
      <div id='header-site'>
        <div id="profile-image-container">
          <Image id="profile-pic" src='https://static.thumbtackstatic.com/pictures/11025/6tp34bha0k1nf4o3jhrbh4iojt_400.jpg' size='small' circular />
        </div>
      </div>

      <Grid id="stats" columns="two">
      <Grid.Row>
        <Grid.Column>
          <FontAwesomeIcon id="slide-button" icon="dumbbell" size="4x"/>
        </Grid.Column>
        <Grid.Column>
          <FontAwesomeIcon id="slide-button" icon="apple-alt" size="4x"/>
        </Grid.Column>
      </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <h1 id="workout-stats">Workout Stats</h1>
          </Grid.Column>
          <Grid.Column>
            <h1 id="workout-stats">Nutrition Needs</h1>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.allWeightLifted} lb. Lifted</h2> : null}
          </Grid.Column>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.user.calories} Kcal</h2> : null}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.workoutsCompleted} Workouts Killed</h2> : null}
          </Grid.Column>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.user.daily_protein}g Protein</h2> : null}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.allRepsLifted} Reps Completed</h2> : null}
          </Grid.Column>
          <Grid.Column>
            {this.props.user ? <h2>{this.props.user.daily_carbs}g of Carbs</h2> : null}
            {this.props.user ? <h2>{this.props.user.daily_fats}g of Fats</h2> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div id="account-information">
        <h1>Account Information</h1>
      </div>

    {this.state.edit === false ?
      <Grid id="profile-info" columns='two'>
          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <p>Name: {this.props.user.first_name}</p> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <p>Last Name: {this.props.user.last_name}</p> : null}
            </Grid.Column>
          </Grid.Row>

         <Grid.Row>
         <Grid.Column>
           {this.props.user ? <p>Username: {this.props.user.user_name}</p> : null}
         </Grid.Column>
          <Grid.Column>
            {this.props.user ? <p>Email: {this.props.user.email}</p> : null}
          </Grid.Column>
         </Grid.Row>

         <Grid.Row>
           <Grid.Column>
             {this.props.user ? <p>Age: {this.props.user.age}</p> : null}
           </Grid.Column>
           <Grid.Column>
             {this.props.user ? <p>Weight: {this.props.user.weight}</p> : null}
           </Grid.Column>
         </Grid.Row>

         <Grid.Row>
           <Grid.Column>
             {this.props.user ? <p>Body Fat: {this.props.user.body_fat}%</p> : null}
           </Grid.Column>
           <Grid.Column>
             {this.props.user ? <p>Location: {this.props.user.location}</p> : null}
           </Grid.Column>
        </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <p>Activity Level: {this.props.user.activity_level}</p> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <p>Goal: {this.props.user.goal}</p> : null}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <p>Bmr: {this.props.user.bmr}</p> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <p>Gender: {this.props.user.gender}</p> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <p>Height: {this.props.user.height}</p> : null}
            </Grid.Column>
          </Grid.Row>


          <div id="profile-edit-button">
            <Button id="edit-button" color="grey" size="small" onClick={this.convertToInput} user={this.state.user}>Edit Profile</Button>
          </div>

        </Grid>
          : <EditProfileForm gender={this.state.gender} activityLevel={this.state.activityLevel} goal={this.state.goal} getGoal={this.getGoal} getActivityLevel={this.getActivityLevel} getGender={this.getGender} bmr={this.state.bmr} calculateBmrAndCalories={this.calculateBmrAndCalories} user={this.props.user} handleChange={this.handleChange} convertBackToText={this.convertBackToText} />}
          <br />
          <br />
        </React.Fragment>
    )
  }
}



export default Profile
