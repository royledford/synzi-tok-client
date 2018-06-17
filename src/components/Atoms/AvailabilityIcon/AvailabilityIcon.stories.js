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

import AvailabilityIcon from './AvailabilityIcon'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'
stories.addDecorator(centered).add(
  'AvailabilityIcon',
  withInfo()(() => {

    const sizeLabel = 'Size'
    const options = {
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
    }
    const defaultValue = 'large'
    const value = select(sizeLabel, options, defaultValue)

    const statusLabel = 'Status'
    const statusOptions = {
      available: 'Available',
      unavailable: 'Unavailable',
      offline: 'Offline',
      busy: 'Busy'
    }
    const statusDefaultValue = 'available'
    const statusValue = select(statusLabel, statusOptions, statusDefaultValue)

    return <AvailabilityIcon icon={statusValue} size={value}  />
  })
)
