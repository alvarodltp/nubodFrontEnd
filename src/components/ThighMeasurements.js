import React from 'react'
import {Line} from 'react-chartjs-2';

class ThighMeasurements extends React.Component {
  render(){
    let dateArr = this.props.measurements.map(measurement => measurement.date)
    let thighMeasurements = this.props.measurements.map(measurement => measurement.thigh)
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: 'Waist',
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
          data: thighMeasurements
        }
      ]
    }

    return(
      <div>
        <h2>Thigh</h2>
        <Line id="thigh-analytics" data={data} />
      </div>
    )
  }
}

export default ThighMeasurements
