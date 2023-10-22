import blogLogo from './img/logo.png';

function Navbar(){
    return (
        <header>
            <h3><img src={ blogLogo } alt="logo" width={170} height={40}/></h3>
            <nav>
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Bio'>Biography</a></li>
                    <li><a href='#Skills'>Technical Skills</a></li>
                    <li><a href='#Educ'>Educational Attainment</a></li>
                    <li><a href='#Certif'>Certification</a></li>
                    <li><a href='#More'>More...</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;