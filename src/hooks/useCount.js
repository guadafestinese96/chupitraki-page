import { useState } from "react"

export default function useCount(item){
    const [count, setCount] = useState(1);

    const add = ()=>{
        setCount(count+1)
        item.quantity++;
    }

    const removeOne = ()=>{
        setCount(count-1)
        item.quantity--;
    }

    const reset = ()=>{
        setCount([])
    }
    return {count, add, removeOne, reset}
    
}