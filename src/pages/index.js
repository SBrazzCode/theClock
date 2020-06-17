import React from "react"
import Clock from "../components/clock"
import {Helmet} from "react-helmet";

//The traditional React "App".
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Clock</title>
          <meta name="keywords" content="Clock, Grandfather Clock, Escapement, Animated"/>
          <meta name="description" content="The Internals of a Grandfather Clock"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <Clock />
      </div>
    )
  }
}
