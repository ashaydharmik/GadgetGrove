import React from "react";
import "./banner.scss";
import  bannerImg  from "../../asset/banner-img.png";
const Banner = () => {

  const isDesktop = window.innerWidth <= 768;
  return (
    <>
      <div className="banner-container">
        <div className="banner">
        {isDesktop && ( 
            <div className="banner-pic">
              <img src={bannerImg} alt="" />
            </div>
          )}
          <div className="banner-content">
            <h1>SALE!!!</h1>
            <span className="span">UPTO 80% OFF!</span>
            <p id="para">
            "Get Ready for Shopping Delight: Experience the Joy of Massive Discounts Across All Categories – Your Dream Products, Now Within Reach!"
            </p>
            <div className="info-button">
              <p className="readNow">Read More</p>
              <p className="shopNow"><a href="#comeToCategory">Shop Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
