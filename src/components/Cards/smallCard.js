import React, { Component } from 'react';
import Img from 'gatsby-image';
import {AddToCartButton,LearnMoreButton} from '../Buttons'

export default class smallCard extends Component {
  render() {
    if(this.props.skuid){
      return (
        <div className="wrapper card-small">
          <Img className='card-small-img' fluid={this.props.image} />
          <h1 className="card-small-title">{this.props.productName}</h1>
          <h1 className='card-small-price'>£{this.props.price}</h1>
          <AddToCartButton skuid={this.props.skuid} price={this.props.price} description={this.props.description}
        image={this.props.image} prodid={this.props.prodid} productName={this.props.productName} isDark={false}/>
          <LearnMoreButton route={this.props.route} isDark={false}/>
        </div>
      );
    }else{
      return(<></>)
    }
    
  }
}
