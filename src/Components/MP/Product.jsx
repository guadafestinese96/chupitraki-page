import chandonDelice from '../../../public/delice.png'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { useState } from 'react';



export default function Product(){
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('YOUR_PUBLIC_KEY',{
        locale: "es-AR"
    });

    const createPreference = async()=>{
        try{
            const response = await axios.post("http://localhost:5174/create_preference", {
                title: "chandon",
                quantity: 1,
                price: 100,})
                
            const {id} = response.data;
            return id;

        }catch(error){
            console.log(error)
        }
    }

    const handleBuy = async () =>{
        const id= await createPreference();
        if(id){
            setPreferenceId(id);
        }
    }

    return(
        <div className="card mb-4">
            <img src={chandonDelice} className='h-[150px]' alt='.'/>
            <p>Chandon</p>
            <button className='bg-black' onClick={handleBuy}>Comprar</button>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
            
        </div>
    )
}