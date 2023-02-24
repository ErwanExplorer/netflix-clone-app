import React from 'react';
import '../styles/Navbar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { useState } from 'react';

const Navbar = () => {

    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, settoggleMenu] = useState(false);

    const transitionNavBar = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    }
    useState(() => {
        document.addEventListener('scroll', transitionNavBar);
    });

    const toggleMenuClick = () => {
        console.log('toggleMenuClick');
        toggleMenu ? settoggleMenu(false) : settoggleMenu(true);
    }

    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            <button className='nav__burger' onClick={toggleMenuClick}>
                <MenuIcon />
            </button>
            <img src="./images/logo.png" alt="Netflix" className='nav__logo' />
            <nav className='nav__links'>
                <a href="/" className='nav__link'>Accueil</a>
                <a href="/" className='nav__link'>Séries</a>
                <a href="/" className='nav__link'>Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action"><SearchIcon /></a>
                <a href="/" className="nav__action">DIRECT</a>
                <a href="/" className="nav__action"><CardGiftcardIcon /></a>
                <a href="/" className="nav__action"><NotificationsIcon /></a>
                <a href="/" className="nav__action">
                    <img src="./images/avatar.png" alt="Avatar" className='nav__avatar' />
                </a>
            </div>
        </div>
    );
};

export default Navbar;