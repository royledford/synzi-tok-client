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

import LoginControl from './LoginControl'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'

stories.addDecorator(centered).add(
  'LoginControl',
  withInfo()(() => {

    const textLabel = 'User Name'
    const textDefaultValue = 'Korben Dallas'
    const textValue = text(textLabel, textDefaultValue)


    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''


    return <LoginControl userName={textValue} profilePic={picSource} />
  })
)
