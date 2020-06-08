import React from "react"
import gearPositionStyles from "../styles/gearPosition.module.css"

/*
  The position of the gear, the gear is by default position: fixed.
*/
export default function GearPosition(props) {

  //Get the position for this gear
  // const gearPosition = getGearPosition(props.wheelName)
  const xyPosition = getGearPosition(props.top, props.left)

  //Set zIndex equal to an object that can be assigned to a css style
  const zIndex = {
    zIndex: props.zIndex,
  }

  //Assign all style objecs to position.
  const positions = Object.assign({}, xyPosition, zIndex)

  return (
    <div className={gearPositionStyles.gearPosition} style={positions}>
      {props.children}
    </div>
  )
}

//Returns top and left as an object that can be assigned to a css style.
function getGearPosition(top, left) {
  return {
    top: top,
    left: left,
  }
}
