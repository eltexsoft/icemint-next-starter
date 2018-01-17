// @flow

import * as React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../store/configureStore'

import App from '../containers/App'

const Index = () => <App />

export default withRedux(initStore)(Index)
