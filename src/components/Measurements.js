import React from 'react'
import BodyFatChart from './BodyFatChart'
import ChestMeasurements from './ChestMeasurements'
import ShoulderMeasurements from './ShoulderMeasurements'
import NeckMeasurements from './NeckMeasurements'
import BicepMeasurements from './BicepMeasurements'
import WaistMeasurements from './WaistMeasurements'
import HipMeasurements from './HipMeasurements'
import ThighMeasurements from './ThighMeasurements'

class Measurements extends React.Component {
  render(){
    return(
      <div>
        <BodyFatChart measurements={this.props.measurements} />
        <ChestMeasurements measurements={this.props.measurements} />
        <ShoulderMeasurements measurements={this.props.measurements} />
        <NeckMeasurements measurements={this.props.measurements} />
        <BicepMeasurements measurements={this.props.measurements} />
        <WaistMeasurements measurements={this.props.measurements} />
        <HipMeasurements measurements={this.props.measurements} />
        <ThighMeasurements measurements={this.props.measurements} />
      </div>
    )
  }
}

export default Measurements
