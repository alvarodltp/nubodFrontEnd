import React from 'react'
import {Line} from 'react-chartjs-2';

class BicepMeasurements extends React.Component {
  render(){
    let dateArr = this.props.measurements.map(measurement => measurement.date)
    let bicepMeasurements = this.props.measurements.map(measurement => measurement.bicep)
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: 'Biceps',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: bicepMeasurements
        }
      ]
    }

    return(
      <div>
        <h2>Biceps</h2>
        <Line id="bicep-analytics" data={data} />
      </div>
    )
  }
}

export default BicepMeasurements
