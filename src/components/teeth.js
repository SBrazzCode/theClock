import React from "react"
import toothStyles from "./styles/tooth.module.css"

/* Creates all teeth for a single gear.
  It creates a div for each tooth, and it rotates that tooth according to
  a calculated angle.
*/
export default function Teeth(props) {
  const numTeeth = props.numTeeth

  //Get an array of angles for each tooth.
  const teethAngles = getTeethAngles(numTeeth)

  //Create an object from the color prop
  const backgroundColor = {
    background: props.color,
  }

  /*  For each angle create a div and rotate it angle degrees.
    In the styles property we combine the background color with the rotation.
  */
  const teeth = teethAngles.map(angle => (
    <div
      key={angle.toString()}
      className={toothStyles.tooth}
      style={Object.assign({}, backgroundColor, {
        transform: `rotate(` + angle + `deg)`,
      })}
    ></div>
  ))

  //The parent div is just to modularize the compiled html
  return <div>{teeth}</div>
}

/*  Uses numTeeth to create and return an array of angles. Nth angle is
  the rotation for nth tooth in the gear.
  Each tooth is actually a long div that sticks out on both ends,
  so we only need to make 1/2 the total number of teeth.
  */
function getTeethAngles(numTeeth) {
  let teethAngles = []

  //How much of a gap there is between each tooth
  let teethAngleGap = 360 / numTeeth

  //Only need to make 1/2 the total number of teeth
  numTeeth /= 2

  //Only 1/2 are needed right, so we start from one angle less than 180 degrees and go to 0.
  let currentAngle = 180 - teethAngleGap

  //For each tooth subtract a teethAngleGap and add that resulting angle to an array.
  for (let i = 0; i < numTeeth; i++) {
    teethAngles.push(currentAngle)
    currentAngle -= teethAngleGap
  }

  return teethAngles
}
