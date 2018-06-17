import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs } from '@storybook/addon-knobs'

import GroupListContainer from './GroupListContainer'

const stories = storiesOf('Organisms', module)
stories.addDecorator(withKnobs)

stories.add(
  'GroupList',
  withInfo()(() => {
    return (
      <div style={{ width: 300 }}>
        <GroupListContainer />
      </div>
    )
  })
)
