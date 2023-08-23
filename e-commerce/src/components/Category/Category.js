import React from 'react'
import Products from '../Products/Products'
import "./category.scss"
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'

const Category = () => {

  const {id} = useParams();

  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  return (
    <>
    <div className='category-container'>
        <div className='layout'>
            <div className='category-title'>{data?.data?.[0]?.attributes.categories.data[0].attributes.title}</div>
            <Products innerText={true} products={data}/>
        </div>
    </div>
    
    </>
  )
}

export default Category
