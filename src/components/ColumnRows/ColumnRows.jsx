import React from "react"
import DivRow from "../DivRow/DivRow"

export class ColumnRows extends React.Component {
  constructor(props) {
    super(props)
    this.setCounterOfClicks = this.setCounterOfClicks.bind(this)
  }

  setCounterOfClicks(counter) {
    this.props.setCounter(counter)
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
          />
        ))}
      </div>
    );
  }
}
