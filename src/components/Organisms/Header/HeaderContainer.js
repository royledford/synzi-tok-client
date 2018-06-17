import React, { Component } from 'react'
import Header from './Header'

export default class HeaderContainer extends Component {
  // static propTypes = {
  //     someProp: PropTypes.string,
  //  }
  //  static defaultProps = {
  //     someProp: 'someValue',
  //   }

  constructor(props) {
    super(props)
    this.state = {
      availableStatus: 'available',
      userName: 'Korben Dallas',
      userProfilePic:
        'https://tinyfac.es/data/avatars/B3CF5288-34B0-4A5E-9877-5965522529D6-200w.jpeg',
    }
  }

  render() {
    const { availableStatus, userName, userProfilePic } = this.state

    return (
      <Header
        availableStatus={availableStatus}
        userName={userName}
        userProfilePic={userProfilePic}
      />
    )
  }
}
