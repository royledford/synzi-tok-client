import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoButton.css'
import Icons from '../Icons/Icons'

export default class VideoButton extends Component {
  static propTypes = {
    name: PropTypes.oneOf(['answer', 'hangup']).isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { name, onClick } = this.props

    const sizePx = {
      small: 32,
      large: 64,
    }

    const iconNames = {
      answer: 'phoneAnswer',
      hangup: 'phoneHangup',
    }

    let iconColor = ''
    let iconSize = ''
    switch (name) {
      case 'answer':
        iconColor = 'green'
        iconSize = 'large'
        break
      case 'hangup':
        iconColor = 'red'
        iconSize = 'small'
        break

      default:
        iconColor = 'green'
        iconSize = 'large'
    }
    const styles = {
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: sizePx[iconSize],
        height: sizePx[iconSize],
        borderRadius: '100%',
        backgroundColor: iconColor,
      },
    }

    return (
      <div
        aria-label={'a'}
        className="VideoButton"
        style={styles.wrapper}
        onClick={onClick}>
        <Icons name={iconNames[name]} />
      </div>
    )
  }
}
