import React from 'react'
import './index.css'


export class Square extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {}
  }
  
  render() {
  	return(
    	<span className='square'></span>
    )
  }
}