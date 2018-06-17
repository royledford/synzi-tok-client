import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CallMessage from '../../Atoms/CallMessage/CallMessage'
import './IncomingNotice.css'

export default class IncomingNotice extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    show: false,
    onIgnore: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
  }

  render() {
    const { name, show, onIgnore, onAnswer } = this.props

    if (!show) return null
    return (
      <div className="IncomingNotice">
        <button onClick={onAnswer} className="IncomingNotice-button">
          ANSWER
        </button>
        <button onClick={onIgnore} className="IncomingNotice-button-secondary">
          IGNORE
        </button>
        <CallMessage message={`Call from...${name}`} />
      </div>
    )
  }
}
