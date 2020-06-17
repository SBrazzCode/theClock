import React from "react"
import weightStyles from "../styles/weight.module.css"

//A container div that holds the weight that powers the clock and the rope that visually
//attaches it to the PowerSource wheel.
export default function Weight(props) {
  const distanceUnspooled = calcDistanceUnspooled(props.time)

  const styles = Object.assign({}, distanceUnspooled)

  return (
    <div className={weightStyles.container}>
      <div className={weightStyles.rope} style={styles} />
      <div className={weightStyles.weightBox}>15kg</div>
    </div>
  )
}

//Using the current clock time, calculates and returns the distance unspooled.
//The distance is really just a larger height.
function calcDistanceUnspooled(time) {

  //The amount unspooled each tick. I can't remember how this was calculated.
  //Lesson learned: Comment as you code, even if you are unsure if you will
  //keep the code.
  const tickDifference = 0.01333430555
  const initialUnspooled = 25

  return { height: (tickDifference * time + initialUnspooled) + "vw"}
}
