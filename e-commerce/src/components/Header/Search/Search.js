import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./search.scss";
import earbuds from "../../asset/products/earbuds-prod-1.webp";
import useFetch from "../../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";


const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange =(e)=>{
    setQuery(e.target.value)
  }
  
  let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
  
  if(!query.length){
    data = null;
  }
  
  return(
    <>
      <div className="search-container">
        <div className="search">
          <input type="text" className="input" autoFocus placeholder="Search for Product" value={query} onChange={onChange}/>
          
          <span className="close" onClick={() => setShowSearch(false)}>
            <RxCross1 />
          </span>
        </div>
        <div className="product-content">
          {data?.data?.map((item)=>(
          <div key={item.id} className="product-info" onClick={()=> {
            navigate("/product/" + item.id)
            setShowSearch(false)
            }}>
            <div className="card-product-img">
              <img src={ process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data.attributes.url} alt="" />
            </div>
            <div className="product-details">
              <span className="product-name">{item.attributes.title}</span>
              <span className="product-desc">{item.attributes.desc}</span>
              
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default Search;
