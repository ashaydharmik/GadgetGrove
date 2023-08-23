import React from "react";
import "./category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="categories">
        <div className="category">
          {categories?.data?.map((item) => (
            <div
              className="intro"
              key={item.id}
              onClick={() => navigate(`/category/${item.id}`)}
            >
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data.attributes.url
                }
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="newProducts">
          <p>New Arrivals</p>
          <h1>UPTO <span style={{color:"red"}}>80% OFF</span> - All Electronic Gadgets</h1>
          <button>Explore More</button>
        </div>
      </div>
    </>
  );
};

export default Category;
