import './Navbar.css'
import logoImage from '../resources/logo.png';
import EyeLogoImage from '../resources/eyelogo.svg';


function Navbar() {
    return (
       
        <nav className='navbar'>
          <img className='main-logo' src={logoImage} alt="Logo" /> 
          <ul className='nav-list'>
            <li className='nav-item'><a className='nav-link' href="#">SIGN IN</a></li>
            <li className='nav-item'><a className='nav-link' href="#">LEGAL</a></li>
            <li className='nav-item'><a className='nav-link' href="#">SECURITY</a></li>
            <li className='nav-item'><a className='nav-link' href="#">CAREERS</a></li>
            <li className='nav-item'><a className='nav-link' href="#">PRESS</a></li>
            <li className='nav-item'><a className='nav-link' href="#">SUPPORT</a></li>
            <li className='nav-item'><a className='nav-link' href="#">STATUS</a></li>
            <li className='nav-item'><a className='nav-link' href="#">CODEBLOG</a></li>
          </ul>
          <img className='eye-logo' src={EyeLogoImage} alt="EyeLogo" />
        </nav>
      );
}

export default Navbar;
