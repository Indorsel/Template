import React from 'react'
import './index.css'


export class ResetButton extends React.Component {
  constructor(props) {
    super(props)
    this.resetField = this.resetField.bind(this)
  }

  resetField() {
    this.props.callback(0)
  }

  render() {
    return (
      <div className='reset' onClick={this.resetField} >
        X
      </div>
    )
  }
}