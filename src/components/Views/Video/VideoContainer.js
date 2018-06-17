import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VideoScreen from '../../Organisms/VideoScreen/VideoScreen'
import VideoControls from '../../Molecules/VideoControls/VideoControls'
import { Redirect } from 'react-router-dom'
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'
import './VideoContainer.css'

export default class VideoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigateToHome: false,
    }
    this.handleHangup = this.handleHangup.bind(this)
  }

  handleHangup() {
    this.setState({ navigateToHome: true })
  }

  render() {
    const { navigateToHome } = this.state
    if (navigateToHome) return <Redirect to="/" />

    return (
      <React.Fragment>
        {/* <VideoScreen /> */}
        <VideoControls show={true} onHangupClicked={this.handleHangup} />
        {/* <OTSession
          apiKey="46139472"
          sessionId="1_MX40NjEzOTQ3Mn5-MTUyOTE3NTY5MDQ3OH5CZ0Z3VHhKclhISlhzNXFkMlZlbkgxcUx-fg"
          token="T1==cGFydG5lcl9pZD00NjEzOTQ3MiZzaWc9NGRkNDg2MDM0ZmE1MzA5M2M5YjQ0YmJlY2ZjNmYzZmJmMmI4ZDQ0NDpzZXNzaW9uX2lkPTFfTVg0ME5qRXpPVFEzTW41LU1UVXlPVEUzTlRZNU1EUTNPSDVDWjBaM1ZIaEtjbGhJU2xoek5YRmtNbFpsYmtneGNVeC1mZyZjcmVhdGVfdGltZT0xNTI5MTc1NzMxJm5vbmNlPTAuMjUyMjA3MDc1MTQwMzI2NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTI5MTc5MzMwJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9">
          <OTPublisher />
          <OTStreams>
            <OTSubscriber />
          </OTStreams>
        </OTSession> */}
      </React.Fragment>
    )
  }
}
