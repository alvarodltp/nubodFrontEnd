import React from 'react';
import {Line} from 'react-chartjs-2';

class WeightChart extends React.Component {
  render() {
    let dateArr = this.props.user.measurements.map(measurement => measurement.date)
    let bodyWeight = this.props.user.measurements.map(measurement => measurement.body_weight)
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: 'Body Weight',
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
          data: bodyWeight
        }
      ]
    }

    return (
      <div>
        <h2>Weight Analytics</h2>
        <Line id="weight-analytics" data={data} />
      </div>
    );
  }
}

export default WeightChart
