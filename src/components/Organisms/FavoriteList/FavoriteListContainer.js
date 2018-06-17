import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FavoriteList from './FavoriteList'

export default class FavoriteListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { favorites: [], navigateToCall: false }

    this.handleCallUser = this.handleCallUser.bind(this)
  }

  handleCallUser(name) {
    // this.setState({ navigateToCall: true })
    this.props.onFavoriteClick(name)
  }

  componentDidMount() {
    this.setState({
      favorites: [
        {
          id: 1,
          userName: 'Dr. Strange',
          profilePic: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
          status: 'available',
        },
        {
          id: 2,
          userName: 'Nurse Jacky',
          profilePic: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
          status: 'available',
        },
        {
          id: 3,
          userName: 'Dr. X',
          profilePic: 'https://randomuser.me/api/portraits/thumb/women/75.jpg',
          status: 'available',
        },
      ],
    })
  }

  render() {
    const { favorites, navigateToCall } = this.state

    if (navigateToCall) return <Redirect to="/call" />

    return (
      <FavoriteList favorites={favorites} onUserClick={this.handleCallUser} />
    )
  }
}
