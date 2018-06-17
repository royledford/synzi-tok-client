import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GroupList.css'
import GroupCardMedium from '../../Molecules/GroupCard/GroupCardMedium'
import ListHeader from '../../Molecules/ListHeader/ListHeader'

export default class GroupList extends Component {
  static propTypes = {
    groups: PropTypes.array.isRequired,
  }

  render() {
    const { groups } = this.props

    let groupList = null
    if (groups) {
      groupList = groups.map(group => (
        <GroupCardMedium
          key={group.id}
          name={group.groupName}
          numAvailable={group.numAvailable}
          status={group.status}
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
        <ListHeader label="Groups" />
        {groupList}
      </div>
    )
  }
}
