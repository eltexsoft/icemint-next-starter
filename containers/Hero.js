import { connect } from 'react-redux'
import Hero from '../components/Hero'

const mapStateToProps = ({ title, desc, url }) => ({ title, desc, url })

export default connect(mapStateToProps)(Hero)
