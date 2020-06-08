import React from "react"
import pendulumStyles from "../styles/pendulum.module.css"

/*
  The shafts leading the the pendulum, the pendulum rod, and the pendulum bob.
*/
export default function Pendulum(props) {
  return (
    <div className={pendulumStyles.pendulum}>
      <div className={pendulumStyles.pendulumShaftOne} />
      <div className={pendulumStyles.pendulumShaftTwo} />
      <div className={pendulumStyles.pendulumRod}>
        <div className={pendulumStyles.pendulumBob} />
      </div>
    </div>
  )
}
