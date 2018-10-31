import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class TotalProteinsChart extends React.Component {
  render() {

    const data = {
    	labels: [
    		'Total Proteins'
    	],
    	datasets: [{
    		data: [this.props.user.daily_protein],
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

export default TotalProteinsChart
