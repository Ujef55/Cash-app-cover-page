import footerImg1 from '../resources/intro-cubes1.png'
import footerImg2 from '../resources/intro-pillar1.png'

import './Footer.css'


function Footer() {
    return (
        <>
        <div className="footer-image">
            <img className='cube' src={footerImg1} alt="cube" />
            <img className='pillar' src={footerImg2} alt="pillar" />
        </div>
        {/* <div className="footer-content">

        </div> */}
        </>
    )
}

export default Footer;