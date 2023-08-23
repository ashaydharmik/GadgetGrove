import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
const location = useLocation();

useEffect(()=>{
  window.scrollTo(0,0)
},[location])


  useEffect(()=>{
    let count = 0;
    cartItem.map((item)=> count += item.attributes.quantity)
    setCartCount(count)



    let subTotal = 0;
    cartItem.map((item)=> subTotal += item.attributes.price * item.attributes.quantity)
    setCartSubTotal(subTotal)
  },[cartItem])

  const handleAddToCart =(product,quantity)=>{
    let item = [...cartItem]
    let index = item.findIndex(p => p.id === product.id)

    if(index !== -1){
      item[index].attributes.quantity += quantity;
    }else{
      product.attributes.quantity = quantity
      item = [...item, product]
    }
    setCartItem(item)
  }
  const handleRemoveFromCart =(product)=>{
    let item = [...cartItem]
    item = item.filter(p=> p.id !== product.id)
    setCartItem(item)
  }
  const handleCartProductCount =(type, product)=>{
    let item= [...cartItem]
    let index = item.findIndex(p => p.id === product.id)
    if(type === "increment"){
      item[index].attributes.quantity += 1;
    }else if(type === "decrement"){
      if(item[index].attributes.quantity === 1){
        return;
      }else{
        item[index].attributes.quantity -= 1 ;
      }
    }
    setCartItem(item);

  }

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItem, 
        setCartItem,
        cartCount, 
        setCartCount,
        cartSubTotal, 
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductCount
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
