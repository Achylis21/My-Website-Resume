import blogLogo from './img/logo.png';
import "./Styles/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid" id='navbar'>
                    <span className="navbar-brand"><img src={ blogLogo } alt="logo" width={170} height={35} id='logo'/></span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Home'>Home</a></li>
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Bio'>Experience</a></li>
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Certif'>Certification</a></li>
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
        </header>
    );
}

export default Navbar;