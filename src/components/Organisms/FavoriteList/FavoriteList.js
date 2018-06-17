import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FavoriteList.css'
import UserCardMedium from '../../Molecules/UserCardMedium/UserCardMedium'
import ListHeader from '../../Molecules/ListHeader/ListHeader'

export default class FavoriteList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  static propTypes = {
    favorites: PropTypes.array.isRequired,
    onUserClick: PropTypes.func.isRequired,
  }

  handleClick(name) {
    this.props.onUserClick(name)
  }

  render() {
    const { favorites, onUserClick } = this.props

    let favs = null
    if (favorites) {
      favs = favorites.map(fav => (
        <UserCardMedium
          key={fav.id}
          userName={fav.userName}
          profilePic={fav.profilePic}
          status={fav.status}
          onClick={() => {
            this.handleClick(fav.userName)
          }}
        />
      ))
    }

    const styles = {
      wrapper: {
        margin: '0 10px 0 10px',
        width: '100%',
      },
    }

    return (
      <div style={styles.wrapper}>
        <ListHeader label="Favorites" />
        {favs}
      </div>
    )
  }
}
