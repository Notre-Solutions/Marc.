import React, { Component } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
export default class index extends Component {
  render() {
    return (
      <div className="hero">
        <BackgroundImage
          Tag="section"
          className="hero-background"
          fluid={this.props.heroImage}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content wrapper">
            <div className='hero-content-items'>
              <Img
                className="hero-symbol"
                fluid={this.props.heroSymbol}
              />
              <h1>Where technology meets luxury design</h1>
            </div>
          </div>
        </BackgroundImage>
      </div>
    );
  }
}
