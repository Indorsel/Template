import React from "react"
import createArray from "../../utilites/createArray"
import { ResetButton } from "../ResetButton/ResetButton"
import ColumnRows from "../../containers/ColumnRowsContainer"
import "./index.css"
import StartGame from "../../containers/StartGameContainer"
import PropTypes from 'prop-types'

export class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.gCellsSize = this.gCellsSize.bind(this)
  }

  gCellsSize(num) {
    const list = createArray(num)
    this.props.setList(list)
  }

  render() {
    const { list } = this.props
    return (
      <div className="main">
        <h1>Игра "Крестики-Нолики"</h1>
        { list.length ? 
        ( <div className="wrapper">
            <ResetButton callback={this.gCellsSize} />
            <ColumnRows />
          </div>
        ) : <StartGame callback={this.gCellsSize} />
        }
      </div>
    )
  }
}

Layout.propTypes = {
  list: PropTypes.array.isRequired,
}