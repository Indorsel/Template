import React from 'react'
import { DivRow } from '../DivRow/DivRow'


export class ColumnRows extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
        {
          this.props.list.map(number => (
            <DivRow rowNumber={number} key={number} list={this.props.list} />
          ))
        }
      </div>
    )
  }
}