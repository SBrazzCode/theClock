import React from "react"
import clockHandStyles from "./styles/clockHand.module.css"

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

function getRotation(time, timeToRotate) {
  let currentRotation = time * (360 / timeToRotate)

  return { transform: `rotate(` + currentRotation + `deg)` }
}
