import React from 'react';
import {Pie} from 'react-chartjs-2';

class GuiltPieChart extends React.Component {
  render() {
      const data = {
      labels: [
        'Calories',
        'Carbs',
        'Fats',
        'Sugars'
      ],
      datasets: [{
        data: [this.props.totalCalories, this.props.totalCarbs, this.props.totalFats, this.props.totalSugars],
        backgroundColor: [
        '#A8FC00',
        '#5400FC',
        '#D3D3D3',
        '#fc00a8'
        ],
        hoverBackgroundColor: [
        '#A8FC00',
        '#5400FC',
        '#D3D3D3',
        '#fc00a8'
        ]
      }]
    }

    return (
      <div>
        <Pie
        data={data}
        width={200}
        height={200}
        options={{
        maintainAspectRatio: false
        }}
        />
      </div>
    )
  }
}

export default GuiltPieChart
