import React from "react"
import { connect } from "react-redux"
import { Square } from "../Square/Square"
import "./index.css"

class DivRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props
    return (
      <div className="row">
        { list.map((number) => (
          <Square
            rowNumber={number}
            key={number}
            counterFunc={this.props.counterFunc}
            counter={this.props.counter}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.layout.list,
})

export default connect(mapStateToProps)(DivRow)
