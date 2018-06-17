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

import Avatar from './Avatar'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'
stories.addDecorator(centered).add(
  'Avatar',
  withInfo()(() => {
    const sizeLabel = 'Size'
    const options = {
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
    }
    const defaultValue = 'medium'
    const value = select(sizeLabel, options, defaultValue)

    const textLabel = 'Name'
    const textDefaultValue = 'Korben Dallas'
    const textValue = text(textLabel, textDefaultValue)

    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''

    return <Avatar name={textValue} size={value} src={picSource} />
  })
)
