import logoChupitraki from '../../assets/logoChupitrakiOk.png'
import cartImg from '../../assets/cart2.png'
import emailImg from '../../assets/logoEmail.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='headerContainer'>
            <NavLink to='/'>
                <img src={logoChupitraki} alt="logoChupitraki" className='logoHeader' />
            </NavLink>
            <div className='listHeaderContainer'>
                <ul className='listHeader'>

                    <NavLink className={({ isActive }) => isActive ? "activeLink" : "liListHeader"} to="/wisky">
                        <li>wisky</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : "liListHeader"} to="/champagne">
                        <li>champagne</li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : "liListHeader"} to="/vodka">
                        <li>vodka</li></NavLink>

                </ul>

                <div className='imgHeaderContainer'>
                    <NavLink to='/form'>
                        <img src={emailImg} alt="logoEmail" className="cartEmailHeader" />
                    </NavLink>
                </div>
                
                    <div className='imgHeaderContainer'>
                        <NavLink to='/carrito'>
                        <img src={cartImg} alt="cartIcon" className="cartEmailHeader" /></NavLink>
                    </div>
                
               
            </div>
        </div>
    )
}