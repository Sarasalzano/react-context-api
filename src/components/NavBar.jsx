import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
//import pages
import About from "../pages/About";
import Products from "../pages/Products";
export default function NavBar(){

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> HOMEPAGE </Link>
                    </li>
                    <li>
                        <NavLink to="/about" > ABOUT </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products"> OUR PRODUCTS </NavLink>
                    </li>
                </ul>
                <Button />
            </nav>
        </header>
    )
}