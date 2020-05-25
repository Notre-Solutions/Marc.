import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { AddToCartButton, LearnMoreButton } from '../Buttons';
export function GetProdSkuData() {
  const data = useStaticQuery(graphql`
    query CompareCardsQuery {
      allStripeSku {
        edges {
          node {
            id
            localFiles {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            currency
            price
            product {
              id
              metadata {
                Category
              }
              name
            }
          }
        }
      }
      allStripeProduct {
        nodes {
          name
          id
        }
      }
    }
  `);
  return data;
}

export function OrganiseProductData() {
  const queryData = GetProdSkuData();
  const data = queryData.allStripeProduct.nodes;
  const skuData = queryData.allStripeSku.edges;
  var organisedData = {};
  data.map((node) => {
    organisedData[node.id] = skuData.map((edge) => {
      if (edge.node.product.id == node.id) {
        return {
          skuid: edge.node.id,
          image: edge.node.localFiles[0].childImageSharp.fluid,
          price: edge.node.price,
          name: edge.node.product.name,
        };
      }
    });
    organisedData[node.id].push(node.name);
  });
  Object.keys(organisedData).forEach(function (key) {
    var filtered = organisedData[key].filter(function (el) {
      return el != null;
    });

    organisedData[key] = filtered;
  });

  return organisedData;
}

const display = (data, value, options, change) => {
  var object;
  if (value) {
    object = data[value];
  } else {
    object = data[Object.keys(data)[1]];
  }
  const name = object.slice(-1)[0]
  return (
    <div className="card-compare">
      <select onChange={change} value={value}>
        {options.map((option) => {
          return <option value={option[1]}>{option[0]}</option>;
        })}
      </select>
      <div className="card-compare-container">
        <Img className="card-compare-img" fluid={object[0].image}></Img>
        <p>{name}</p>
      </div>
      <AddToCartButton
        skuid={object[0].skuid}
        price={object[0].price}
        description={'hello'}
        image={object[0].image}
        prodid={value}
        productName={name}
        isDark={true}
      />
      <LearnMoreButton route={'/'+ value} isDark={true} />
    </div>
  );
};

export default function CompareCards({ type }) {
  const data = OrganiseProductData();
  // Declare a new state variable, which we'll call "count"
  const [selected, setSelected] = useState({ value: null });
  const [selected2, setSelected2] = useState({ value: null });
  const [selected3, setSelected3] = useState({ value: null });
  const change = (event) => {
    setSelected({ value: event.target.value });
    console.log(event.target.value);
  };
  const change2 = (event) => {
    setSelected2({ value: event.target.value });
    console.log(event.target.value);
  };
  const change3 = (event) => {
    setSelected3({ value: event.target.value });
    console.log(event.target.value);
  };

  var options = [];
  if (type == 'Laptops') {
    Object.keys(data).forEach(function (key) {
      options.push([data[key].slice(-1)[0], key]);
    });
  }
  return (
    <div className="card-grid">
      {display(data, selected['value'], options, change)}
      {display(data, selected2['value'], options, change2)}
      {display(data, selected3['value'], options, change3)}
    </div>
  );
}
