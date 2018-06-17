import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoControls.css'
import VideoButton from '../../Atoms/VideoButton/VideoButton'

export default class VideoControls extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHangupClicked: PropTypes.func.isRequired,
  }

  render() {
    const { show, onHangupClicked } = this.props
    const visible = show ? 'videocontrols-show' : 'videocontrols-hide'

    return (
      <div className={`videocontrols ${visible}`}>
        <VideoButton name={'hangup'} onClick={onHangupClicked} />
      </div>
    )
  }
}
