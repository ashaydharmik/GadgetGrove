import React from 'react'
import "./product.scss"
import {useNavigate} from "react-router-dom"

const Product = ({id,data}) => {
  const navigate = useNavigate();
  return (
    <>
    <div className='product-card' onClick={()=> navigate(`/product/`+ id)}>
        <div className='product-pic' key={id}>
            <img src={process.env.REACT_APP_DEV_URL + data.img.data.attributes.url} alt='' />
        </div>
        <div className='product-details' >
            <span className='name'>{data.title}</span>
            <span className='price'>&#8377;{data.price}</span>
        </div>
    </div>
    </>
  )
}

export default Product
