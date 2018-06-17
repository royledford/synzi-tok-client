import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import VideoScreen from '../../Organisms/VideoScreen/VideoScreen'
import VideoControls from '../../Molecules/VideoControls/VideoControls'
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react'

import HeaderContainer from '../../Organisms/Header/HeaderContainer'
import SearchBar from '../../Molecules/SearchBar/SearchBar'
import GroupListContianer from '../../Organisms/GroupList/GroupListContainer'
import FavoriteListContainer from '../../Organisms/FavoriteList/FavoriteListContainer'
import OutgoingNotice from '../../Molecules/OutgoingNotice/OutgoingNotice'
import IncomingNotice from '../../Molecules/IncomingNotice/IncomingNotice'
import io from 'socket.io-client'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startingCall: false,
      targetCaller: '',
      incomingCall: false,
      callMessage: 'Calling',
      personCalled: '',
      callerName: '',
      startVideo: false,
    }

    this.subscriberProperties = {
      width: 1024,
      height: 768,
    };

    this.socket = io(process.env.REACT_APP_SOCKET_URL)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.cancelCall = this.cancelCall.bind(this)
    this.handleIgnoreCall = this.handleIgnoreCall.bind(this)
    this.handleAnswerCall = this.handleAnswerCall.bind(this)
    this.handleHangup = this.handleHangup.bind(this)
  }

  componentDidMount() {
    this.socket.on('INCOMING-CALL', name => {
      this.incomingCall(name)
    })
    this.socket.on('CALL-CANCELED', name => {
      this.setState({ incomingCall: false })
    })
    this.socket.on('CALL-IGNORED', name => {
      this.setState({ startingCall: false })
    })
    this.socket.on('CALL-ACCEPTED', name => {
      this.setState({ startVideo: true })
      console.log('call accepted')
    })
    this.socket.on('CALL-COMPLETE', name => {
      this.setState({
        startVideo: false,
        incomingCall: false,
        startingCall: false,
      })
      console.log('someone hungup')
    })
  }

  incomingCall(data) {
    console.log('incoming call:', data)
    if (this.state.startingCall) {
      console.log('ignoring call from: ', data)
      return
    } else {
      // we are recieving a call
      this.setState({ incomingCall: true, callerName: data })
    }
    // this.setState({ incomingCall: true })
    // this.setState({messages: [...this.state.messages, data]});
  }

  cancelCall() {
    this.socket.emit('CANCEL-CALL', this.state.personCalled)
    this.setState({ startingCall: false })
  }

  handleIgnoreCall() {
    this.socket.emit('IGNORE-CALL', this.state.callerName)
    this.setState({ incomingCall: false })
  }

  handleAnswerCall() {
    this.socket.emit('ANSWER-CALL', this.state.callerName)
    this.setState({ answerCall: true })
  }

  handleHangup() {
    this.socket.emit('HANGUP', this.state.callerName)

    this.setState({
      startVideo: false,
      incomingCall: false,
      startingCall: false,
    })
  }

  handleFavoriteClick(name) {
    this.socket.emit('TICKLE', name)
    this.setState({ startingCall: true, personCalled: name })
  }

  render() {
    const {
      callMessage,
      startingCall,
      personCalled,
      incomingCall,
      callerName,
      startVideo,
    } = this.state

    if (startVideo)
      return (
        <React.Fragment>
          {/* <VideoScreen /> */}
          <VideoControls show={true} onHangupClicked={this.handleHangup} />
          <OTSession
            apiKey="46139472"
            sessionId="2_MX40NjEzOTQ3Mn5-MTUyOTI1MTQxNjExMH40cUxJWTFObzI1SlBHUjlGYXdiZHh5amh-fg"
            token="T1==cGFydG5lcl9pZD00NjEzOTQ3MiZzaWc9MTczOTYwMzE4NGQ2MGQ1ZjM2MzQ5MzBiYWRkMDkyZTViNzY1ODQwYTpzZXNzaW9uX2lkPTJfTVg0ME5qRXpPVFEzTW41LU1UVXlPVEkxTVRReE5qRXhNSDQwY1V4SldURk9iekkxU2xCSFVqbEdZWGRpWkhoNWFtaC1mZyZjcmVhdGVfdGltZT0xNTI5MjUxNDQzJm5vbmNlPTAuODQwOTgxNTAyNTU5OTAxNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTMxODQzNDQyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9">
            <OTPublisher />
            <OTStreams>
              <OTSubscriber properties={this.subscriberProperties}/>
            </OTStreams>
          </OTSession>
        </React.Fragment>
      )

    return (
      <div className="App">
        <HeaderContainer />
        <SearchBar />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'relative',
            top: '90px',
          }}>
          <FavoriteListContainer onFavoriteClick={this.handleFavoriteClick} />
          <GroupListContianer />
        </div>
        <OutgoingNotice
          name={personCalled}
          show={startingCall}
          onCancelCall={this.cancelCall}
        />
        <IncomingNotice
          name={callerName}
          show={incomingCall}
          onIgnore={this.handleIgnoreCall}
          onAnswer={this.handleAnswerCall}
        />
      </div>
    )
  }
}
