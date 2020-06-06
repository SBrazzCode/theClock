import React from "react"
import gearPositionStyles from "../styles/gearPosition.module.css"

export default function GearPosition(props) {

  //Get the position for this gear
  // const gearPosition = getGearPosition(props.wheelName)
  const xyPosition = getGearPosition(props.top, props.left)

  const zIndex = {
    zIndex: props.zIndex
  }

  const positions = Object.assign({}, xyPosition, zIndex)

  return (
    <div className={gearPositionStyles.gearPosition} style={positions}>
      {props.children}
    </div>
  )

  // // return (
  // //   <div className={gearPositionStyles.gearPosition} style={props.position}>
  // //     {props.children}
  // //   </div>
  // )
}


/*  Retrieves the position style that corresponds to the wheelName. i.e the escape wheel
  should be positioned near the escapement.
*/
// function getGearPosition(wheelName) {
//   //Could make these all modular, then just add gear spin here too
//   switch (wheelName) {
//     case "EscapeWheel":
//       return {
//         top: "-5vh",
//         left: "0vw",
//         // transform: 'rotate(' + 0 + 'deg)'
//       }
//     case "FourthWheel":
//       return {
//         top: "-5vh",
//         left: "1vw",
//       }
//   }
// }

function getGearPosition(top, left){
  return {
    top: top,
    left: left
  }
}
