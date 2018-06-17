import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../Atoms/Avatar/Avatar'

export default class LoginControl extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    profilePic: PropTypes.string,
    styleWrapper: PropTypes.object,
  }
  static defaultProps = {
    profilePic: '',
    styleWrapper: {},
  }

  render() {
    const { userName, profilePic, styleWrapper } = this.props

    const styles={
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 160,
      },
      text: {
        margin: 0,
        marginRight: '4px',
        fontSize: '.8rem'
      }
    }

    const outerStyle = Object.assign({}, styles.wrapper, styleWrapper)

    return (
      <div style={outerStyle}>
        <p style={styles.text}>{userName}</p>
        <Avatar name={userName} size="medium" src={profilePic} />
      </div>
    )
  }
}
