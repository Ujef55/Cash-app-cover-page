import phoneImage from '../resources/intro-phone1.png'
import './Hero.css'

function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-cash-text">
                <h1 className="cash-text">{props.cash}</h1>
            </div>
            <div className="hero-phone-img">
                <img src={phoneImage} alt="" className="phone-img" />
            </div>
            <div className="hero-app-text">
                <h2 className="app-text">{props.app}</h2>
            </div>
        </div>
    )
}

export default Hero;