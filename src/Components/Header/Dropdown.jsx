import { NavLink } from "react-router-dom";
import copa from '../../assets/coctail.png'

export default function Example() {
    return (
        <div className="dropdown">
            <h2 className="productsTitle">productos</h2>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                <img src={copa} className="copa" alt="copa" />
                
            </button>
            <ul className="dropdown-menu">
                <li className="liDropdown"><NavLink to='/wisky' className={({isActive})=> isActive ? "dropdown-item-active" : "dropdown-item"}>wisky</NavLink></li>
                <li className="liDropdown"><NavLink to='/champagne' className="dropdown-item">champagne</NavLink></li>
                <li className="liDropdown"><NavLink to='/vodka' className="dropdown-item">vodka</NavLink></li>
                <li className="liDropdown"><NavLink to='/tequila' className="dropdown-item">tequila</NavLink></li>

            </ul>
        </div>

    )
}



