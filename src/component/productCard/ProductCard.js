import React from 'react'
import "./productCard.scss"
export default function ProductCard() {
  return (
    <div className='product-container'>
      <div className="image">
        <img src='/images/9__1_-removebg-preview.png' alt='product-pics' />
     <div className='sale'><p>SALE!</p></div> 

<div className='add-to-cart'><p>ADD TO CART</p></div>
      </div>
        <div className='caption'>
            <h5 className='product-name'>Product Name</h5>
            <p className='price'><span>$500.00</span>$5,000.00</p>
        </div>
    </div>
  )
}
