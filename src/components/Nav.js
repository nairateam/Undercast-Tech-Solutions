import logo from '../IMAGES/uc__logo.svg';
import { Link } from 'react-router-dom';
import Btn from './buttons/Btn.js';
import BtnT from './buttons/BtnT.js';
import './CSS/Nav.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faComputer } from '@fortawesome/free-solid-svg-icons';

function Nav() {

    const navRef = useRef();

    const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <img src={logo} className="main__logo" alt='Logo' />
            <p className='logoss'><FontAwesomeIcon icon={faComputer} /> Undercast<br />Tech Solutions</p>
            <nav className='main__nav' ref={navRef}>
                <ul>
                    <li><Link to={'/'} className='Nav__active'>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/services'}>Our Services</Link></li>
                </ul>
                <button className='navs__btn navs__close' onClick={showNavbar}><FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faTimes} /></button>
            </nav>
            <div className='Btn__wrap'>
            <BtnT name="Contact" />
            <Btn name="Portfolio" />
            </div>
            <button className='navs__btn' onClick={showNavbar}><FontAwesomeIcon style={{fontSize: '1.2rem'}} icon={faBars} /></button>
        </header>

    );
};

export default Nav;