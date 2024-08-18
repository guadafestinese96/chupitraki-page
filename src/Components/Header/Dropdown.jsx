import { NavLink } from "react-router-dom";
import copa from '../../assets/coctail.png'

export default function Example() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" > 
                <img src={copa} className="copa" alt="copa" />
            </button>
            <ul className="dropdown-menu">
                <li className="liDropdown"><NavLink to='/wisky'><a className="dropdown-item" href="#">wisky</a></NavLink></li>
                <li className="liDropdown"><NavLink to='/champagne'><a className="dropdown-item" href="#">champagne</a></NavLink></li>
                <li className="liDropdown"><NavLink to='/vodka'><a className="dropdown-item" href="#">vodka</a></NavLink></li>

            </ul>
        </div>

    )
}



