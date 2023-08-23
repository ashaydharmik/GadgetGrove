import React, { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import "./singleProduct.scss";
import RelatedProducts from "./Related Products/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { Context } from "../../utils/Context";


const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const {handleAddToCart} = useContext(Context);

  if (!data) return;
  const product = data.data[0].attributes;

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount === 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  };

  return (
    <>
      <div className="singleProduct-container">
        <div className="singleProduct">
          <div className="product">
            <div className="left">
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  product.img.data.attributes.url
                }
                alt=""
              />
            </div>
            <div className="right">
              <span className="title">{product.title}</span>
              <span className="price">&#8377;{product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="product-button">
                <div className="quantity" style={{ cursor: "pointer" }}>
                  <span onClick={decrement} style={{ cursor: "pointer" }}>
                    -
                  </span>
                  <span>{count}</span>
                  <span onClick={increment} style={{ cursor: "pointer" }}>
                    +
                  </span>
                </div>
                <div className="add-to-cart">
                  <button className="add-cart" onClick={()=> { 
                    handleAddToCart(data.data[0], count)
                    setCount(1)
                    }}>
                    <IoCart />
                    ADD TO CART
                  </button>
                </div>
              </div>
              <span className="divider" />
              <div className="product-share">
                <span className="text">
                  Category:
                  <span>Headphone</span>
                </span>
                <span className="text">
                  Share:
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related">
        <RelatedProducts 
        productId ={id}
        categoryId={product.categories.data[0].id}/>
      </div>
    </>
  );
};

export default SingleProduct;
