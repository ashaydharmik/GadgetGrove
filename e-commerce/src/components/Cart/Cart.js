import React, { useContext } from "react";
import "./cart.scss";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import CartItem from "./Cartitem/CartItem";
import { Context } from "../../utils/Context";
import {loadStripe} from "@stripe/stripe-js"
import {makePaymentRequest} from "../../utils/api"
import { useNavigate } from "react-router-dom";

const Cart = ({setShowCart}) => {

  const navigate = useNavigate();

  const {cartSubTotal,cartItem}= useContext(Context)

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment = async()=>{
    try{
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: CartItem,
      });
  
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <div className="cart-container">
        <div className="background"></div>
        <div className="cartWindow">
          <div className="cart-heading">
            <div className="heading">
              <h1>Shopping Cart</h1>
            </div>
            <div className="cart-btn" onClick={()=>setShowCart(false)}>
              <RxCross1 />
              <span>close</span>
            </div>
          </div>

         { !cartItem?.length && <div className="empty-cart">
            <BsCartPlus />
            <span>No product found</span>
            <button onClick={()=> navigate("/")}>Return to Shopping</button>
          </div>}
          
         {!!cartItem?.length &&  <>
            <CartItem />
            <div className="cart-footer">
              <div className="total">
                <span className="subtotal">SubTotal:</span>
                <span className="amount">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button" >
                <button onClick={handlePayment}>Checkout</button>
              </div>
            </div>
          </>}
        </div>
      </div>
    </>
  );
};

export default Cart;
