import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text } from '@storybook/addon-knobs'

import ListHeader from './ListHeader'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'ListHeader',
  withInfo()(() => {
    const textLabel = 'Label'
    const textDefaultValue = 'The Best List'
    const textValue = text(textLabel, textDefaultValue)

    return (
      <div style={{ width: 400 }}>
        <ListHeader label={textValue} />
      </div>
    )
  })
)
