import React from "react"

/*  In a clock the escapment controls the "ticking". Conventionally,
    the ticking of a Clock object is controlled by this class.

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
    return null
  }
}
