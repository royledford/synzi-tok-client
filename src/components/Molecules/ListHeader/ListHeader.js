import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListHeader.css'
import Icons from '../../Atoms/Icons/Icons'

export default class ListHeader extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  }

  render() {
    const { label } = this.props

    const styles = {
      ListHeader: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '35px',
        width: '100%',
        padding: 6,
        backgroundColor: '#eee',
      },
      label: {
        padding: 0,
        marginTop: 6,
        fontSize: 14,
        fontWeight: 700,
        margin: '0 auto',
      },
    }

    return (
      <div style={styles.ListHeader}>
        <Icons name="arrowDown" />
        <span style={styles.label}>{label}</span>
      </div>
    )
  }
}
