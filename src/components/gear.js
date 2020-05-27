import React from "react"
import centerStyles from "./center.module.css"
import gearStyles from "./gear.module.css"
import counterClockwiseSpinStyles from "./counterClockwiseSpin.module.css"
import clockwiseSpinStyles from "./clockwiseSpin.module.css"
import Teeth from "./teeth.js"
import GearSpin from "./gearSpin.js"

/*  Describes one gear. Each gear has props numTeeth.
  This gear was inspired by the css gear https://codepen.io/sketchbookkeeper/pen/jrmYXm.
*/
export default class Gear extends React.Component {
  constructor(props) {
    super(props)
    //Add spin state here, make is a controlled component
  }

  // render() {

  //       //Get the width for this gear.
  //       const gearSize = calcGearSize(this.props.numTeeth)

  //       //Get the position for this gear
  //       const gearPosition = getGearPosition(this.props.wheelName)

  //       //Get the direction this gear will spin in
  //       const gearSpin = getGearSpin(this.props.wheelName)

  //   return (
  //     <GearSpin numTeeth={this.props.numTeeth} time={this.props.time}>
  //     <div
  //       className={`${gearStyles.gear} ${gearSpin}`}
  //       style={Object.assign({}, gearPosition, gearSize)}
  //     >
  //       <div className={centerStyles.center}></div>
  //       <Teeth numTeeth={this.props.numTeeth} />
  //     </div>
  //     </GearSpin>
  //   )
  // }

  render() {
    // //Get the width for this gear.
    // const gearSize = calcGearSize(this.props.numTeeth)

    // //Get the position for this gear
    // const gearPosition = getGearPosition(this.props.wheelName)

    // //Get the direction this gear will spin in
    // const gearSpin = getGearSpin(this.props.wheelName)

    return (
      <GearSpin
        numTeeth={this.props.numTeeth}
        time={this.props.time}
        wheelName={this.props.wheelName}
      >
        {/* <div
          className={gearStyles.gear}
          style={Object.assign({}, gearPosition, gearSize)}
        > */}
        <div className={centerStyles.center}></div>
        <Teeth numTeeth={this.props.numTeeth} />
        {/* </div> */}
      </GearSpin>
    )
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
        left: "12vw",
      }
    case "FourthWheel":
      return {
        top: "1vh",
        left: "12vw",
      }
  }
}

function getGearSpin(wheelName) {
  switch (wheelName) {
    case "EscapeWheel":
      return clockwiseSpinStyles.clockwiseSpin

    case "FourthWheel":
      return counterClockwiseSpinStyles.counterClockwiseSpin
  }
}
