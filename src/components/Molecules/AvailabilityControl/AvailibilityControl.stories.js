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

import AvailabilityControl from './AvailabilityControl'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'

stories.addDecorator(centered).add(
  'AvailabilityControl',
  withInfo()(() => {
    const statusLabel = 'Status'
    const statusOptions = {
      available: 'Available',
      unavailable: 'Unavailable',
    }
    const statusDefaultValue = 'available'
    const statusValue = select(statusLabel, statusOptions, statusDefaultValue)

    const borderLabel = 'Show Border'
    const borderDefaultValue = true
    const borderValue = boolean(borderLabel, borderDefaultValue)

    return <AvailabilityControl status={statusValue} showBorder={borderValue} />
  })
)
