import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import VideoControls from './VideoControls'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.add(
  'VideoControls',
  withInfo()(() => {
    const showLabel = 'Show'
    const showDefaultValue = true
    const showValue = boolean(showLabel, showDefaultValue)

    return <VideoControls show={showValue} />
  })
)
