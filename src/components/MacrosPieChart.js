import React from 'react';
import {Pie} from 'react-chartjs-2';

class MacrosPieChart extends React.Component {
  render() {
      const data = {
      labels: [
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.user.daily_protein, this.props.user.daily_carbs, this.props.user.daily_fats],
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
    }

    return (
      <div>
        <Pie
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

export default MacrosPieChart
