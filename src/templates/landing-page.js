import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Products from '../components/Stripe/Products';
import HeroLanding from '../components/HeroLanding';
import { database } from 'firebase';
export default ({ data }) => {
  const heroImage =
    data.markdownRemark.frontmatter.heroImage.childImageSharp.fluid;
  const heroSymbol =
    data.markdownRemark.frontmatter.heroSymbol.childImageSharp.fluid;
  console.log(data);
  return (
    <Layout>
      <div className="landing-hero">
        <HeroLanding heroImage={heroImage} heroSymbol={heroSymbol} />
      </div>
      <h1>Landing</h1>
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
  }
`;
