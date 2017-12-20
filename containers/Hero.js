import { connect } from 'react-redux'
import Hero from '../components/Hero'

const mapStateToProps = ({ title }) => ({ title })

export default connect(mapStateToProps)(Hero)
