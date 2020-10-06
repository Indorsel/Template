import React from "react"
import "./index.css"

export class StartGame extends React.Component {
  constructor(props) {
    super(props)
    this.inputValue = this.inputValue.bind(this)
    this.generateField = this.generateField.bind(this)
    this.enterFunction = this.enterFunction.bind(this)
  }

  inputValue(e) {
    this.props.setSizeValue(e.target.value)
  }

  generateField() {
    const { sizeValue } = this.props
    if (sizeValue < 3 || sizeValue > 10) {
      alert("Введите число от 3 до 10")
    } else if (sizeValue >= 3 && sizeValue <= 10) {
      this.props.callback(sizeValue)
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
      <div className="inputHolder">
        <input
          onChange={this.inputValue}
          placeholder="Введите число от 3 до 10"
        />
        <button onClick={this.generateField}>Начать игру</button>
      </div>
    )
  }
}
