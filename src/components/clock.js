import React from "react"
// import Gear from "./gear.js"
import clockStyles from "./styles/clock.module.css"
import Escapement from "./escapement.js"
import stopButtonStyles from "./styles/stopButton.module.css"
import startButtonStyles from "./styles/startButton.module.css"
import "bootstrap/dist/css/bootstrap.css"
import gearObjects from "../../res/gears.json"
import Wheel from "./wheel.js"
import Pinion from "./pinion.js"
import ClockHand from "./clockHand.js"
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
    this.setState(state => ({ time: state.time + 1 }))
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
        {gearObjects.gears.map((data, index) => {
          return (
            <Wheel gearObject={data} key={index} time={time}>
              {data.pinion != null && <Pinion pinionObject={data.pinion} />}
            </Wheel>
          )
        })}

        <ClockHand timeToRotate={60} height={"15vw"} top={"32.5vw"} left={"33.5vw"} time={time}/>

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
