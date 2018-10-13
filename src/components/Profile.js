import React from 'react'
import { Image, Button, Grid } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert'
import MacrosPieChart from './MacrosPieChart'
import WorkoutStatsChart from './WorkoutStatsChart'


class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      bmr: "",
      gender: "",
      activityLevel: {},
      goal: "",
      caloriesToMaintain: "",
      caloriesToAccomplishGoal: "",
      bodyType: "",
      protein: "",
      carbs: "",
      fats: ""
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
    // debugger
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
          activity_level: this.state.activityLevel["name"],
          bmr: this.state.bmr,
          gender: this.state.gender,
          height: user[9].value,
          calories: this.state.caloriesToAccomplishGoal,
          body_type: this.state.bodyType,
          daily_protein: this.state.protein,
          daily_carbs: this.state.carbs,
          daily_fats: this.state.fats
        }
      })
    }).then(response => response.json())
    .then(user => this.props.updateUser(user))
    swal("Success!", "Your Profile Has Been Updated!", "success")
}

saveMeasurements = (e) => {
  let user = e.target.parentElement.parentElement.elements
  let today = new Date(); ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear());
  let user_id = this.props.user.id
  // debugger
  fetch("http://localhost:3001/measurements", {
    method: 'POST',
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: user_id,
      date: today,
      body_weight: user[5].value,
      body_fat: user[6].value,
      bmr: this.state.bmr,
      neck: "",
      shoulder: "",
      chest: "",
      bicep: "",
      waist: "",
      hip: "",
      thigh: ""
      })
    }).then(response => response.json())
    .then(json => {
    })
}

  getGender = (e) => {
  this.setState({
    gender: e.target.innerText
  })
}

  getActivityLevel = (e) => {
    let activityLevel = e.target.innerText
    let activityLevelValue;
    if(activityLevel === "Sedentary (little or no exercise)") {
      activityLevelValue = 1.2
    } else if (activityLevel === "Lightly active (light exercise/sports 1-3 days/week)") {
      activityLevelValue = 1.375
    } else if (activityLevel === "Moderately active (moderate exercise/sports 3-5 days/week)") {
      activityLevelValue = 1.55
    } else if (activityLevel === "Very active (hard exercise/sports 6-7 days a week)") {
      activityLevelValue = 1.725
    } else {
      activityLevelValue = 1.9
    }
    this.setState({
      activityLevel: {name: activityLevel, value: activityLevelValue}
    })
  }

  getGoal = (e) => {
    this.setState({
      goal: e.target.innerText
    })
  }

  getBodyType = (e) => {
    this.setState({
      bodyType: e.target.innerText
    })
  }

  calculateBmrMacrosCalories = (e) => {
    let user = e.target.parentElement.parentElement.elements
    let weight = user[5].value
    let height = (user[9].value * 12).toFixed(2)
    let age = user[4].value
    let bmr;
    let caloriesForGoal;
    this.state.gender === "Male" ? bmr = (66 + 6.23 * weight + 12.7 * height - 6.8 * age).toFixed(2) : bmr = (655 + 4.35 * weight + 4.7 * height - 4.7 * age).toFixed(2)
    let calories = Math.round(bmr * this.state.activityLevel["value"])
    // debugger
    if(this.state.goal === "Lose Weight"){
      caloriesForGoal = calories - 500
    } else if (this.state.goal === "Maintain Current Weight") {
      caloriesForGoal = calories
    } else if (this.state.goal === "Gain Muscle") {
      caloriesForGoal = calories + 300
    }
    // debugger
    let protein;
    let carbs;
    let fats;
    if (this.state.bodyType === "Ectomorph") {
      protein = parseInt(caloriesForGoal * 0.25 / 4)
      carbs =  parseInt(caloriesForGoal * 0.55 / 4)
      fats = parseInt(caloriesForGoal * 0.20 / 9)
    } else if (this.state.bodyType === "Mesomorph") {
      protein = parseInt(caloriesForGoal * 0.30 / 4)
      carbs =  parseInt(caloriesForGoal * 0.40 / 4)
      fats = parseInt(caloriesForGoal * 0.30 / 9)
    } else if (this.state.bodyType === "Endomorph") {
      protein = parseInt(caloriesForGoal * 0.35 / 4)
      carbs =  parseInt(caloriesForGoal * 0.25 / 4)
      fats = parseInt(caloriesForGoal * 0.40 / 9)
    }

    // debugger
    this.setState({
      bmr: bmr,
      caloriesToMaintain: calories,
      caloriesToAccomplishGoal: caloriesForGoal,
      protein: protein,
      carbs: carbs,
      fats: fats
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
            <FontAwesomeIcon style={{color: "#A8FC00"}} icon="dumbbell" size="3x"/>
            <h1 id="workout-stats">Workout Stats</h1>
            {this.props.user ? <h3>{this.props.workoutsCompleted} Workouts Completed</h3> : null}
            {this.props.user ? <h3>{this.props.allWeightLifted} lb. Lifted</h3> : null}
            {this.props.user ? <h3>{this.props.allRepsLifted} Reps Completed</h3> : null}
          </Grid.Column>
          <Grid.Column>
            { this.props.user ? <WorkoutStatsChart allWeightLifted={this.props.allWeightLifted} workoutsCompleted={this.props.workoutsCompleted} allRepsLifted={this.props.allRepsLifted}/> : null }
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
          <Grid.Column>
              { this.props.user ? <MacrosPieChart user={this.props.user}/> : null }
          </Grid.Column>
          <Grid.Column>
          <FontAwesomeIcon style={{color: "#A8FC00"}} icon="utensils" size="3x"/>
            <h1 id="workout-stats">Nutrition Needs</h1>
              {this.props.user ? <h3>{this.props.user.calories} Kcal</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_protein}g Protein</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_carbs}g of Carbs</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_fats}g of Fats</h3> : null}
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
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {this.props.user ? <p>Height: {this.props.user.height}</p> : null}
            </Grid.Column>
            <Grid.Column>
              {this.props.user ? <p>Body Type: {this.props.user.body_type}</p> : null}
            </Grid.Column>
          </Grid.Row>


          <div id="profile-edit-button">
            <Button id="edit-button" color="grey" size="small" onClick={this.convertToInput} user={this.state.user}>Edit Profile</Button>
          </div>

        </Grid>
          : <EditProfileForm saveMeasurements={this.saveMeasurements} gender={this.state.gender} activityLevel={this.state.activityLevel} goal={this.state.goal} getGoal={this.getGoal} getActivityLevel={this.getActivityLevel} getGender={this.getGender} getBodyType={this.getBodyType} bmr={this.state.bmr} calculateBmrMacrosCalories={this.calculateBmrMacrosCalories} user={this.props.user} handleChange={this.handleChange} convertBackToText={this.convertBackToText} />}
          <br />
          <br />

        </React.Fragment>
    )
  }
}


export default Profile
