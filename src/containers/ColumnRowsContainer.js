import { connect } from 'react-redux'
import { ColumnRows } from '../components/ColumnRows/ColumnRows'
import { setCounter } from '../actions/SetCounterAction'

const mapStateToProps = state => ({
    counter: state.columnRows.counter,
    list: state.layout.list,
})

const mapDispatchToProps = dispatch => ({
  setCounter: counter => dispatch(setCounter(counter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColumnRows) 