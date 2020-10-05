import { connect } from 'react-redux'
import { StartGame } from '../components/StartGame/StartGame'
import { setSizeValue } from "../actions/SetSizeValueAction"

const mapStateToProps = state => {
  debugger
  return {
    sizeValue: state.startGame.sizeValue,
  }
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    setSizeValue: sizeValue => dispatch(setSizeValue(sizeValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame)
