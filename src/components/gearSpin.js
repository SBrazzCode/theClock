// import React from "react"
// import gearSpinStyles from "./gearSpin.module.css"

// export default class GearSpin extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const rotation = getRotation(this.props.time, this.props.numTeeth)

//     return (
//       <div className={gearSpinStyles.gearSpin} style={rotation}>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// function getRotation(time, numTeeth) {
//   const teethAngleGap = 360 / numTeeth
//   const currentRotation = (teethAngleGap * time) % 360
//   return { transform: `rotate(` + currentRotation + `deg)` }
// }

import React from "react"
import gearSpinStyles from "./gearSpin.module.css"
import gearStyles from "./gear.module.css"

export default class GearSpin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const rotation = getRotation(
      this.props.time,
      this.props.numTeeth,
      this.props.wheelName
    )

    //Get the width for this gear.
    const gearSize = calcGearSize(this.props.numTeeth)

    //Get the position for this gear
    const gearPosition = getGearPosition(this.props.wheelName)

    const styles = Object.assign({}, rotation, gearSize, gearPosition)

    return (
      <div
        className={`${gearSpinStyles.gearSpin} ${gearStyles.gear}`}
        style={styles}
      >
        {this.props.children}
      </div>
    )
  }
}

function getRotation(time, numTeeth, wheelName) {
  const isClockwise = isClockWise(wheelName)
  const teethAngleGap = 360 / numTeeth

  //This will rotate until there's an overflow. This could be analogous to a grandfather 
  //clock being full unwound, and a solution like a re-wind button/mechanism
  //could be implemented. However, I decided that is behind the scope of this project.
  const currentRotation = (teethAngleGap * time) * isClockwise
  return { transform: `rotate(` + currentRotation + `deg)` }
}

function isClockWise(wheelName){
    switch (wheelName) {
        case "EscapeWheel":
          return -1
          
        case "FourthWheel":
          return 1
      }
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
        top: "0",
        left: "36.5vw",
        // transform: 'rotate(' + 0 + 'deg)'
      }
    case "FourthWheel":
      return {
        top: "1vh",
        left: "0vw",
      }
  }
}
