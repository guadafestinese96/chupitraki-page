import { useState, useEffect } from "react";

export default function Temporizador(){
    //segundos ingresados, segundos que han pasado, los resto

    let [segundosIngresados, setSegundosIngresados] = useState(null);
    let [segundosPasados, setSegundosPasados] = useState(0);

    useEffect(function(){
        if(segundosIngresados === null) return;

        setSegundosPasados(0);

        let interval = setInterval(function(){
            setSegundosPasados((segundosPasados) => segundosPasados+1)
        },1000)
       
        return()=>{
            clearInterval(interval);
        }
    }, [segundosIngresados])

    function parseForm(ev){
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setSegundosIngresados(parseInt(seconds));
        //console.log(seconds);
        //ev.target.seconds.value -->tomo el valor enviado en el formulario con el "name" seconds, que es el input. ev.target me trae toda la info del formulario. con "value accedo al valor de name"
    }

    if((segundosPasados >= segundosIngresados) && (segundosPasados!= 0) && (segundosIngresados != null)){
        return(
            <div>
                <p>Termino el conteo</p>
                <button onClick={()=>{setSegundosIngresados(null)}}>Reiniciar</button>
            </div>
            
        )
    }

    if(segundosIngresados != null){
        return(
            <p>Faltan {segundosIngresados - segundosPasados} segundos</p>
        )
    }

  
    return(
        <div>
            <p>Cuantos segundos quieres?</p>
            <form action="#" onSubmit={ev => parseForm(ev)}>
                <input type="number" name="seconds"/>
                <button>Iniciar</button>
            </form>
        </div>
    )
}