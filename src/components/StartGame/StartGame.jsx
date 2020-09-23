import React from "react"
import "./index.css"

export class StartGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeValue: "0",
      gameStatus: "false",
    }
    this.inputValue = this.inputValue.bind(this)
    this.generateField = this.generateField.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
  }

  inputValue(e) {
    this.setState({ sizeValue: e.target.value })
  }

  generateField() {
    if (this.state.sizeValue < 3 || this.state.sizeValue > 10) {
      alert("Введите число от 3 до 10")
    } else if (this.state.sizeValue >= 3 && this.state.sizeValue <= 10) {
      this.props.callback(this.state.sizeValue)
    } else {
      alert("Ошибка")
    }
  }

  enterFunction(event){
    if(event.keyCode === 13) {
      this.generateField()
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.enterFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.enterFunction, false);
  }

  render() {
    return (
      <div className="inputHolder" status={this.state.gameStatus}>
        <input
          onChange={this.inputValue}
          placeholder="Введите число от 3 до 10"
        />
        <button onClick={this.generateField}>Начать игру</button>
      </div>
    )
  }
}
