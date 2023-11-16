import './Styles/Certif.css';
import RelationDB from '../Utils/img/Coursera-RelationalDB.jpg';
import infosec from '../Utils/img/Coursera-InfoSec.jpg';
import Footer from './Footer.jsx';
function Certif () {

    const handleClick = (url) => {
        if(url === 1){
            window.open('https://coursera.org/verify/HRZFKS482MHU', "_blank", "noreferrer");
        }
        if(url === 2){
            window.open('https://coursera.org/verify/4UZVRN74GGBL', "_blank", "noreferrer");
        }
    }

    return(
        <div className="container-fluid px-0 custom-bg-certif">
            <div className='container-fluid cont-row1-certif'>
                <div className="row text-center mt-5">
                    <div className="col" id='certif-first-row'>
                        <p style={{fontWeight:'Bold',fontFamily:'MODERNE SANS', fontSize:'40px', marginBottom:"0"}}>My Certifications</p>
                    </div>
                </div>
            </div>
            <div className='container my-4 py-3 certif-property'>
                <div className="row">
                    <div className="col-auto">
                        <div class="card custom-border" style={{width: '18rem'}}>
                            <img src={infosec} class="card-img-top" alt="Infosec"/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Information Security</h5>
                                <p class="card-text">
                                    This is an online non-credit course authorized by University of London and Royal Holloway,
                                    University of London and offered through Coursera. This certification refers to the course
                                    "Information Security: Context and Introduction". 
                                </p>
                                <button onClick={() => handleClick(1)} className='btn btn-outline-primary mt-auto'>Verify here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-flex align-items-stretch">
                        <div class="card custom-border" style={{width: '18rem'}}>
                            <img src={RelationDB} class="card-img-top" alt="RelationalDB" style={{marginBottom:'6px'}}/>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">Relational Database</h5>
                                <p class="card-text">
                                    This is an online non-credit course authorized by University of Colorado Boulder and offered
                                    through Coursera. This certification refers to the course
                                    "Relational Database Design". 
                                </p>
                                <button onClick={() => handleClick(2)} className='btn btn-outline-primary mt-auto'>Verify here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Certif;