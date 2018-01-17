// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'

type Props = {
  title: String,
  desc: String,
  url: String
}

const App = (props: Props) => {
  return <Hero title={props.title} desc={props.desc} url={props.url} />
}

const mapStateToProps = ({ title, desc, url }) => ({ title, desc, url })

export default connect(mapStateToProps)(App)
