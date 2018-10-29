import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class EnergyExpenditureCalculator extends React.Component {

  render(){

    let activityOptions = [
      {text: 'Bicycling - < 10, general leisure', value: 4.0 }, {text: 'Bicycling - 10-11.9 mph, leasure, slow, light effort', value: 6.0 },
      {text: 'Bicycling - 12-13.9 mph, leasure, slow, moderate effort', value: 8.0 }, {text: 'Bicycling - 14-15.9 mph, racing, fast, vigorous effort', value: 10.0},
      {text: 'Bicycling - 16-19 mph, racing/not drafting or > 19 mph drafting, very fast', value: 12.0 },
      {text: 'Bicycling -  > 20 mph, racing, not drafting', value: 16.0 }, {text: 'Bicycling -  > 20 mph, racing, not drafting', value: 16.0 }
    ]

    return(
      <React.Fragment>
        <Dropdown id="activity-dropdown" onChange={(e, data) => {this.props.handleDropdownClick(e, data)}} placeholder='Activity...' search selection options={activityOptions} />
        {this.props.selectedActivity ?
        <div id="activity-information">
          <h1>{this.props.selectedActivity[0].text}</h1>
          <h2>In order to burn {this.props.totalCalories}, you need to do a total of {this.props.totalExerciseTime} minutes of this activity.</h2>
        </div> : null }
      </React.Fragment>
    )
  }
}

export default EnergyExpenditureCalculator
