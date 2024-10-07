import { NavLink } from "react-router-dom";
import copa from '../../assets/coctail.png'
import "./Dropdown.css";

export default function Dropdown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <img src={copa} className="copa" alt="copa" />
                productos

            </button>
            <ul className="dropdown-menu">
                <li className="liDropdown"><NavLink to='/allproducts' className={({ isActive }) => isActive ? "dropdown-item-active" : "dropdown-item"}>ver todos</NavLink></li>
                <li className="liDropdown"><NavLink to='/wisky' className={({ isActive }) => isActive ? "dropdown-item-active" : "dropdown-item"}>wisky</NavLink></li>
                <li className="liDropdown"><NavLink to='/champagne' className={({ isActive }) => isActive ? "dropdown-item-active" : "dropdown-item"}>champagne</NavLink></li>
                <li className="liDropdown"><NavLink to='/vodka' className={({ isActive }) => isActive ? "dropdown-item-active" : "dropdown-item"}>vodka</NavLink></li>
                <li className="liDropdown"><NavLink to='/tequila' className={({ isActive }) => isActive ? "dropdown-item-active" : "dropdown-item"}>tequila</NavLink></li>

            </ul>
            

        </div>

    )
}



