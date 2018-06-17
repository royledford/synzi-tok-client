import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CallMessage from '../../Atoms/CallMessage/CallMessage'
import './OutgoingNotice.css'

export default class OutgoingNotice extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onCancelCall: PropTypes.func.isRequired,
    show: false,
  }

  render() {
    const { name, show, onCancelCall } = this.props

    if (!show) return null
    return (
      <div className="outgoingnotice">
        <button className="outgoingnotice-button" onClick={onCancelCall}>
          CANCEL
        </button>
        <CallMessage message={`Calling...${name}`} />
      </div>
    )
  }
}
