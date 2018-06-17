import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoScreen.css'

export default class VideoScreen extends Component {
  static propTypes = {
    videoStream: PropTypes.string,
  }
  static defaultProps = {
    videoStream: '',
  }

  render() {
    return <video />
  }
}
