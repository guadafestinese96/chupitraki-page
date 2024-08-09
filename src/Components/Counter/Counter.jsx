import { useState } from "react"
//useState es un hook, NO UN CUSTOM HOOK

export default function Counter(){
    /*asigno un estado al componente
    /useState() recibe un valor inicial y retorna el valor actual
    const [valor1, valor2] = useState(valor inicial);
    valor1= valor que se va actualizando
    valor2= funcion que actualiza la variable. dispatch -->actualiza el estado
*/
    const [contador, setContador] = useState(0);

    return(
        <div>
            <p>Hiciste click {contador} veces</p>
            <button onClick={()=>{setContador(contador+1)}}>CLICK</button>
        </div>
    )
}