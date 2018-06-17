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

import Header from './Header'

const stories = storiesOf('Organisms', module)
stories.addDecorator(withKnobs)

stories.add(
  'Header',
  withInfo()(() => {

    const textLabel = 'User Name'
    const textDefaultValue = 'Korben Dallas'
    const textValue = text(textLabel, textDefaultValue)


    const statusLabel = 'Status'
    const statusOptions = {
      available: 'Available',
      unavailable: 'Unavailable',
    }
    const statusDefaultValue = 'available'
    const statusValue = select(statusLabel, statusOptions, statusDefaultValue)

    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''


    return <Header userName={textValue} profilePic={picSource} availableStatus={statusValue} />
  })
)
