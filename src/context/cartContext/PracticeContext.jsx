import { createContext, useContext, useState } from "react";

const CartContext=createContext()



const CartContextProvider = ({children}) => {
    const [Products,setProducts]=useState([])

    const state={
        Products,
    }
  return (
   <CartContext.Provider value={state }>{children}</CartContext.Provider>
  )
}
const useCartContext=()=>{
    useContext(CartContext)

}


export {CartContextProvider,CartContext}