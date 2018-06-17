import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CallMessage.css'

export default class CallMessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  render() {
    return <h3 className="callmessage">{this.props.message}</h3>
  }
}
