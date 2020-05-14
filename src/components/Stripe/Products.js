import { useStaticQuery, graphql } from 'gatsby';
import React, { useContext } from 'react';

import { CartContext } from '../cart';
import CheckoutWrapper from './Checkout';

export function GetProdSkuData() {
  const data = useStaticQuery(graphql`
    query SkusForProduct {
      allStripeSku {
        edges {
          node {
            id
            image
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

export function GetProductNameById(id) {
  const data = GetProdSkuData();
  const nodes = data.allStripeProduct.nodes;
  const prodMap = {};
  nodes.map((node) => {
    prodMap[node.id] = node.name;
  });

  return prodMap[id];
}

export function GetSku(id) {
  var allSkus = GetProdSkuData().allStripeSku.edges;
  console.log(id);
  console.log(allSkus);
  return allSkus.filter((product) => product.node.id === id);
}

export function GetSkuCategory(category) {
  var allSkus = GetProdSkuData().allStripeSku.edges;
  return allSkus.filter(
    (product) => product.node.metadata.Category === category,
  );
}

const Products = () => {
  const edges = GetProdSkuData().allStripeSku.edges;
  const context = useContext(CartContext);

  

  return (
    <div>
      {edges.map((product) => {
        const productName = GetProductNameById(product.node.product.id)
        return (
          <div key={product.node.id} style={{ fontSize: '2rem' }}>
            <div>Name: {product.node.product.name}</div>
            <div>Price: {product.node.price}</div>
            <div>Id: {product.node.id}</div>
            <div>
              Category: {product.node.product.metadata.Category}
            </div>

            {/* <img src={product.node.image} alt="Product Image" /> */}
            <button
              onClick={(e) =>
                context.addToCart(
                  1,
                  product.node.id,
                  product.node.price,
                  'description',
                  product.node.image,
                  product.node.product.id,
                  productName
                )
              }
            >
              Add to Cart
            </button>
            <h1>{'- '}</h1>
          </div>
        );
      })}
      <CheckoutWrapper />
    </div>
  );
};

export default Products;
