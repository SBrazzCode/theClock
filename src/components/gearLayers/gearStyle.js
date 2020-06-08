import React from "react"
import gearStyleStyles from "../styles/gearStyle.module.css"

/*
  All css styles that are not position or rotation.
*/
export default function GearStyle(props) {
  
  //Get the width for this gear.
  const gearSize = calcGearSize(props.numTeeth)
  const backgroundColor = {
    background: props.color
  }

  const styles = Object.assign({}, gearSize, backgroundColor)

  return (
    <div className={gearStyleStyles.gearStyle} style={styles}>
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
