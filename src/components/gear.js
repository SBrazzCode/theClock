import React from "react"
import centerStyles from "./styles/center.module.css"
import counterClockwiseSpinStyles from "./styles/counterClockwiseSpin.module.css"
import clockwiseSpinStyles from "./styles/clockwiseSpin.module.css"
import Teeth from "./teeth.js"
import GearStyleLayer from "./gearStyleLayer.js"
import GearRotationLayer from "./gearRotationLayer.js"

/*  Describes one gear. Each gear has props numTeeth.
  This gear was inspired by the css gear https://codepen.io/sketchbookkeeper/pen/jrmYXm.
*/
export default function Gear(props) {
  return (
    <GearStyleLayer
      numTeeth={props.numTeeth}
      wheelName={props.wheelName}
    >
      <GearRotationLayer
        numTeeth={props.numTeeth}
        wheelName={props.wheelName}
        time={props.time}
      >
        <div className={centerStyles.center}></div>
        <Teeth numTeeth={props.numTeeth} />
      </GearRotationLayer>
    </GearStyleLayer>
  )
}
