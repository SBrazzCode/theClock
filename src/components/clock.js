import React from "react"
import UI from "./ui.js"
import ClockInternals from "./clockInternals.js"

//The parent of all Clock features.
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

  //This function is passed to Clock's children. Ticking and time are lifted states,
  //so this method lets Clock's children set ticking to false.
  stopTime() {
    this.setState({ ticking: false })
  }

  //This function is passed to Clock's children. Ticking and time are lifted states,
  //so this method lets Clock's children set ticking to true.
  startTime() {
    this.setState({ ticking: true })
  }

  render() {
    const time = this.state.time

    return (
      <div>
        <ClockInternals time={time} tick={this.tick} ticking={this.state.ticking}/>
        <UI stopTime={this.stopTime} startTime={this.startTime} />
      </div>
    )
  }
}
