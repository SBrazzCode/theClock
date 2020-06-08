import React from "react"

import escapementRotationStyles from "../styles/escapementRotation.module.css"

/*
  The layer that rotates the escapement
*/
export default function EscapementRotation(props) {
  const rotation = getRotation(
    props.time,
    props.deviation,
    props.initialRotation
  )

  return (
    <div
      className={escapementRotationStyles.escapementRotation}
      style={rotation}
    >
      {props.children}
    </div>
  )
}

/*
  Calculates the current rotation based on the time and hard coded values.
  The rotation has two beats in each cycle. At each beat, the escapement
  is rotated to its maximum deviations. The transition length is controlled
  by cs. 
  
  deviation:        the amount deviated from the norm on each beat.

  initialRotation:  the inital rotation required to align the escapement
                    with the gear
 */
function getRotation(time, deviation, initialRotation) {

  // beat alternates between 1 an -1
  let beat = (time % 2 === 1 ? 1 : -1)

  const currentRotation = deviation * beat + initialRotation

  //returns the rotation as a css style
  return { transform: `rotate(` + currentRotation + `deg)` }
}
