import React from 'react'
import Product from './Product/Product'
import "./products.scss"
const Products = ({innerText, headingText, products}) => {
  return (
    <>
    <div className='product-container' id='comeToCategory'>
       {!innerText && <div className='heading'>
            {headingText}
        </div>}
        <div className='product'>
          {products?.data?.map((item)=>(
            <Product 
            key={item.id}
            id={item.id}
            data={item.attributes}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default Products
