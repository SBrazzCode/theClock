import React from "react"
import Gear from "./gear.js"
import clockStyles from "./clock.module.css"
import Escapement from "./escapement.js"
import stopButtonStyles from "./stopButton.module.css"
import "bootstrap/dist/css/bootstrap.css"
require("bootstrap")

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.stopTime = this.stopTime.bind(this)
    this.state = { time: 0, ticking: true } //time measured in seconds
  }

  //On each tick increment time by 1 second each. Every components rotation
  //will be a multiple of the time.
  tick() {
    this.setState({ time: this.state.time + 1 })
  }
  stopTime() {
    this.setState({ ticking: false })
  }
  render() {
    const time = this.state.time
    return (
      <div className={clockStyles.clock}>
        <Gear numTeeth={30} wheelName="EscapeWheel" time={time} />
        <Gear numTeeth={20} wheelName="FourthWheel" time={time} />
        <Escapement onTick={this.tick} time={time} ticking={this.state.ticking}/>
        <input
          type="button"
          onClick={this.stopTime}
          value="Stop Time"
          className={`${"btn btn-danger"}  ${stopButtonStyles.stopButton}`}
        />
      </div>
    )
  }
}
