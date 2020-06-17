import React from "react"
import clockInternalsStyles from "./styles/clockInternals.module.css"
import Escapement from "./escapement.js"
import gearObjects from "../../res/gears.json"
import Wheel from "./wheel.js"
import Pinion from "./pinion.js"
import PowerSource from "./powerSource.js"
import ClockHand from "./clockHand.js"

//The mechanical parts of the clock
export default function ClockInternals(props) {
  const time = props.time

  return (
    <div className={clockInternalsStyles.clockInternals}>
      {/* Create an array of wheels from gear.json. Each object in gear.json
        represents one wheel that is created here. If a pinion exists, it is
        created and passed in children.props */}
      {gearObjects.gears.map((data, index) => {
        return (
          <Wheel gearObject={data} key={index} time={time}>
            {data.pinion != null && <Pinion pinionObject={data.pinion} />}
          </Wheel>
        )
      })}

      {/* These ClockHands could have been added as children in the gearCore layer. However,
        I already demonstrated the modularity of gearCore with pinions. */}
      <ClockHand
        timeToRotate={3600}
        height={"15vw"}
        top={"34.5vw"}
        left={"55vw"}
        time={time}
      />

      <ClockHand
        timeToRotate={60}
        height={"17vw"}
        top={"32.2vw"}
        left={"33.1vw"}
        time={time}
      />

      <PowerSource time={time} />

      <Escapement
        onTick={props.tick}
        ticking={props.ticking}
        time={time}
      />
    </div>
  )
}
