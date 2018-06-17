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

import FavoriteListContainer from './FavoriteListContainer'

const stories = storiesOf('Organisms', module)
stories.addDecorator(withKnobs)

stories.add(
  'FavoriteList',
  withInfo()(() => {
    return (
      <div style={{ width: 300 }}>
        <FavoriteListContainer />
      </div>
    )
  })
)
