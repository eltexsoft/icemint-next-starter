// @flow

import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/configureStore'

import Hero from '../containers/Hero'
import Container from '../components/Container'

const Index = () => (
  <div>
    <Hero />
    <Container>
      <p>
        Hello Icemint team. This is the starter kit bootstraped with Next.js for
        server-rendered or statically-exported React apps, Redux for state
        management, Flow for static types, PostCSS for styles, ESLint,
        Stylelint, Prettier for linting and format your code with
        config-standard.
      </p>
    </Container>
  </div>
)

export default withRedux(initStore)(Index)
