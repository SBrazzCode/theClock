import React from "react"
import GearStyle from "./gearLayers/gearStyle.js"
import GearCore from "./gearLayers/gearCore.js"
import PinionStyles from "./styles/pinion.module.css"

/* A pinion is similar to a gear. However, the outmost positioning is different;
  A pinion must be in the center of the parent wheel. Furthermore, a pinion rotates
  at the same pace as its parent wheel, so no rotation layer is needed.
*/
export default function Pinion(props) {
const pinionObject = props.pinionObject

  return (
    <div className={PinionStyles.pinion}>
      <GearStyle numTeeth={pinionObject.numTeeth} color={pinionObject.color}>
        <GearCore numTeeth={pinionObject.numTeeth} color={pinionObject.color}/>
      </GearStyle>
    </div>
  )
}
