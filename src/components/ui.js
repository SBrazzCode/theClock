import React from "react"
import UIStyles from "./styles/ui.module.css"
import "./styles/scss/variableChanges.scss"

//The interactable part of the clock.
export default function UI(props) {
  return (
    <div className={UIStyles.controlPanel}>
      <input
        type="button"
        onClick={props.startTime}
        value="Start Time"
        className={"btn btn-secondary"}
      />

      <input
        type="button"
        onClick={props.stopTime}
        value="Stop Time"
        className={"btn btn-primary"}
      />
    </div>
  )
}
