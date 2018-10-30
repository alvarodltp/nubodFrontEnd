import React from 'react'
import { Dropdown, Card } from 'semantic-ui-react'

class EnergyExpenditureCalculator extends React.Component {

  render(){

    let activityOptions = [
      {text: 'Bicycling - < 10, general leisure', value: 4.0 },
      {text: 'Bicycling - 10-11.9 mph, leasure, slow, light effort', value: 6.0 },
      {text: 'Bicycling - 12-13.9 mph, leasure, slow, moderate effort', value: 8.0 },
      {text: 'Bicycling - 14-15.9 mph, racing, fast, vigorous effort', value: 10.0},
      {text: 'Bicycling - 16-19 mph, racing/not drafting or > 19 mph drafting, very fast', value: 12.0 },
      {text: 'Bicycling -  > 20 mph, racing, not drafting', value: 16.0 },
      {text: 'Running - 5 mph(12 min mile)', value: 8.0 },
      {text: 'Running - 5.2 mph(11.5 min mile)', value: 9.0 },
      {text: 'Running - 6 mph(10 min mile)', value: 10.0 },
      {text: 'Running - 6.7 mph(9 min mile)', value: 11.0 },
      {text: 'Running - 7 mph(8.5 min mile)', value: 11.5 },
      {text: 'Running - 7.5 mph(8 min mile)', value: 12.5 },
      {text: 'Running - 8 mph(7.5 min mile)', value: 13.5 },
      {text: 'Stairmaster - Level 4', value: 7.0 },
      {text: 'Stairmaster - Level 6', value: 9.0 },
      {text: 'Stairmaster - Level 8', value: 11.0 },
      {text: 'Stairmaster - Level 10', value: 13.0 },

    ]

    return(
      <React.Fragment>
      <div id="exercise-calorie-info">
        <h3>How To Burn These Calories?</h3>
        <Dropdown id="activity-dropdown" onChange={(e, data) => {this.props.handleDropdownClick(e, data)}} placeholder='Activity...' search selection options={activityOptions} />
        {this.props.selectedActivity ?
        <Card id="activity-information">
          <h4>{this.props.selectedActivity.text}</h4>
          <p>In order to burn {this.props.totalCalories}, you need to do a total of {this.props.totalExerciseTime} minutes of this activity.</p>
        </Card>
        : null }
      </div>
      </React.Fragment>
    )
  }
}

export default EnergyExpenditureCalculator
