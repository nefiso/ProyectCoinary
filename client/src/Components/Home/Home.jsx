import dragonary from "../../Media/Dragonary.gif"
import "./Home.scss"
import CryptoBox from "../CryptoBox/CryptoBox"

export default function Home(){
    return(
        <div>
            <img className="dragonary-banner" src={dragonary} alt="not found"/>
            <CryptoBox/>
        </div>
    )

}