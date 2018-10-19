import React from 'react'
import { Image, Button, Grid, Menu } from 'semantic-ui-react'
import EditProfileForm from './EditProfileForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert'
import MacrosPieChart from './MacrosPieChart'
import WorkoutStatsChart from './WorkoutStatsChart'
import WeightChart from './WeightChart'


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
      fats: "",
      activeItem: 'stats'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
  debugger
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

    const { activeItem } = this.state

    return (
      <React.Fragment>
      <div id='header-site'>
        <div id="profile-image-container">
          <Image id="profile-pic" src='data:image/png;base64,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' size='small' circular />
        </div>

        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='workout plan' active={activeItem === 'workouts'} onClick={this.handleItemClick}/>
          <Menu.Item name='nutrition plan' active={activeItem === 'nutrition'} onClick={this.handleItemClick}/>
          <Menu.Item name='lifestyle plan' active={activeItem === 'lifestyle'} onClick={this.handleItemClick} />
          <Menu.Item name='measurements' active={activeItem === 'measurements'} onClick={this.handleItemClick} />
        </Menu>

      </div>

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


      <h1 id="workout-stats">Workout Stats</h1>
      <Grid id="stats" columns="two">
        <Grid.Row>
          <Grid.Column id="workout-column">
            <FontAwesomeIcon icon="dumbbell" size="2x"/>
            {this.props.user ? <h3>{this.props.workoutsCompleted} Workouts Completed</h3> : null}
            {this.props.user ? <h3>{this.props.allWeightLifted} lb. Lifted</h3> : null}
            {this.props.user ? <h3>{this.props.allRepsLifted} Reps Completed</h3> : null}
          </Grid.Column>
          <Grid.Column>
            { this.props.user ? <WorkoutStatsChart allWeightLifted={this.props.allWeightLifted} workoutsCompleted={this.props.workoutsCompleted} allRepsLifted={this.props.allRepsLifted}/> : null }
          </Grid.Column>
        </Grid.Row>


        <h1 id="workout-stats">Nutrition Needs</h1>
        <Grid.Row>
          <Grid.Column id="nutrition-column">
              <FontAwesomeIcon icon="utensils" size="2x"/>
              {this.props.user ? <h3>{this.props.user.calories} Kcal</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_protein}g Protein</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_carbs}g of Carbs</h3> : null}
              {this.props.user ? <h3>{this.props.user.daily_fats}g of Fats</h3> : null}
          </Grid.Column>
          <Grid.Column>
              { this.props.user ? <MacrosPieChart user={this.props.user}/> : null }
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {this.props.user ? <WeightChart user={this.props.user}/> : null }

        </React.Fragment>
    )
  }
}


export default Profile
