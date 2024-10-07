import logoChupitraki from '../../assets/logoChupitrakiGrey.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import styled from 'styled-components'
import HeaderCart from './HeaderCart'

const DivContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
`

export default function Header() {
   

    return (
        <div className='headerContainer'>
            <NavLink to='/' className={({ isActive }) => isActive ? "activeLogoHeader" : "logoHeaderContainer"}>
                <img src={logoChupitraki} alt="logoChupitraki" className='logoHeader' />
            </NavLink>
            <DivContainer>
                <Dropdown />
                <HeaderCart/>
            </DivContainer>
        </div>
    )
}
