// @flow

import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/configureStore'

import Hero from '../containers/Hero'

const Index = () => <Hero />

export default withRedux(initStore)(Index)
