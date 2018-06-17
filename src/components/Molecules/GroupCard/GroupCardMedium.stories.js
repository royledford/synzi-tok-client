import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import GroupCardMedium from './GroupCardMedium'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'GroupCardMedium',
  withInfo()(() => {
    const textLabel = 'Group Name'
    const textDefaultValue = 'Radioliogy'
    const textValue = text(textLabel, textDefaultValue)

    const numLabel = 'Available'
    const numDefaultValue = 3
    const numValue = number(numLabel, numDefaultValue)

    return (
      <div style={{ width: 400 }}>
        <GroupCardMedium name={textValue} numAvailable={numValue} />
      </div>
    )
  })
)
