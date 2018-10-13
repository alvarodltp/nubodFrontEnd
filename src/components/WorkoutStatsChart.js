import React from 'react';
import {Doughnut} from 'react-chartjs-2';

class WorkoutStatsChart extends React.Component {
  render() {

    const data = {
    	labels: [
    		'Total Reps',
    		'Total Workouts',
    		'Total Weight/ lb.'
    	],
    	datasets: [{
    		data: [this.props.allRepsLifted, this.props.workoutsCompleted, this.props.allWeightLifted],
    		backgroundColor: [
          '#A8FC00',
          '#5400FC',
          '#D3D3D3'

    		],
    		hoverBackgroundColor: [
          '#A8FC00',
          '#5400FC',
          '#D3D3D3'
    		]
    	}]
    };

    return (
      <div>
        <Doughnut
        data={data}
        width={300}
        height={300}
        options={{
        maintainAspectRatio: false
        }}
        />
      </div>
    )
  }
}

export default WorkoutStatsChart
