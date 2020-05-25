import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import FeatureBanner from './FeatureBanner'
export function GetImages() {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: {
          original: { src: { regex: "/static/minimalism/" } }
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

const MinimalismBanner = () => {
  const edges = GetImages().allImageSharp.edges;
  return (
    <div className="minimalism-banner">
      <div className="minimalism-banner-content wrapper">
        <h1>Minimalism done right.</h1>
        
        <h2>Here's a tase of what's inspiring us</h2>
        <div className="minimalism-banner-content-images">
          {edges.map((edge) => {
            return (
              <Img
                className="minimalism-banner-content-images-img"
                fluid={edge.node.fluid}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};


export {MinimalismBanner, FeatureBanner}