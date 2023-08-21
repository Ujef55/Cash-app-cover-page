import './FooterContent.css';
import appStoreIcon from '../resources/app-store-logo.svg';
import playStoreIcon from '../resources/play-store-logo.svg';
import arrowLogo from '../resources/vector1.png';

function FooterContent(props) {
    return (
        <>
            <div className="footer-buttons">
                <button className='app-btn'>
                    <img src={appStoreIcon} alt="icon" className="icon" />
                    {props.appStore}</button>
                <span className="button-gap"></span>
                <button className='app-btn'>
                    <img src={playStoreIcon} alt="icon" className="icon" />
                    {props.playStore}</button>
            </div>
            <div className="arrow-logo">
                <img src={arrowLogo} alt="arrow" />
            </div>
        </>
    )
}

export default FooterContent;