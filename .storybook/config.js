import { configure } from '@storybook/react'
import '../src/styles/normalize.css'
import '../src/styles/reset.css'
import '../src/styles/vars.css'
import '../src/styles/base.css'

// function loadStories() {
//   require('../src/stories');
// }

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
