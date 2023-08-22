import './Navbar.css'
import logoImage from '../resources/logo.png';
import EyeLogoImage from '../resources/eyelogo.svg';


function Navbar(props) {
    return (
       
        <nav className='navbar'>
          <img className='main-logo' src={logoImage} alt="Logo" />
          <ul className='nav-list'>
            <li className='nav-item'><a className='nav-link' href="#">{props.signIn}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.legal}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.sec}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.career}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.press}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.support}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.status}</a></li>
            <li className='nav-item'><a className='nav-link' href="#">{props.codeBlog}</a></li>
          </ul>
          <img className='eye-logo' src={EyeLogoImage} alt="EyeLogo" />
        </nav>
      );
}

export default Navbar;
