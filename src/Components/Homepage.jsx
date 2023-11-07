import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Styles/Homepage.css';
import pdfUrl from '../Utils/Resume.pdf';
import *  as homeContent from './homeContent.jsx';
import aboutme from '../Utils/svg/aboutme.svg';

function Homepage() {
    const handleClick = (url) => {
        if(url === 1){
            window.open('https://linkedin.com/in/daniel-ivan-francisco-5a439b263', "_blank", "noreferrer");
        }
        if(url === 2){
            window.open('https://github.com/Achylis21', "_blank", "noreferrer");
        }
    }
    const downloadResu = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <div id='Homepage'>
            <div id='wavyImage'>
                <div className='container'>
                    <div class="card mb-3" id='sentence'>
                        <div class="row">
                            <div class="col-md-7">
                                <div class="card-body bg-transparent">
                                    <h1>Hi! I am Daniel,</h1>
                                    <p>A graduate with a degree in Computer Science. I am an aspiring MERN developer.</p>
                                    <button className='btn btn-outline-light' onClick={() => {handleClick(1)}}>LinkedIn</button>
                                    <button className='btn btn-outline-light' onClick={() => {handleClick(2)}}>Github</button>
                                    <button className='btn btn-outline-light'>Contact me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='aboutme'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col'>
                            <img src={ aboutme } alt='From Freepik' width={500} height={500}/>
                        </div>
                        <div className='col'>
                            <div id='abtHeader'>
                                <h2 style={{ color:'#5765C5' }}>About me!</h2>
                            </div>
                            <div>
                                <homeContent.HomeContent />
                                <button className='btn btn-outline-primary' onClick={() => {downloadResu()}}>Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='expert'>
                <homeContent.TechSkill />
            </div>
    </div>
    );
}
export default Homepage;