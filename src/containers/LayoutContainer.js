import { connect } from 'react-redux'
import { Layout } from '../components/Layout/Layout'
import { setList } from '../actions/SetListAction'


const mapStateToProps = state => {
  return {
    list: state.layout.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setList: list => dispatch(setList(list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)