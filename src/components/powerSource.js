import React from "react"
import Weight from "./powerSourceParts/weight.js"
import GearPosition from "./gearLayers/gearPosition.js"
import GearStyle from "./gearLayers/gearStyle.js"
import GearRotation from "./gearLayers/gearRotation.js"
import GearCore from "./gearLayers/gearCore.js"
import PinionStyles from "./styles/pinion.module.css"

//A wheel that is driven by gravity acting on a weight. 
export default function PowerSource(props) {
  //A gear Object with the same attributes as the gears in gears.json.
  const powerGear = {
    wheelName: "powerGear",
    numTeeth: 50,
    top: "8.4vw",
    left: "64.3vw",
    color: "#747474",
    rotationData: {
      initialRotation: 0,
      rotationMultiple: 0.01388888888,
    },
    pinion: {
      numTeeth: 30,
      color: "#aaa",
    },
    zIndex: -2,
  }

  const pinionObject = powerGear.pinion
  const time = props.time

  return (
    //The same structure as a Wheel. However, it includes a Weight that needed to be outside of the
    //rotation layer. Furthermore, the pinion needs to be in the same level in the DOM Hierarchy as
    //the Weight, for the weight needs to be behind the pinion, but infront of the GearStyle.
    <GearPosition
      top={powerGear.top}
      left={powerGear.left}
      zIndex={powerGear.zIndex}
    >
      <GearStyle numTeeth={powerGear.numTeeth} color={powerGear.color}>
        <GearRotation
          numTeeth={powerGear.numTeeth}
          rotationData={powerGear.rotationData}
          time={time}
        >
        <GearCore numTeeth={powerGear.numTeeth} color={powerGear.color}>
          {props.children}
        </GearCore>
        </GearRotation>
        <div className={PinionStyles.pinion}>
          <GearStyle
            numTeeth={pinionObject.numTeeth}
            color={pinionObject.color}
          ></GearStyle>
        </div>
        <Weight time={time} />
      </GearStyle>
    </GearPosition>
  )
}
