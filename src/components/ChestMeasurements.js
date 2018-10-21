import React from 'react';
import {Line} from 'react-chartjs-2';

class ChestMeasurements extends React.Component {
  render() {
    let dateArr = this.props.measurements.map(measurement => measurement.date)
    let chestMeasurements = this.props.measurements.map(measurement => measurement.chest)
    const data = {
      labels: dateArr,
      datasets: [
        {
          label: 'Chest',
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
          data: chestMeasurements
        }
      ]
    }

    return (

      <div>
        <h2>Chest</h2>
        <Line id="chest-analytics" data={data} />
      </div>
    );
  }
}

export default ChestMeasurements
