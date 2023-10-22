import blogLogo from './img/logo.png';
import "./Styles/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function Navbar(){
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg px-5">
                <div className="container-fluid" id='navbar'>
                    <span className="navbar-brand"><img src={ blogLogo } alt="logo" width={170} height={35}/></span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Home'>Home</a></li>
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Bio'>Biography</a></li>
                            <li className="nav-item"><a id='navLink' className="nav-link" href='#Skills'>Technical Skills</a></li>
                            <li class="nav-item dropdown">
                            <a id='navLink' class="nav-link dropdown-toggle" href="#a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More...
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#b">Educational Attainment</a></li>
                                <li><a className="dropdown-item" href="#c">Certifications</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><span className="dropdown-item">to be updated...</span></li>
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