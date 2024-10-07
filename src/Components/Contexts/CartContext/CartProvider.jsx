import { useState, useEffect } from "react"
import CartContext from "./CartContext";

export default function CartProvider({children}){
    
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    

    const addToCart =(product)=>{
        const itemInCart = cart.find(item => item.id === product.id);

        if(!itemInCart){
            setCart([...cart, {...product, quantity: 1}])
        }else{
            product.quantity + 1;
 
        }
    }

    const removeFromCart= (product)=>{
        const itemInCart = cart.find(item => item.id === product.id);

        if(itemInCart){
            setCart(cart.filter(item=>item.id != product.id))
        }
    }

    const clearCart = ()=>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, clearCart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    ) 
    
}