import React from 'react'
import './index.css'


export class ResetButton extends React.Component {
  constructor(props) {
    super(props)
    this.resetField = this.resetField.bind(this)
    this.escFunction = this.escFunction.bind(this)
  }

  resetField() {
    this.props.callback(0)
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.resetField()
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div className='reset' onClick={this.resetField} onKeyDown={this.initializeEscClosing} >
        X
      </div>
    )
  }
}