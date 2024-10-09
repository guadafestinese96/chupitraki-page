import './Cart.css'
import imgCarrito from '../../assets/carrito.png'
import whLogo from '../../assets/whatsappLogo.png'
import emailLogo from '../../assets/logoEmail.png'
import { NavLink } from 'react-router-dom'

export default function Cart() {
    return (
        <div className="cartContainer">
            <h2 className='titleCart1'>Realizá tu compra por Whatsapp, Email o Instagram</h2>
            <img src={imgCarrito} alt="imgCarrito" className='imgCarritoCart'/>
            <div className='contactContainer'>
            <div className='contact'>
               
                <a href="https://api.whatsapp.com/send/?phone=1150057994&text&type=phone_number&app_absent=0" target="_blank">
                    <img src={whLogo} alt="whLogo" />
                </a>
            </div>
            <div className='contact'>
               
                <NavLink to='/form'>
                    <img src={emailLogo} alt="emailLogo" />
                </NavLink>
            </div>
            </div>


        </div>
    )
}

