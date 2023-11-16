import './Styles/Footer.css';
import blogLogo from '../Utils/img/logo.png';

function footer () {
    return(
        <div className="my-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="container-fluid first-row">
                            <div className="row">
                                {/* Contact Me */}
                                <div className="col-auto">
                                    <ul className="list-group list-group-flush list-prop">
                                        <li className='list-group-item title-list'>
                                            CONTACT ME:
                                        </li>
                                        <li className="list-group-item">
                                            Email: francisco.danielivan021@gmail.com
                                        </li>
                                        <li className="list-group-item">
                                            Contact Number: (+63) 9205454637
                                        </li>
                                        <li className="list-group-item">
                                            ©2023 Francisco, Daniel Ivan
                                        </li>
                                    </ul>
                                </div>
                                {/* Attributed to: */}
                                <div className="col-auto">
                                    <ul className="list-group list-group-flush list-prop">
                                        <li className='list-group-item title-list'>
                                            ATTRIBUTED TO:
                                        </li>
                                        <li className="list-group-item">
                                            Freepik
                                        </li>
                                        <li className="list-group-item">
                                            Story Set
                                        </li>
                                        <li className="list-group-item">
                                            Upklyk
                                        </li>
                                    </ul>
                                </div>
                                {/* Icons and Images */}
                                <div className="col">
                                    <ul className="list-group list-group-flush list-prop">
                                        <li className='list-group-item title-list'>
                                            INTERNET MATERIALS WEBSITE:
                                        </li>
                                        <li className="list-group-item">
                                            Flaticon
                                        </li>
                                        <li className="list-group-item">
                                            Icons8
                                        </li>
                                        <li className="list-group-item">
                                            Freepik
                                        </li>
                                        <li className="list-group-item">
                                            Haikei
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 m-auto">
                        <div className="custom-border-logo">
                            <img src={ blogLogo } alt="logo" width={170} height={35}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;