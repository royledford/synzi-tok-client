import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs'

import SynziLogo from './SynziLogo'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

const defaultLogoColor = '#8099cf'
stories
  .add(
    'Synzi Logo',
    withInfo(`
      This logo is a responsive .svg. It will expand to fit the container it
      is placed in.

    `)(() => {
      const label = 'Color'
      const defaultValue = '#8099cf'

      const value = text(label, defaultValue)

      return (
        <div style={{ width: '200px' }}>
          <SynziLogo color={value} />
        </div>
      )
    })
  )