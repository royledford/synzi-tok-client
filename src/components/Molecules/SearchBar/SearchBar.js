import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'
import Icons from '../../Atoms/Icons/Icons'

export default class SearchBar extends Component {
  static propTypes = {
    someProp: PropTypes.string,
  }
  static defaultProps = {
    someProp: 'someValue',
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    const styles = {
      searchBar: {
        position: 'fixed',
        top: '45px',
        left: 0,
        height: '45px',
        width: '100%',
        padding: 6,
        backgroundColor: 'rgba(235, 235, 235, 0.5)',
      },
    }

    return (
      <div style={styles.searchBar}>
        <Icons name="search" />
      </div>
    )
  }
}
