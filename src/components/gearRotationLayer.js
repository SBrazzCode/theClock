import React from "react"
import gearRotationLayerStyles from "./styles/gearRotationLayer.module.css"

export default function GearRotationLayer(props) {
  const rotation = getRotation(
    props.time,
    props.numTeeth,
    props.wheelName
  )

  return (
    <div className={gearRotationLayerStyles.gearRotationLayer} style={rotation}>
      {props.children}
    </div>
  )
}

/*  When I start using json objects, I can replace wheelName with isClockwise;
    I would call getRotation(..., this.props.wheelObject.clockWiseMultiple)
*/
function getRotation(time, numTeeth, wheelName) {
  //isClockWise gets assigned 1 or -1. -1 if it is counter-clockwise
  const isClockwise = isClockWise(wheelName)

  //the angle between each tooth
  const teethAngleGap = 360 / numTeeth

  //This will rotate until there's an overflow. This could be analogous to a grandfather
  //clock being full unwound, and a solution like a re-wind button/mechanism
  //could be implemented. However, I decided that is behind the scope of this project.
  const currentRotation = teethAngleGap * time * isClockwise

  return { transform: `rotate(` + currentRotation + `deg)` }
}

//Could rethink this. Have two arrays/one array and use .contains?
// i.e let clockWiseGears = {"FourthWheel", "SecondWheel"}
function isClockWise(wheelName) {
  switch (wheelName) {
    case "EscapeWheel":
      return -1

    case "FourthWheel":
      return 1
  }
}
