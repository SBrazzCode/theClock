import React from "react"
// import centerStyles from "../styles/center.module.css"
import gearCoreStyles from "../styles/gearCore.module.css"
import Teeth from "../teeth.js"

/*  Describes one gear. Each gear has props numTeeth.
  This gear was inspired by the css gear https://codepen.io/sketchbookkeeper/pen/jrmYXm.
*/
export default function GearCore(props) {

  return (
    <div className={gearCoreStyles.gearCore}>
      {/* <div> */}
        {/* <div className={centerStyles.center}></div> */}
        <Teeth numTeeth={props.numTeeth} color={props.color}/>
      {/* </div> */}
      {props.children}
    </div>
  )
}
