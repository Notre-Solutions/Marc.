import React, { Fragment } from 'react';
import Layout from '../components/layout';
import Products from '../components/Stripe/Products';
function LandingPage() {
  return (
    <Fragment>
      <h1>Landing</h1>
      <p>
        The Landing Page is open to everyone, even though the user
        isn't signed in.
      </p>
      <Products></Products>
    </Fragment>
  );
}

function Landing() {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
}

export default Landing;
