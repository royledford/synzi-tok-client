import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GroupCardMedium.css'
import Avatar from '../../Atoms/Avatar/Avatar'

export default class GroupCardMedium extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    numAvailable: PropTypes.number.isRequired,
  }

  render() {
    const { name, status, numAvailable } = this.props

    const availableCountText = numAvailable + ' Free'

    const styles = {
      GroupCardMedium: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        height: '35px',
        width: '100%',
        padding: 6,
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
      },
      label: {
        margin: 0,
        padding: 0,
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 700,
      },
      number: {
        fontSize: 12,
        fontWeight: 500,
        backgroundColor: '#eee',
        borderRadius: '2px',
        padding: '0 6px',
      },
    }

    return (
      <div style={styles.GroupCardMedium} className="groupcardmedium">
        <div style={styles.title}>
          <Avatar name={name} size="small" style={styles.avatar} />
          <span style={styles.label}>{name}</span>
        </div>
        <div style={styles.number}>
          <span>{availableCountText}</span>
        </div>
      </div>
    )
  }
}
