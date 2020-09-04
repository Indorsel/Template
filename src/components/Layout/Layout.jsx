import React from "react"
import createArray from "../../utilites/createArray"
import { ResetButton } from "../ResetButton/ResetButton"
import { ColumnRows } from "../ColumnRows/ColumnRows"
import { StartGame } from "../StartGame/StartGame"
import "./index.css"

export class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emptySquare: "Click for x-mark",
      list: [],
    }
    this.gCellsSize = this.gCellsSize.bind(this)
  }

  gCellsSize(num) {
    const list = createArray(num)
    this.setState({ list })
  }

  render() {
    return (
      <div className="main">
        <h1>Игра "Крестики-Нолики"</h1>
        {this.state.list.length ? 
        ( <div className="wrapper">
            <ResetButton callback={this.gCellsSize} />
            <ColumnRows list={this.state.list} />
          </div>
        ) : <StartGame callback={this.gCellsSize} />
        }
      </div>
    )
  }
}
