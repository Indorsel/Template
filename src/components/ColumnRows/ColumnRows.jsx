import React from "react"
import { connect } from "react-redux"
import DivRow from "../DivRow/DivRow"

class ColumnRows extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.setCounterOfClicks = this.setCounterOfClicks.bind(this)
  }

  setCounterOfClicks(counter) {
    this.setState({ counter })
  }

  render() {
    const { list } = this.props
    return (
      <div>
        { list.map((number) => (
          <DivRow
            rowNumber={number}
            key={number}
            counterFunc={this.setCounterOfClicks}
            counter={this.state.counter}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.layout.list,
})

export default connect(mapStateToProps)(ColumnRows)
