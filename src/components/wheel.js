import React from "react"
import GearPosition from "./gearLayers/gearPosition.js"
import GearStyle from "./gearLayers/gearStyle.js"
import GearRotation from "./gearLayers/gearRotation.js"
import GearCore from "./gearLayers/gearCore.js"

/*  Describes one wheel. Each wheel consists of a layers that handle different style
attributes. In general terms a wheel and a pinion are both gears. A wheel is the parent gear to
a pinion.
1. GearPosition: the position of the wheel on the page
2. GearStyle: General CSS styles such as size and color (anything that isn't position or rotation)
3. GearRotation: the timed rotation of the gear.
This was done to modularize the wheel.
  This gear was inspired by the css gear https://codepen.io/sketchbookkeeper/pen/jrmYXm.
*/
export default function Wheel(props) {
  const gearObject = props.gearObject
  const time = props.time
  // return (
  //   <GearPosition wheelName={props.wheelName}>
  //     <GearStyle numTeeth={props.numTeeth} color={props.color}>
  //       <GearRotation
  //         numTeeth={props.numTeeth}
  //         wheelName={props.wheelName}
  //         time={props.time}
  //       >
  //         <GearCore numTeeth={props.numTeeth}>{props.children}</GearCore>
  //       </GearRotation>
  //     </GearStyle>
  //   </GearPosition>
  // )
  return (
    // I would have liked to use object destructuring. However, this does not work for GearPosition, for the
    // field top is already a global variable (could not find a workaround in sufficient time).
    <GearPosition
      top={gearObject.top}
      left={gearObject.left}
      zIndex={gearObject.zIndex}
    >
      <GearStyle numTeeth={gearObject.numTeeth} color={gearObject.color}>
        <GearRotation
          numTeeth={gearObject.numTeeth}
          rotationData={gearObject.rotationData}
          time={time}
        >
          <GearCore numTeeth={gearObject.numTeeth} color={gearObject.color}>
            {props.children}
          </GearCore>
        </GearRotation>
      </GearStyle>
    </GearPosition>
  )
}
