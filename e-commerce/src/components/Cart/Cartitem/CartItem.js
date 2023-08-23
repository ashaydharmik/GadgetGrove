import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import "./cartitem.scss";
import { Context } from "../../../utils/Context";

const CartItem = () => {

  const {cartItem,handleRemoveFromCart,handleCartProductCount} = useContext(Context)
  return (
    <>
      <div className="card-item">
        {cartItem.map((item)=>(
        <div key={item.id} className="card-product">
          <div className="card-product-img">
            <img src={ process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data.attributes.url} alt="" />
          </div>
          <div className="product-details">
            <span className="product-name">{item.attributes.title}</span>
            <RxCross1 className="cross" onClick={()=>handleRemoveFromCart(item)}/>
            <div className="product-count">
              <span onClick={() => handleCartProductCount("decrement",item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductCount("increment",item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span>&#8377;{item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
