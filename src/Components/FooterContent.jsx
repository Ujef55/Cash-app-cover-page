import './FooterContent.css';
import appStoreIcon from '../resources/app-store-logo.svg';
import playStoreIcon from '../resources/play-store-logo.svg';
import arrowLogo from '../resources/arrow.png';
import logo1 from '../resources/logo1.png';
import logo2 from '../resources/logo2.png';
import logo3 from '../resources/logo3.png';

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
                <div className="arrow-logo">
                    <img src={arrowLogo} alt="arrow" />
                </div>
                <div className="footer-text">
                    <p>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                </div>
                <div className="logos">
                    <img className='logo' src={logo1} alt="" />
                    <img className='logo' src={logo2} alt="" />
                    <img className='logo' src={logo3} alt="" />
                </div>
            </div>

        </>
    )
}

export default FooterContent;