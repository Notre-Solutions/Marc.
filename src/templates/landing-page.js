import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Products from '../components/Stripe/Products';
import HeroLanding from '../components/HeroLanding';
import SmallCard from '../components/Cards/smallCard';
import { database } from 'firebase';
export default ({ data }) => {
  var features = 2;
  const heroImage =
    data.markdownRemark.frontmatter.heroImage.childImageSharp.fluid;
  const heroSymbol =
    data.markdownRemark.frontmatter.heroSymbol.childImageSharp.fluid;
  const colours = ['red', 'green', 'blue'];
  return (
    <Layout>
      <div className="landing-hero">
        <HeroLanding heroImage={heroImage} heroSymbol={heroSymbol} />
      </div>
      <div className="landing-small-card-section">
        <div className="landing-small-cards-container">
          <div className="landing-small-cards wrapper">
            <div />
            {data.allStripeSku.edges.map((edge) => {
              features -= 1;
              if (features >= 0) {
                return (
                  <SmallCard
                    skuid={edge.node.id}
                    price={edge.node.price}
                    description={'NEED TO ADD DESCRIPTION'}
                    image={
                      edge.node.localFiles[0].childImageSharp.fluid
                    }
                    prodid={edge.node.product.id}
                    productName={edge.node.product.name}
                    colours={colours}
                    route={'/' + edge.node.product.id}
                  />
                );
              } else {
                return null;
              }
            })}
            <div />
          </div>
        </div>
      </div>
      <p>
        The Landing Page is open to everyone, even though the user
        isn't signed in.
      </p>
      <Products></Products>
    </Layout>
  );
};

export const query = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        heroImage {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroSymbol {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          currency
          price
          product {
            id
            metadata {
              Category
            }
            name
          }
          localFiles {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
