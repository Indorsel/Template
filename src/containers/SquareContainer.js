import { connect } from 'react-redux'
import { Square } from '../components/Square/Square'
import { setIsRender } from '../actions/SetIsRenderAction'

const mapStateToProps = state => ({
    isRender: state.square.isRender,
    counter: state.columnRows.counter,
})

const mapDispatchToProps = dispatch => ({
  setIsRender: isRender => dispatch(setIsRender(isRender)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)