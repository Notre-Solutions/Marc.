import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export function GetImages() {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: {
          original: { src: { regex: "/static/landing/" } }
        }
      ) {
        edges {
          node {
            id
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return data;
}

const FeatureBanner = () => {
  const edges = GetImages().allImageSharp.edges;
  return (
    <div className="feature-banner">
      <div className="feature-banner-content wrapper">
        <div className="feature-banner-content-images">
          {edges.map((edge) => {
            return (
              <div className='feature-banner-content-images-items'>
              <Img
                className="feature-banner-content-images-img"
                fluid={edge.node.fluid}
              />
              <p>Find out more</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default FeatureBanner