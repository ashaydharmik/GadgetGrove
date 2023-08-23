import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import "./header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/Context";
import Contact from "../Footer/Contact/Contact";


const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
const navigate = useNavigate();
const {cartCount} = useContext(Context);
  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset>150){
        setSticky(true)
    }else{
        setSticky(false)
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    <header className={`header-container  ${sticky ? "stick-header" : ""}`}>
      <div className="header">
        <div className="left">
          <ul style={{cursor:"pointer"}}>
            <li onClick={()=> navigate("/")} >Home</li>
            <li><a href="#contact">About</a> </li>
            <li><a href="#comeToCategory">Category</a> </li>
          </ul>
        </div>
        <div className="center">
          <h1 onClick={()=> navigate("/")}>GadgetGrove</h1>
        </div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <MdOutlineFavoriteBorder />
          <span className="cart-icon" onClick={()=> setShowCart(true)}>
            <AiOutlineShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div>
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    
    </>
  );
};

export default Header;
