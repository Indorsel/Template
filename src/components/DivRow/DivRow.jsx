import React from "react"
import { Square } from "../Square/Square"
import "./index.css"

export class DivRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="row">
        {this.props.list.map((number) => (
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
