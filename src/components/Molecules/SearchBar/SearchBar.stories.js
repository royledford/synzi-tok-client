import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import {
  withKnobs,
} from '@storybook/addon-knobs'

import SearchBar from './SearchBar'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'

stories.addDecorator(centered).add(
  'SearchBar',
  withInfo()(() => {

    return <SearchBar  />
  })
)
