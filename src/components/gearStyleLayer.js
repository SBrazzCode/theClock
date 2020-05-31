import React from "react"
import gearStyles from "./styles/gearStyleLayer.module.css"

export default function GearStyleLayer(props) {
  //Get the width for this gear.
  const gearSize = calcGearSize(props.numTeeth)

  //Get the position for this gear
  const gearPosition = getGearPosition(props.wheelName)

  // const styles = Object.assign({}, rotation, gearSize, gearPosition)
  const styles = Object.assign({}, gearSize, gearPosition)

  return (
    <div className={gearStyles.gearStyleLayer} style={styles}>
      {props.children}
    </div>
  )
}

/*  The circumference of the gear should be twice the (total width of the teeth).

  circumference = 2Pir
  circumference = (Number of Teeth * (Width of each tooth) ) * 2

  (Number of Teeth * (Width of each tooth) ) * 2 = 2Pir
  (Number of Teeth * (Width of each tooth) ) * 2 = Pid

  diameter = Number of Teeth * (Width of each tooth) * 2 / pi
  diameter = (numTeeth * (.8) * 2 / Math.PI)

*/
function calcGearSize(numTeeth) {
  //rounding because html is only accurate to a few decimal points
  const diameter = ((numTeeth * 0.8 * 2) / Math.PI).toFixed(2)

  //return the sizes that will be specified in the cogs style attribute.
  return {
    height: diameter + "vw",
    width: diameter + "vw",
  }
}

/*  Retrieves the position style that corresponds to the wheelName. i.e the escape wheel
  should be positioned near the escapement.
*/
function getGearPosition(wheelName) {
  //Could make these all modular, then just add gear spin here too
  switch (wheelName) {
    case "EscapeWheel":
      return {
        top: "-5vh",
        left: "0vw",
        // transform: 'rotate(' + 0 + 'deg)'
      }
    case "FourthWheel":
      return {
        top: "-5vh",
        left: "1vw",
      }
  }
}
