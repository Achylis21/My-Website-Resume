import blogLogo from '../Utils/img/logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Styles/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar(){
    const [activeLink, setActiveLink] = useState('Y');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
            <nav className="navbar sticky-top navbar-expand-lg px-5" style={{ backgroundColor: activeLink === 'Y' ? 'transparent' : '#0c2161' }}>
                <div className="container-fluid" id='navbar'>
                    <span className="navbar-brand"><img src={ blogLogo } alt="logo" width={170} height={35} id='logo'/></span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link id='navLink' className="nav-link" to='/' onClick={() => handleLinkClick('Y') }>Home</Link></li>
                            <li className="nav-item"><Link id='navLink' className="nav-link" to='/Experience' onClick={() => handleLinkClick('N')}>Experience</Link></li>
                            <li className="nav-item"><Link id='navLink' className="nav-link" to='#Certification'>Certification</Link></li>
                            <li class="nav-item dropdown"> 
                            <a id='navLink' class="nav-link dropdown-toggle" href="#a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More...
                            </a>
                            <ul class="dropdown-menu">
                                <li><hr className="dropdown-divider"/></li>
                                <li><span>to be updated...</span></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;