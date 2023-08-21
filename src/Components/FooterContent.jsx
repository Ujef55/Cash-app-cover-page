import './FooterContent.css';
import appStoreIcon from '../resources/app-store-icom.png'

function FooterContent() {
    return (
        <>
            <div className="footer-buttons">
                {/* <img src={FooterContentImg} alt="buttons" /> */}
                <span> <img src={appStoreIcon} alt="icon" /></span>
                <button className='app-btn'>APP STORE</button>
                <span className="button-gap"></span>
                <button className='app-btn'>GOOGLE PLAY</button>
            </div>
        </>
    )
}

export default FooterContent;