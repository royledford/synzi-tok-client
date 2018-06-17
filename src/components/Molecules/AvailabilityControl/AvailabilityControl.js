import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AvailibilityIcon from '../../Atoms/AvailabilityIcon/AvailabilityIcon'

export default class AvailabilityControl extends Component {
  static propTypes = {
    status: PropTypes.oneOf(['available', 'unavailable']).isRequired,
    showBorder: PropTypes.bool,
    styleWrapper: PropTypes.object,
  }
  static defaultProps = {
    showBorder: false,
    styleWrapper: {},
  }

  render() {
    const { status, showBorder, styleWrapper } = this.props
    let statusText = status === 'available' ? 'Available' : 'Unavailable'

    const styles={
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: 160,
      },
      text: {
        margin: 0,
        marginLeft: '6px',
        fontSize: '.8rem'
      }
    }

    const outerStyle = Object.assign({}, styles.wrapper, styleWrapper)

    return (
      <div style={outerStyle}>
        <AvailibilityIcon size="medium" icon={status} showBorder={showBorder} />
        <p style={styles.text}>{statusText}</p>
      </div>
    )
  }
}
