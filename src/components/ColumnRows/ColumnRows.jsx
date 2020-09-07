import React from "react"
import { DivRow } from "../DivRow/DivRow"

export class ColumnRows extends React.Component {
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
    return (
      <div>
        {this.props.list.map((number) => (
          <DivRow
            rowNumber={number}
            key={number}
            list={this.props.list}
            counterFunc={this.setCounterOfClicks}
            counter={this.state.counter}
          />
        ))}
      </div>
    );
  }
}
