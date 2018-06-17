import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import UserCardMedium from './UserCardMedium'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'UserCardMedium',
  withInfo()(() => {
    const textLabel = 'User Name'
    const textDefaultValue = 'Dr. Strange'
    const textValue = text(textLabel, textDefaultValue)

    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)
    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg'
      : ''

    return (
      <div style={{ width: 400 }}>
        <UserCardMedium userName={textValue} profilePic={picSource} />
      </div>
    )
  })
)
