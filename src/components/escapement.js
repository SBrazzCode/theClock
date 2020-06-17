import React from "react"
import EscapementTop from "./escapementParts/escapementTop.js"
import EscapementRotation from "./escapementParts/escapementRotation.js"
import Pendulum from "./escapementParts/pendulum.js"
import escapementStyles from "./styles/escapement.module.css"

/*  In a clock the escapment controls the "ticking". Conventionally,
    the ticking of a Clock object is controlled by this class. While
    in traditional nomenclature the pendulum is not apart of the
    escapement, for they are separate entities that work together,
    the pendulum is a child of this escapement. This decision
    was so that both elements could be rotated in the same layer.
    You could view this class as "PendulumAndEscapement", for it was
    shortened to escapement for brevity; the length of this comment
    is ironic.
*/
export default class Escapement extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.tick()
  }

  componentDidUpdate(prevProps) {
    //If the ticking property has changed, and it is now ticking, jumpstart the tick function
    if (this.props.ticking != prevProps.ticking) {
      if (this.props.ticking) {
        this.tick()
      }
    }
  }

  //While the property ticking is true, tick every second.
  tick() {
    if (this.props.ticking) {
      this.props.onTick()
      setTimeout(this.tick, 1000)
    }
  }

  render() {
    let time = this.props.time

    return (
      <div className={escapementStyles.escapement}>
        <EscapementRotation time={time} deviation={8} initialRotation={50}>
          <EscapementTop/>
          <Pendulum/>
        </EscapementRotation>
      </div>
    )
  }
}
