import React, { Component } from 'react'
import GroupList from './GroupList'

export default class GroupListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { groups: [] }
  }

  componentDidMount() {
    this.setState({
      groups: [
        {
          id: 1,
          groupName: 'Radiology',
          numAvailable: 3,
          status: 'available',
        },
        {
          id: 2,
          groupName: 'Burn Unit',
          numAvailable: 2,
          status: 'available',
        },
      ],
    })
  }

  render() {
    const { groups } = this.state

    return <GroupList groups={groups} />
  }
}
