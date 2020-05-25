import React, { Component } from 'react'
import CompareCards from '../components/Cards/compareCards'
export default class random extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
        <CompareCards type='Laptops'/>
      </div>
      </div>
    )
  }
}
