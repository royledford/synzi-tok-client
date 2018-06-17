import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs'

import VideoScreen from './VideoScreen'

const stories = storiesOf('Organisms', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'VideoScreen',
  withInfo()(() => {
    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const picSource = picValue
      ? 'https://tinyfac.es/data/VideoScreens/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''

    return <VideoScreen />
  })
)
