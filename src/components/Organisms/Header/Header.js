import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import AvailabilityControl from '../../Molecules/AvailabilityControl/AvailabilityControl'
import LoginControl from '../../Molecules/LoginControl/LoginControl'
import SynziLogo from '../../Atoms/SynziLogo/SynziLogo'

export default class Header extends Component {
  static propTypes = {
    availableStatus: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userProfilePic: PropTypes.string,
  }
  static defaultProps = {
    userProfilePic: '',
  }

  render() {
    const { availableStatus, userName, userProfilePic } = this.props

    const styles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '45px',
      },
      logo: {
        marginTop: '5px',
        heigth: '25px',
        width: '100px',
      },
      pushRight: {
        paddingLeft: '10px'
      },
      pushLeft: {
        paddingRight: '10px'
      }
    }

    return (
      <header style={styles.wrapper}>
        <AvailabilityControl status={availableStatus} showBorder={false} styleWrapper={styles.pushRight}/>
        <div style={styles.logo}>
          <SynziLogo color="#8099cf" />
        </div>
        <LoginControl userName={userName} profilePic={userProfilePic} styleWrapper={styles.pushLeft}/>
      </header>
    )
  }
}
