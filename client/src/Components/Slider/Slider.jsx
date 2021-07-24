import  "./Slider.scss"
import img1 from "../../Media/Slider-img/SliderImg1.jpg"
import img2 from "../../Media/Slider-img/sliderImg2.jpg"
import img3 from "../../Media/Slider-img/SliderImg3.jpg"


export default function Slider(){
    return (
        <ul className="slider-container">
        <li>
            <img className="img" src={img1} alt="not-found"/>Video 1</li>
        <li>
            <img className="img" src={img2} alt="not-found"/>Video 2</li>
        <li>
            <img className="img" src={img3} alt="not-found"/>Video 3</li>
        <li>
            <img className="img" src="" alt="not-found"/>Video 4</li>
        <li>
            <img className="img" src="" alt="not-found"/>Video 5</li>
        </ul>
    )
}