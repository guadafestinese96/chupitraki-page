import { useState } from "react"

export default function CartProvider(){
    
    const[cart, setCart] = useState(localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [])

    const addToCart =(product)=>{
        const itemInCart = cart.find(item => item.id === product.id);

        if(!itemInCart){
            alert("Agregado")
            setCart([...cart, {...product, quantity: 1}])
        }else{
            product.quantity+1; 
            console.log(product.quantity) 
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

    return(cart, clearCart, addToCart, removeFromCart)
}