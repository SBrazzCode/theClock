import React from "react"
import gearRotationLayerStyles from "../styles/gearRotationLayer.module.css"

export default function GearRotationLayer(props) {
  const rotation = getRotation(
    props.time,
    props.numTeeth,
    props.clockWiseMultiple
  )

  return (
    <div className={gearRotationLayerStyles.gearRotationLayer} style={rotation}>
      {props.children}
    </div>
  )
}

/* The rotation is a function of time. Each rotation is equal to one toothAngleGap 
(it rotates one tooth at a time). The clockwiseMultiple is 1 for clockWise -1 for counter.
*/
function getRotation(time, numTeeth, clockWiseMultiple) {

  //the angle between each tooth
  const teethAngleGap = 360 / numTeeth

  //This will rotate until there's an overflow. This could be analogous to a grandfather
  //clock being full unwound, and a solution like a re-wind button/mechanism
  //could be implemented. However, I decided that is behind the scope of this project.
  const currentRotation = teethAngleGap * time * clockWiseMultiple

  return { transform: `rotate(` + currentRotation + `deg)` }
}
