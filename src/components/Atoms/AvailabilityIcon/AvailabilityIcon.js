import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AvailabilityIcon.css'

export default class AvailabilityIcon extends Component {
  static propTypes = {
    icon: PropTypes.oneOf(['available', 'unavailable', 'offline', 'busy'])
      .isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    showBorder: PropTypes.bool,
  }
  static defaultProps = {
    size: 'medium',
    showBorder: false,
  }

  render() {
    const { icon, size, showBorder } = this.props

    const sizePx = {
      small: 24,
      medium: 32,
      large: 64,
    }

    const images = {
      available: require('../../../images/Status_Available@2x.png'),
      unavailable: require('../../../images/Status_Unavailable@2x.png'),
      offline: require('../../../images/Status_Offline@2x.png'),
      busy: require('../../../images/Status_Busy@2x.png'),
    }

    const styles = {
      wrapper: {
        width: sizePx[size],
        height: sizePx[size],
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: '1px',
      },
      image: {
        width: sizePx[size] * 0.8,
        height: sizePx[size] * 0.8,
      },
    }

    showBorder
      ? (styles.wrapper.borderStyle = 'solid')
      : (styles.wrapper.borderStyle = 'none')

    return (
      <div aria-label={'a'} className="AvailabilityIcon" style={styles.wrapper}>
        <img
          alt="Available status"
          className="AvailabilityIcon-img"
          src={images[icon]}
          style={styles.image}
        />
      </div>
    )
  }
}
