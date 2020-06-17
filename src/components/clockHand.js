import React from "react"
import clockHandStyles from "./styles/clockHand.module.css"

//A hand which angle corresponds to the current time. This time is relative to
//the type of hand i.e. second hand: seconds.
export default function ClockHand(props) {
  const rotation = getRotation(props.time, props.timeToRotate)

  const height = {
    height: props.height,
  }

  const position = {
    top: props.top,
    left: props.left,
  }

  return (
    <div className={clockHandStyles.position} style={position}>
      <div className={clockHandStyles.rotation} style={rotation}>
        <div className={clockHandStyles.style} style={height} />
      </div>
    </div>
  )
}

//360/timeToRotate gives you rotations per second. Multiplying this by time will
//give you the current rotation. Returns the currentRotation as a transform: rotate css property.
function getRotation(time, timeToRotate) {
  let currentRotation = time * (360 / timeToRotate)

  return { transform: `rotate(` + currentRotation + `deg)`}
}
