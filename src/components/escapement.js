import React from "react"

/*  In a clock the escapment controls the "ticking". Conventionally,
    the ticking of a Clock object is controlled by this class.

*/
export default class Escapement extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  componentDidUpdate(prevProps) {
    if (this.props.ticking == false && prevProps.ticking == true) {
        clearInterval(this.timerID)
    }
  }

  tick() {
    this.props.onTick()
  }

  render() {
    return null
  }
}
