import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, select } from '@storybook/addon-knobs'

import Icons from './Icons'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'Icons',
  withInfo()(() => {
    const styles = {
      iconMargin: {
        margin: '30px 30px 4px 30px',
      },
      text: {
        margin: 0,
        fontWeight: 300,
        fontSize: 12,
      },
      wrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      flexBox: {
        display: 'flex',
        width: '100%',
      },
    }

    return (
      <div style={styles.flexBox}>
        <div style={styles.wrap}>
          <Icons name="search" style={styles.iconMargin} />
          <span style={styles.text}>search</span>
        </div>
        <div style={styles.wrap}>
          <Icons name="arrowRight" style={styles.iconMargin} />
          <span style={styles.text}>arrowRight</span>
        </div>
        <div style={styles.wrap}>
          <Icons name="arrowDown" style={styles.iconMargin} />
          <span style={styles.text}>arrowDown</span>
        </div>
      </div>
    )
  })
)
