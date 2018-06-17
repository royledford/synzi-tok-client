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

import VideoButton from './VideoButton'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'
stories.addDecorator(centered).add(
  'VideoButton',
  withInfo()(() => {
    const typeLabel = 'Type'
    const typeOptions = {
      answer: 'Answer',
      hangup: 'Hangup',
    }
    const typeDefaultValue = 'answer'
    const typeValue = select(typeLabel, typeOptions, typeDefaultValue)

    return <VideoButton name={typeValue} />
  })
)
