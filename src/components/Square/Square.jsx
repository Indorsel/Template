import React from "react"
import "./index.css"
import { ReactComponent as Close } from "../../icons/close.svg"
import { ReactComponent as Circle } from "../../icons/circle.svg"

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRender: false,
    }
    this.getElementOnSquare = this.getElementOnSquare.bind(this)
  }

  getElementOnSquare() {
    if (!this.state.isRender) {
      let num = this.props.counter + 1
      this.props.counterFunc(num);
      if (num % 2 !== 0) {
        this.setState({ isOdd: true })
        this.setState({ isRender: true })
      } else {
        this.setState({ isOdd: false })
        this.setState({ isRender: true })
      }
    }
  }

  render() {
    return (
      <span className="square" onClick={this.getElementOnSquare}>
        {this.state.isRender && (this.state.isOdd ? <Close /> : <Circle />)}
      </span>
    )
  }
}
