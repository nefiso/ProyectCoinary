import dragonary from "../../Media/Dragonary.gif"
import "./Home.scss"
import CryptoBox from "../CryptoBox/CryptoBox"
import Slider from "../Slider/Slider"

export default function Home(){
    return(
        <div className="container-home">
            <div className = "column-left">
                <a href="https://dragonary.com/es/"><img className="dragonary-banner" src={dragonary} alt="not found"/></a>
                <Slider/>
            </div>
            <CryptoBox/>
        </div>
    )

}