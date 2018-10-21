import React from 'react'
import {Line} from 'react-chartjs-2';

class ShoulderMeasurements extends React.Component {
  render(){
    let dateArr = this.props.measurements.map(measurement => measurement.date)
    let shoulderMeasurements = this.props.measurements.map(measurement => measurement.shoulder)
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: 'Shoulders',
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
          data: shoulderMeasurements
        }
      ]
    }

    return(
      <div>
        <h2>Shoulders</h2>
        <Line id="shoulder-analytics" data={data} />
      </div>
    )
  }
}

export default ShoulderMeasurements
