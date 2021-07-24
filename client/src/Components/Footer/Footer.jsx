import Logo from "../../Media/Logo.png"
import "./Footer.scss"
import { FaYoutube,FaTelegramPlane,FaDragon} from "react-icons/fa";


export default function Footer(){
    return (
        <footer className="footer-container">
            <div className="menu-l-container">
                <ul className="menu-left">
                    <li>Contacto</li>
                    <li>Nosotros</li>
                    <li>Comunidad</li>
                </ul>
            </div>
            <img src={Logo} className="footer-logo" alt="not found"/>
            <div className="menu-r-container">
                <ul className="menu-right">
                    <li className="item-li"><a href="https://www.youtube.com/channel/UCFbMgLQ8gkFIVb6LuSUUT6Q"><FaYoutube/></a></li>
                    <li className="item-li"><a href="https://t.me/CoinaryTV"><FaTelegramPlane/></a></li>
                    <li className="item-li"><a href="https://dragonary.com/es/"><FaDragon/></a></li>
                </ul>
            </div>
        </footer>
    )
}