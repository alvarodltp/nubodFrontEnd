import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class TotalFatsChart extends React.Component {
  render() {

    //this is the number that is missing in order for the user to complete their day successfully
    //substraction between their actual needs and what they have already added
    // let secondNumber =

    const data = {
    	labels: [
    		'Total Fats'
    	],
    	datasets: [{
    		data: [this.props.user.daily_fats],
    		backgroundColor: [
          '#A8FC00',
          'lightgray'
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

export default TotalFatsChart
