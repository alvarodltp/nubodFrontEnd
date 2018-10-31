import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class TotalCarbsChart extends React.Component {
  render() {

    const data = {
    	labels: [
    		'Total Carbs'
    	],
    	datasets: [{
    		data: [this.props.user.daily_carbs],
    		backgroundColor: [
          '#A8FC00'
    		],
    		hoverBackgroundColor: [
          '#A8FC00',
    		]
    	}]
    };

    return (
      <div>
        <Doughnut
        data={data}
        width={100}
        height={100}
        options={{
        maintainAspectRatio: false
        }}
        />
      </div>
    )
  }
}

export default TotalCarbsChart
