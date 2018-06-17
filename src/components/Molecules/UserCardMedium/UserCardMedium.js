import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './UserCardMedium.css'
import Avatar from '../../Atoms/Avatar/Avatar'

export default class UserCardMedium extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    profilePic: PropTypes.string,
    status: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }

  render() {
    const { userName, profilePic } = this.props

    const styles = {
      UserCardMedium: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        height: '35px',
        width: '100%',
        padding: 6,
      },
      label: {
        margin: 0,
        padding: 0,
        fontSize: 12,
        fontWeight: 700,
      },
      avatar: {
        marginRight: 10,
      },
    }

    return (
      <div
        style={styles.UserCardMedium}
        className="usercardmedium"
        onClick={this.props.onClick}>
        <Avatar
          name={userName}
          size="small"
          src={profilePic}
          style={styles.avatar}
        />
        <span style={styles.label}>{userName}</span>
      </div>
    )
  }
}
