import React, { Component } from 'react'
import Spin from './Spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center w-10'>
        <img src={Spin} alt="spinner" width={"50px"} />
      </div>
    )
  }
}

export default Spinner