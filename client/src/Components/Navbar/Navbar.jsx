import CoinaryLogo from "../../Media/Coinary-Logo.png"
import { HiMenu } from "react-icons/hi";
import "./Navbar.scss"

export default function Navbar () {
    return (
    <div>
        <nav className="navbar-container">   
        <img className="coinary-logo" src={CoinaryLogo} alt = "not found"/>
        <HiMenu className="menu-logo"/>
        </nav>
    </div>
    )
}