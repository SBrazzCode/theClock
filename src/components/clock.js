import React from "react"
import Gear from "./gear.js"
import clockStyles from "./styles/clock.module.css"
import Escapement from "./escapement.js"
import stopButtonStyles from "./styles/stopButton.module.css"
import startButtonStyles from "./styles/startButton.module.css"
import "bootstrap/dist/css/bootstrap.css"
require("bootstrap")

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.stopTime = this.stopTime.bind(this)
    this.startTime = this.startTime.bind(this)
    this.state = { time: 0, ticking: true } //time measured in seconds
  }

  //On each tick increment time by 1 second each. Every components rotation
  //is a multiple of this time.
  tick() {
    this.setState({ time: this.state.time + 1 })
  }

  stopTime() {
    this.setState({ ticking: false })
  }

  startTime() {
    this.setState({ ticking: true })
  }

  render() {
    const time = this.state.time

    return (
      <div className={clockStyles.clock}>
        <Gear numTeeth={30} wheelName="EscapeWheel" time={time} />
        <Gear numTeeth={20} wheelName="FourthWheel" time={time} />

        <Escapement
          onTick={this.tick}
          ticking={this.state.ticking}
          time={time}
        />

        <input
          type="button"
          onClick={this.stopTime}
          value="Stop Time"
          className={`${"btn btn-danger"}  ${stopButtonStyles.stopButton}`}
        />

        <input
          type="button"
          onClick={this.startTime}
          value="Start Time"
          className={`${"btn btn-warning"}  ${startButtonStyles.startButton}`}
        />
      </div>
    )
  }
}
