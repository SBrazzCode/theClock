import React from "react"
import Gear from "./gear.js"
import clockStyles from "./styles/clock.module.css"
import Escapement from "./escapement.js"
import stopButtonStyles from "./styles/stopButton.module.css"
import startButtonStyles from "./styles/startButton.module.css"
import "bootstrap/dist/css/bootstrap.css"
import $ from "jquery"
import { graphql, useStaticQuery } from "gatsby"

require("bootstrap")

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.stopTime = this.stopTime.bind(this)
    this.startTime = this.startTime.bind(this)
    this.state = {
      time: 0, //time measured in seconds
      ticking: true,
      gears: [],
      gearsLoaded: false,
      error: null,
    }
  }

  //On each tick increment time by 1 second each. Every components rotation
  //is a multiple of this time.
  tick() {
    this.setState({ time: this.state.time + 1 })
  }

  stopTime() {
    this.setState({ ticking: false })
  }

  startTime() {
    this.setState({ ticking: true })
  }

  componentDidMount() {
    // fetch("./res/gears.json")
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       this.setState({
    //         gearsLoaded: true,
    //         gears: result.gears,
    //       })
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       })
    //     }
    //   )
    // fetch("./res/gears.json")
    //   .then(res => res.json())
    //   .then(
    //     result => {
    //       console.log(result)
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       })
    //     }
    //   )
    // fetch("./res/packasdfdsfsfdse.json")
    // .then(res => console.log(res))
    // .then(
    //   result => {
    //     console.log(result)
    //   },
    //   error => {
    //     this.setState({
    //       isLoaded: true,
    //       error,
    //     })
    //   }
    // )
    // let jef = 2
    // jef += 2
    // let data
    // $.getJSON( "res/gears.json", function(data){
    //   console.log(data)
    // })
    // const gatsbyRepoData = useStaticQuery(graphql`
    //   query {
    //     github {
    //       repository(name: "theClock", owner: "crippledtable") {
    //         id
    //         nameWithOwner
    //         url
    //       }
    //     }
    //   }
    // `)

    //         {gatsbyRepoData.github.repository.nameWithOwner}

    // const [gears, setGears] = useState()
    // useEffect(() => {
    //   // get data from GitHub api
    fetch(`https://github.com/CrippledTable/theClock/res/gears.json`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        this.setState({ gears: resultData })
      }) // set data for the number of stars
    // }, [])
    console.log(this.state.gears)
  }

  render() {
    const { time, ticking, gears, gearsLoaded, error } = this.state
    if (error) {
      return (
        <div>
          Error loading gears
          <br />
          Error: {error.message}
        </div>
      )
    } else if (!gearsLoaded) {
      return <div>Loading Gears</div>
    } else {
      return (
        <div className={clockStyles.clock}>
          {/* {gears.map(gear => <Gear gearObject={gear} time={time}/>)} */}
          {gears.map(gear => (
            <Gear {...gear} time={time} />
          ))}

          {/* <Gear numTeeth={30} wheelName="EscapeWheel" time={time} />
          <Gear numTeeth={20} wheelName="FourthWheel" time={time} /> */}

          <Escapement onTick={this.tick} ticking={ticking} time={time} />

          <input
            type="button"
            onClick={this.stopTime}
            value="Stop Time"
            className={`${"btn btn-danger"}  ${stopButtonStyles.stopButton}`}
          />

          <input
            type="button"
            onClick={this.startTime}
            value="Start Time"
            className={`${"btn btn-warning"}  ${startButtonStyles.startButton}`}
          />
        </div>
      )
    }
  }
}
