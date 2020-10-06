import { connect } from 'react-redux'
import { StartGame } from '../components/StartGame/StartGame'
import { setSizeValue } from "../actions/SetSizeValueAction"

const mapStateToProps = state => {
  return {
    sizeValue: state.startGame.sizeValue,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSizeValue: sizeValue => dispatch(setSizeValue(sizeValue)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame)
