import React from "react"

import escapementTopStyles from "../styles/escapementTop.module.css"

/*
    The actual escapement part of the escapement; the part in close proximity to the gear.
*/
export default function EscapementTop (props){
    

    return <div className={escapementTopStyles.escapementTop}>
        <div className={escapementTopStyles.leftPallet}></div>
        <div className={escapementTopStyles.rightPallet}></div>
    </div>
}