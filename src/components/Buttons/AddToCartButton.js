import React, { useContext } from 'react';
import { CartContext } from '../cart';

export default function AddToCartButton({skuid,price,description,image,prodid,productName, isDark}) {
  const context = useContext(CartContext);
  var theme = ''
  if(isDark){
    theme='-dark'
  }
  return (
    <button className="btn-wrap" onClick={(e)=>{context.addToCart(
      1,
      skuid,
      price,
      description,
      image,
      prodid,
      productName
    )}}>
      <div className={`btn btn${theme} btn-purple`}>
        <p>Add to Cart</p>
        <div className="line"></div>
        <i className="fas fa-arrow-right"></i>
      </div>
    </button>
  );
}
